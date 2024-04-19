<template>
  <form name="login-form">
    <!-- 帳號輸入框 -->
    <div class="mb-3">
      <label for="username">Username: </label>
      <input id="username" @input="checkInputUsername" type="text" v-model="input.username" placeholder="電話號碼+886"
        :class="{ 'error': showError }">
    </div>
    <!-- 密碼輸入框 -->
    <div class="mb-3">
      <label for="password">Password: </label>
      <input id="password" type="password" v-model="input.password" placeholder="密碼">
    </div>
    <span v-if="showError" class="error-message">{{ errorMessage }}</span>
    <div class="mb-3">
      <button class="btn btn-outline-dark" type="submit" v-on:click.prevent="loginClick()">Login</button>
      <button class=" btn btn-outline-dark" type="button">Register</button>
    </div>
    <h3>{{ this.output }}</h3>
  </form>
</template>

<script>
// import { SET_AUTHENTICATION, SET_USERNAME } from "../store/storeconstants";
import { login } from "../apis/user";
export default {
  name: 'LoginView',
  data() {
    return {
      input: {
        username: "123456789",
        password: ""
      },
      showError: false,
      errorMessage: '',
      output: "",
    }
  },
  methods: {
    checkInputUsername() {
      // 根据设置的条件判断输入内容是否合法
      if (this.input.username.length != 9 || isNaN(this.input.username)) {
        this.showError = true;
        this.errorMessage = '請輸入手機號碼不加0';
        return false;
      } else {
        this.showError = false;
        this.errorMessage = '';
        return true;
      }
    },
    loginClick() {
      //帳號符合手機格式且密碼不為空
      if (this.checkInputUsername() && this.input.password.length != '') {
        login(this.input).then(response => {

          // console.log(response.success);
          if (response.success) {
            this.$store.commit('auth/setToken', response.data.token);
            this.$router.push('/WelcomePage');
          }
        }).catch(error => { console.log(error); });
      }
    },
  },
}
</script>
<style lang="css">
@import url(../assets/css/error.css);
</style>
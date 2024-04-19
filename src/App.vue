<template>

  <v-banner text="..." :stacked="false">
    <template v-slot:actions>
      <div>
        <router-link to="/PostPage">文章</router-link>
        <router-link to="/user/info">個人檔案</router-link>
        <router-link to="/LoginPage">登入頁面</router-link>
        <router-link to="/WelcomePage">歡迎頁面</router-link>
        <router-link to="/RegisterPage">註冊頁面</router-link>
      </div>
    </template>
  </v-banner>
  <p />
  <img alt="Vue logo" src="./assets/esun-logo.jpg">
  <RouterView />
</template>


<script>
// import { VBanner } from 'element-plus';
import Vuetify from 'vuetify/lib'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

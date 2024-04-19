<template>
    <form id="form">
        <h1 class="mb-4 text-center">註冊會員</h1>
        <label for="username">請輸入手機號碼(登入用使用者名稱) </label>
        <input type="text" @input="checkInputUsername" placeholder="請輸入會員名稱" class="mb-3 px-3 pe-4 py-2"
            v-model="user.username" :class="{ 'error': showErrorUsername }" />
        <p />
        <label for=" username">請輸入電子郵件 </label>
        <input type="text" @input="checkInputEmail" placeholder="請輸入電子郵件" class="mb-3 px-3 pe-4 py-2"
            v-model="user.email" :class="{ 'error': showErrorEmail }" />
        <p />
        <label for="username">請輸入密碼 </label>
        <input type="password" placeholder="請輸入密碼" class="mb-4 px-3 pe-4 py-2" v-model="user.password" />
        <p />
        <label for="username">請輸入自我介紹 </label>
        <input type="text" placeholder="請輸入自我介紹" class="mb-4 px-3 pe-4 py-2" v-model="user.biography" />
        <p />
        <button class="btn btn-lg btn-primary w-100" type="submit" @click.prevent="" v-on:click="registerclick">
            註冊
        </button>

        <h3 class="errorMessage">{{ this.errorMessage }}</h3>
    </form>
</template>

<script>

import { register } from "../apis/user";
import { ElMessage } from 'element-plus';
export default {
    data() {
        return {
            user: {
                username: "",
                email: "test@gmail.com",
                password: "123123",
                biography: "hi,大家好"
            }, errorMessage: "",
            showErrorUsername: false,
            showErrorEmail: false
        };
    },
    methods: {
        checkInputUsername() {
            // 根据设置的条件判断输入内容是否合法
            if (this.user.username.length === 9 && !isNaN(this.user.username)) {
                this.showErrorUsername = false;
                this.errorMessage = '';
                return true;
            } else {
                this.showErrorUsername = true;
                this.errorMessage = '請輸入手機號碼不加0';
                return false;
            }
        },
        checkInputEmail() {
            let email = this.user.email;
            let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!reg.test(email)) {
                this.showErrorEmail = true;
                this.errorMessage = "請輸入正確的電子郵件"
                return false;
            } else {
                this.showErrorEmail = false;
                this.errorMessage = ""
                return true;
            }
        },
        registerclick() {
            if (this.checkInputUsername() && this.checkInputEmail()) {
                // 调用 login 方法，并处理结果
                register(this.user)
                    .then(res => {
                        if (res.success) {
                            ElMessage({
                                message: res.message,
                                type: 'seccess',
                                duration: 3 * 1000
                            })
                            console.log(res);
                            this.$router.push('/LoginPage');
                        }
                    })
                    .catch(err => {
                        ElMessage({
                            message: err.message || "error",
                            type: 'error',
                            duration: 3 * 1000
                        })
                        console.log(err);
                    });
            }
        }

    }
}
</script>
<style lang="css">
@import url(../assets/css/error.css);
</style>
<!-- <style>
.errorMessage {
    color: red;
}
</style> -->
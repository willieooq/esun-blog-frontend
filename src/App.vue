<template>

  <header text="方便測試用">
    <div>
      <router-link to="/PostPage" style="margin: 5px;">文章</router-link>
      <router-link to="/user/info" style="margin: 5px;">個人檔案</router-link>
      <router-link to="/LoginPage" style="margin: 5px;">登入頁面</router-link>
      <router-link to="/WelcomePage" style="margin: 5px;">歡迎頁面</router-link>
      <router-link to="/RegisterPage" style="margin: 5px;">註冊頁面</router-link>
    </div>
  </header>
  <p />
  <img alt="Vue logo" src="./assets/esun-logo.jpg">
  <RouterView />
</template>


<script>
// import { VBanner } from 'element-plus';
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

<template>

  <section class="section">
    <div>
      <h2>文章列表</h2>
      <ul>
        <!-- Use v-for to iterate over each item in the list -->
        <li v-for="(post) in posts" :key="post.postId" v-on:click.prevent="gotoPost(post.postId)">
          <div style=" text-align: left;" class="section__details">
            <!-- <h3>{{ index }}</h3> -->
            <!-- {{ post }} -->
            <div class="section__details-info">
              <h1>文章標題({{ post.postId }})</h1>
              <!-- user data -->
              <div class="section__details-img">
                <!-- cover image -->
                <img :src="post.cover_image" alt="cover image" v-if="post.cover_image" />
                <img v-else src="../assets/default-head.jpg" alt="cover image" />
                <!-- author -->
                <p>Written by {{ post.userId }}</p>
              </div>
            </div>
            <!-- 文章內容 -->
            <div class="section__details-content">
              <p>
                {{ post.content }}
              </p>
              <p>{{ post.createdAt }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <button @click="gotoPost(2)">文章2</button>

    </div>
  </section>
  <RouterView />
</template>
<script>
import { getAllPosts } from '@/apis/post';
import { ElMessage } from 'element-plus';
export default {
  name: "PostPage",
  data() {
    return {
      posts: []
    };
  },
  methods: {
    gotoPost: function (id) {
      this.$router.push(`/PostPage/${id}`)
    },
    loadPosts: function () {
      console.log("getAllPosts");
      getAllPosts().then(res => {
        this.posts = res.data.posts;
      }).catch(err => {
        ElMessage({
          message: err.message || "error",
          type: 'error',
          duration: 3 * 1000
        })
      });
    }
  }, mounted() {
    this.loadPosts();
  },
};
</script>
<style scoped>
.section {
  padding: 2.5em 0;
}

.section__details-info h1 {
  margin-bottom: 0.5em;
  text-transform: capitalize;
  font-family: Padauk, sans-serif;
  font-weight: 700;
}

.section__details-img {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
}

.section__details-img img {
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100%;
  border: 1px solid black;
}

.section__details-img p {
  margin-left: 0.75em;
}

@media screen and (min-width: 768px) {
  .section__details-content {
    width: 85%;
  }
}

/* 默认状态下的样式 */
li {
  padding: 10px;
  border: 1px solid #ccc;
  transition: background-color 0.3s;
  /* 添加过渡效果 */
}

/* 鼠标悬停时的样式 */
li:hover {
  background-color: #f0f0f0;
  cursor: pointer;
  /* 鼠标悬停时显示手型光标 */
}
</style>
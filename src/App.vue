<template>
  <div id="app">
    <div class="navbar">
      <div class="left-side">Logo</div>
      <div class="right-side">
        <router-link to="/" tag="a">All Posts</router-link>
      </div>
    </div>
    <Post/>
  </div>
</template>

<script>
import Post from './components/Main'
export default {
  name: 'App',
  components : {
    Post
  }
}
</script>

<style lang="scss" scoped>
.navbar {
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid rgb(163, 163, 163);
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    align-items: center;
    justify-content: space-between;
    .left-side {
      font-weight: bold;
    }
    .right-side {
      a {
        color: rgb(68, 64, 64);
        text-decoration: none;
        font-weight: bold;
        &::hover {  
          background: red;
        }
      }
    }
}
</style>
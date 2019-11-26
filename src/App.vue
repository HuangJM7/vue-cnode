<template>
  <div id="app">
    <Header />
    <div class="wraper">
      <router-view name="main" class="main"></router-view>
      <router-view name="slidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostList from "./components/PostList";

export default {
  name: "app",
  components: {
    Header,
    PostList
  }
};
</script>

<style>
.wraper {
  display: grid;
  grid-template-columns: auto 300px;
  width: 90vw;
  max-width: 1400px;
  margin: 15px auto;
  min-height: 400px;
  gap: 2px 20px;
}
.main{
}

@media screen and (max-width: 980px) {
  .wraper {
    display: grid;
    grid-template-columns: auto;
    width: 90vw;
    margin: 15px auto;
  }
  #slidebar {
    display: none;
  }
}
</style>

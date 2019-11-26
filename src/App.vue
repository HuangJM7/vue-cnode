<template>
  <div id="app">
    <Header />
    <div class="main">
      <router-view name="main"></router-view>
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
.main {
  display: grid;
  grid-template-columns: auto 300px;
  width: 90vw;
  max-width: 1400px;
  margin: 15px auto;
  min-height: 400px;
  gap: 2px 20px;
}

@media screen and (max-width: 980px) {
  .main {
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

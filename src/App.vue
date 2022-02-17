<template>
  <div id="app">
    <h1 id="title">Quiz about Vietnam</h1>
    <h4 id="description">Please chose one answer for each question</h4>
    <div id="container">
      <QuizItemVue
        v-for="(item, index) in quizList"
        :key="index"
        :quiz="item"
      />
    </div>
  </div>
</template>

<script>
import QuizItemVue from "./components/QuizItem.vue";
import quizList from "./data.json";
export default {
  name: "App",
  components: { QuizItemVue },
  data() {
    return {
      quizList: quizList,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
html {
  margin: 0;
  background-color: #1c2329;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 32px;
}
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#title {
  color: #ffffff;
  font-weight: 300;
  margin: 0;
}
#description {
  color: #adb7bd;
  font-weight: 300;
}
</style>

<template>
  <div id="quiz-item">
    <div id="question">{{ quiz.id }}. {{ quiz.question }}</div>
    <div
      id="container"
      v-for="(item, index) in quiz.answerArray"
      :key="index"
      :item="item"
    >
      <div id="answer-item">
        <input
          type="radio"
          :value="item.content"
          v-model="picked"
          :disabled="picked && picked !== item.content"
        />
        <label
          :for="item"
          :class="{
            success: item.isAnswer && picked,
            error: !item.isAnswer && picked,
          }"
          >{{ item.content }}</label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizItem",
  data() {
    return {
      picked: null,
      check: null,
    };
  },
  props: {
    quiz: Object,
  },
  components: {},
  methods: {},
};
</script>

<style scoped>
#quiz-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  border: #adb7bd 1px solid;
  border-radius: 4px;
  padding: 48px 32px;
  margin-top: 24px;
}

#container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
#question {
  margin: 0px 0px 24px 0px;
  font-size: 18px;
  color: #adb7bd;
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

label {
  color: #adb7bd;
}

.success {
  color: green;
}

.error {
  color: red;
}
</style>

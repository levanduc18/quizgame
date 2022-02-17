import { shallowMount } from "@vue/test-utils";
import QuizItem from "@/components/QuizItem.vue";

describe("QuizItem.vue", () => {
  it("click right answer color label change to green", async () => {
    const wrapper = shallowMount(QuizItem, {
      propsData: {
        quiz: {
          id: 1,
          question: "Where is Vietnam?",
          answerArray: [
            { content: "In Asia", isAnswer: true },
            { content: "In Europe", isAnswer: false },
            { content: "In Africa", isAnswer: false },
            { content: "In America", isAnswer: false },
          ],
        },
      },
    });

    await wrapper.findAll("input").at(0).trigger("click");
    expect(wrapper.findAll("label").at(0).classes()).toContain("success");
  });
  it("click wrong answer color label change to red", async () => {
    const wrapper = shallowMount(QuizItem, {
      propsData: {
        quiz: {
          id: 1,
          question: "Where is Vietnam?",
          answerArray: [
            { content: "In Asia", isAnswer: true },
            { content: "In Europe", isAnswer: false },
            { content: "In Africa", isAnswer: false },
            { content: "In America", isAnswer: false },
          ],
        },
      },
    });
    await wrapper.findAll("input").at(1).trigger("click");
    expect(wrapper.findAll("label").at(1).classes()).toContain("error");
  });
  it("check it render all answer", () => {
    const wrapper = shallowMount(QuizItem, {
      propsData: {
        quiz: {
          id: 1,
          question: "Where is Vietnam?",
          answerArray: [
            { content: "In Asia", isAnswer: true },
            { content: "In Europe", isAnswer: false },
            { content: "In Africa", isAnswer: false },
            { content: "In America", isAnswer: false },
          ],
        },
      },
    });
    expect(wrapper.findAll("input").length).toBe(4);
  });
});

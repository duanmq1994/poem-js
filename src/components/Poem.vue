<script setup>
import { onMounted, ref } from 'vue';
import generate from '../js/generator';

const poem = ref([])
const count = ref(5)

defineProps({
  msg: String,
});

onMounted(() => {
  poem.value = ['期待你的诗作']
})

const handleGenerate = () => {
  poem.value = generate(count.value, false)
}
</script>

<template>
  <div class="container">
    <div class="control-container">
      <span class="control-text">想看{{ count }}句：</span>
      <input class="slider" type="range" v-model="count" step="1" min="1" max="15">
      <button class="main-button" @click="handleGenerate">生成</button>
    </div>
    <div class="poem-container">
      <p class="poem-text" v-for="line in poem">{{ line }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 55px;
  align-items: center;
}
.control-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  width: 100%;
}
.slider {
  width: 75%;
  -webkit-appearance: none;
  background-image: var(--primary-color);
  border-radius: 10px;
  outline: none;
}
.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
}
.main-button {
  border: none;
  background-image: var(--primary-color);
  color: white;
  border-radius: 20px;
  width: 45%;
  height: 40px;
}
.poem-container {
  padding: 15px 25px;
  border: 8px solid;
  border-image: var(--primary-color) 20 stretch;
  width: 60%;
  max-width: 500px;
  height: max-content;
  min-height: 50px;
  text-align: center;
}
.control-text {
  font-size: 16px;
  color: var(--text-color);
}
.poem-text {
  font-size: 15px;
  color: var(--text-color);
  line-height: 30px;
}
</style>

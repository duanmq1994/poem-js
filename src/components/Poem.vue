<script setup>
import { onMounted, ref } from 'vue';
import generate from '../js/generator';

const poem = ref('')
defineProps({
  msg: String,
});

onMounted(() => {
  poem.value = generate(5, false)
})
</script>

<template>
  <div class="container">
    <div class="control-container">
      <input class="slider" type="range">
      <button class="main-button">生成</button>
    </div>
    <div class="poem-container">
      <p v-for="line in poem">{{ line }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}
.control-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
}
.slider {
  width: 75%;
}
.main-button {
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 15px;
  width: 40%;
  height: 30px;
}
.poem-container {
  padding: 15px 25px;
  border: 3px cornflowerblue solid;
  border-radius: 10px;
  width: 60%;
  max-width: 500px;
  height: max-content;
  min-height: 80px;
}
</style>

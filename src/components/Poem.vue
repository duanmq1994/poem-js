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

  </div>
  <p v-for="line in poem">{{ line }}</p>
</template>

<style scoped>
.container {
  padding: 5rem;
}
</style>

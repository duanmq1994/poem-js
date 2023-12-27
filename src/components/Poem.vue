<script setup>
import { onMounted, ref } from 'vue';
import generate from '../js/generator';

const poem = ref('')
defineProps({
  msg: String,
});

onMounted(() => {
  poem.value = generate(3)
})
</script>

<template>
  <p v-for="line in poem">{{ line }}</p>
</template>

<style scoped></style>

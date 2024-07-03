<template>
  <div class="wrap">
    <p>Numbers: {{ numbers.join(', ') }}</p>
    <p v-if="calculating">Please wait...</p>
    <p v-else>Result: {{ sum }}</p>
    <button @click="calculateSum">Calculate</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const numbers: number[] = [1, 2, 3, 4, 5]
const calculating: Ref<boolean> = ref(false);
const sum: any = ref(null);
let worker: any = null;

const calculateSum = () => {
  calculating.value = true;

  worker = new Worker('/sum-worker.worker.js');

  worker.onmessage = function(event) {
    sum.value = event.data.result;
    calculating.value = false;
    worker.terminate(); 
  };
  console.log({ numbers: numbers });
  
  worker.postMessage({ numbers: numbers });
};
</script>

<style lang="scss" scoped>
  .wrap {
    padding: 50px;
  }
</style>
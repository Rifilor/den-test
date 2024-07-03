<template>
  Select page
</template>
<script setup>
const localePath = useLocalePath();
await navigateTo(localePath('/arrival'))
</script>

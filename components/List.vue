<template>
  <ListItem v-for="value in descriptions" :description="value" />
</template>

<script setup lang="ts">
const descriptions = ref([
  "going to the community to Know.",
  "asking for support by Networking with others.",
  "develop programs that are solution oriented."
]);
</script>

<style scoped></style>

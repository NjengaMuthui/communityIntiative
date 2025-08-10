<template>
  <div class="list-item">
    <div class="list-item-head">
      {{ head }}
    </div>
    <div class="line"></div>
    <div class="list-item-description">
      {{ description }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
    required: true
  }
});
const head = computed(() =>
  props.description ? props.description.charAt(0).toUpperCase() : ""
);
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 30px;
  color: var(--color-header);
}
.list-item-head {
  font-size: 2rem;
  font-weight: 700;
}
.line {
  height: 3px;
  width: 15px;
  background-color: var(--color-text);
}
</style>

<template>
  <a :href="`/${pros.name}`" class="app-container">
    <div class="avatar">
      <img src="@/assets/slide.jpg" alt="Logo" />
    </div>
    <div class="info-container">
      <h5 class="name">{{ pros.name }}</h5>
      <p class="description">
        {{ pros.description }}
      </p>
    </div>
    <div class="link-icon">
      <div class="arrow-left-up">
        <IconsArrowLeftUp />
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const pros = defineProps({
  name: {
    type: String,
    default: "Child Community Initiative"
  },
  description: {
    type: String,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
});
</script>

<style scoped>
.app-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-text-inverse);
  padding: 5px;
}

.avatar {
  border-radius: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
  margin: 0 10px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}

.name {
  font-size: 1em;
}

.description {
  font-size: 0.85em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
}

.link-icon {
  margin-left: 12px;
  height: 100%;
}

.arrow-left-up {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: var(--color-text-inverse) 1px solid;
  border-radius: 50%;
}
</style>

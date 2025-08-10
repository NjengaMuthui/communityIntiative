<template>
  <section class="slider" ref="slider">
    <div class="blury"></div>
    <div
      class="slider-track"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div class="slider-item" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Slide ' + (index + 1)" />
      </div>
    </div>
    <div class="text-container">
      <div class="section-inner-landing">
        <div class="division-button">
          <a href="/donate" class="btn">
            <span>Donate</span>
          </a>
          <a href="/donate" class="btn btn-sec">
            <span>Our Story</span>
          </a>
        </div>

        <div class="division-button">
          <AvatarLink />
          <AvatarLink v-if="isTablet" />
          <AvatarLink v-if="isDesktop" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import slide from "../assets/slide.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

import { ref, onMounted, onUnmounted } from "vue";
const currentSlide = ref(0);
let slideInterval: NodeJS.Timeout | undefined = undefined;
const images = ref([slide, slide2, slide3, slide4, slide5]);
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};

const startAutoSlide = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 8000);
};
const stopAutoSlide = () => {
  clearInterval(slideInterval);
};

const width = ref(0);
const isDesktop = ref(width.value >= 1200);
const isTablet = ref(width.value >= 768);

const updateWidth = () => {
  width.value = window.innerWidth;
  isDesktop.value = width.value >= 1200;
  isTablet.value = width.value >= 768;
};

onMounted(() => {
  updateWidth();
  window.addEventListener("resize", updateWidth);
  startAutoSlide();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
  stopAutoSlide();
});
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}
.slider-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slider-item {
  flex: 0 0 100%;
  height: 100%;
}

.slider-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.blury {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    #161c2d66 0,
    #161c2d99 25%,
    #161c2dcc 50%,
    #161c2d
  );
}
.text-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.section-inner-landing {
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  padding: 30px 0;
}
.division-button {
  display: flex;
  gap: 20px;
  margin: 20px auto;
}
</style>

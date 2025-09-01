<template>
  <div class="flux-page">
    <VueFlux
      :options="options"
      :rscs="rscs"
      :transitions="transitions"
      ref="$vueFlux"
    >
      <template #preloader="preloaderProps">
        <FluxPreloader v-bind="preloaderProps" />
      </template>

      <template #caption="captionProps">
        <FluxCaption v-bind="captionProps" />
      </template>

      <template #controls="controlsProps">
        <FluxControls v-bind="controlsProps" />
      </template>

      <template #pagination="paginationProps">
        <FluxPagination v-bind="paginationProps" />
      </template>

      <template #index="indexProps">
        <FluxIndex v-bind="indexProps" />
      </template>
    </VueFlux>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowReactive } from "vue";
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader,
  Img,
  Book,
  Zip
} from "vue-flux";
import "vue-flux/style.css";

const props = defineProps({
  images: {
    type: Array as () => string[],
    required: true
  }
});

const $vueFlux = ref();

const options = shallowReactive({
  autoplay: true
});

const rscs = shallowReactive(props.images.map((image) => new Img(image)));

const transitions = shallowReactive([Book, Zip]);
</script>

<style scoped>
.flux-page {
  padding-bottom: 30px;
}
@media (min-width: 768px) {
  .flux-page {
    width: 90%;
    margin: 0 auto;
  }
}
@media (min-width: 900px) {
  .flux-page {
    width: 80%;
  }
}
</style>

<template>
  <section class="mvv-home">
    <Mvv :title="mission.title" :content="mission.content">
      <IconsRocket class="accent mvv-icon"></IconsRocket>
    </Mvv>
    <Vision :title="vision.title" :content="vision.content">
      <IconsBino class="green mvv-icon"></IconsBino>
    </Vision>
    <Mvv :title="values.title" :content="values.content">
      <IconsDiamond class="blue mvv-icon"></IconsDiamond>
    </Mvv>
  </section>
</template>

<script setup lang="ts">
const mission = ref({
  title: "VISION",
  content:
    "Creating a society where people are engaged " +
    "to their full potential, as a way of producing " +
    "a holistic pleasant livelihood. Being productive " +
    "and influencing their space positively by applying " +
    "the God given ability."
});
const vision = ref({
  title: "MISSION",
  content:
    "Reaching out to the community and conducting " +
    "livelihood surveys, raising support, and executing " +
    "our mandate to achieve the state of fulfilment in humankind. [GAD]"
});
const values = ref({
  title: "OBJECTIVES",
  content:
    "Upon engaging our mission [GAD], our key " +
    "objective therefore, is; seeing a complete " +
    "person [child], fulfilled and profitable in the " +
    "society they live in and beyond."
});
</script>

<style scoped>
.mvv-icon {
  font-size: 180px;
}
@media (min-width: 768px) {
  .mvv-home {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px 20px;
  }
}
</style>

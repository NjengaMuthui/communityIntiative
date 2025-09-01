<template>
  <div class="page-container">
    <TopContainer :image="Team1" alt="Events" title="Events" class="mv-image" />
    <InfoDual
      :images="images"
      title="Uganda Child Community Initiative Events"
      :info="infomation"
      url="https://youtu.be/9m2bkkOkZSw?si=AIbwvs4Yt_Zi-ynu"
    />
  </div>
</template>

<script setup lang="ts">
import Team1 from "@/assets/team1.jpg";
import Uganda1 from "@/assets/Uganda1.jpg";
import Uganda2 from "@/assets/Uganda2.jpg";
import Uganda3 from "@/assets/Uganda3.jpg";
import Uganda4 from "@/assets/Uganda4.jpg";
import Uganda5 from "@/assets/Uganda5.jpg";
import Uganda6 from "@/assets/Uganda6.jpg";
import Uganda7 from "@/assets/Uganda7.jpg";
import Uganda8 from "@/assets/Uganda8.jpg";

const images = [
  Uganda1,
  Uganda2,
  Uganda3,
  Uganda4,
  Uganda5,
  Uganda6,
  Uganda7,
  Uganda8
];
const infomation = ref<string>(
  "We organize various events throughout " +
    "the year to engage with the community, " +
    "raise awareness, and support our " +
    "initiatives. These events include " +
    "fundraisers, community outreach " +
    "programs, educational workshops, " +
    "and cultural celebrations. Each " +
    "event is designed to foster a sense " +
    "of community, promote our mission, " +
    "and provide opportunities for individuals " +
    "to get involved and make a difference."
);
</script>
<style scoped>
.page-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

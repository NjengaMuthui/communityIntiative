<template>
  <div class="page-container">
    <TopContainer :image="Team1" alt="Events" title="Events" class="mv-image" />
    <InfoDual
      :images="images"
      title="Uganda Child Community Initiative Events"
      :info="infomation"
      :url="videos"
      :list="list"
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
  "The team to Uganda this year was " +
    "QUEST SOLDIERS. We were operating " +
    "under the theme one more heart for God." +
    " The purpose was to reach the people of Northern" +
    " villages of Uganda with the gospel of God. " +
    "During that one week we were there we were " +
    "able to identify quite a good number of " +
    "opportunities, including but not limited to;"
);
const videos = ref<string[]>([
  "https://youtu.be/vetKQAEc0zQ?si=ZkRv43KiZ9bs9x-N",
  "https://youtu.be/8GlT-LEtE5M?si=UqYgCMvsV09uZN_A",
  "https://youtu.be/i4SdW1IRczA?si=38sffCQM5moQdwUO",
  "https://youtu.be/Hzof_blBfM0?si=RjbM4H1Np7xSBdm-",
  "https://youtu.be/9gekPKHILBI?si=bJFO1Z65C2MC9qIm",
  "https://youtu.be/-3al3ZE348I?si=0-uN1PSYoErNAnsa",
  "https://youtu.be/kwogG_-OwL4?si=Zf8t0eNC1r1oe-pl"
]);
const list = ref<string[]>([
  "Sports evangelism.",
  "Health issues.",
  "Agricultural training.",
  "Talent development.",
  "Education"
]);
</script>
<style scoped>
.page-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>

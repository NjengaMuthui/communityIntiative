<template>
  <div class="page">
    <TopSliding />
    <AboutUsHome />
    <MvvHome />
    <WorkHome />
    <ManagerProfile
      :name="name"
      :role="role"
      :photoUrl="photoUrl"
      :bio="bio"
      :contacts="contacts"
    />
  </div>
</template>

<script setup lang="ts">
import photoUrl from "@/assets/profile2.jpg";
const name = ref("Sylvester Onyango Achola");
const role = ref("C.E.0");
const bio = ref(
  "Founder and CEO of Child Community Initiative " +
    "since 2020, Sylvester is a dedicated youth expert " +
    "and trainer of youth leaders in theological " +
    "settings. His passion lies in empowering young " +
    "people to realize their potential and positively " +
    "impact their communities, guided by faith and a " +
    "commitment to holistic development."
);
const contacts = ref([
  {
    label: "Youtube",
    link: "https://youtube.com/@sylvesterachola1895?si=mfX9hCWqjTurwCVE"
  },
  { label: "Email", link: "Childcommunity2020@gmail.com" }
]);
</script>

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
import photoUrl from "@/assets/selfrm.jpg";
const name = ref("Sylvester Achola");
const role = ref("C.E.0");
const bio = ref(
  "lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
    " lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
    "lorem ipsum dolor sit amet, consectetur adipiscing elit." +
    " Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
);
const contacts = ref([
  { label: "Linked In", link: "https://www.linkedin.com" },
  { label: "Email", link: "https://github.com" }
]);
</script>

<template>
  <footer class="footer">
    <div class="ending-statement">
      <p>With Proper Motivation - Everything is Possible.</p>
    </div>
    <div class="social-media">
      <a
        v-for="value in socialMediaLinks"
        :key="value.name"
        :href="value.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-link"
      >
        <component :is="value.icon" class="social-icon" />
      </a>
    </div>
    <div class="ending-title">
      <p>{{ endingTitle }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

// Define social media links with icons
import IconsFacebook from "@/components/icons/Facebook.vue";
import IconsX from "@/components/icons/X.vue";
import IconsInstagram from "@/components/icons/Instagram.vue";
import IconsTiktok from "@/components/icons/Tiktok.vue";

const socialMediaLinks = shallowRef([
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: IconsFacebook
  },
  {
    name: "X",
    url: "https://X.com",
    icon: IconsX
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: IconsInstagram
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/",
    icon: IconsTiktok
  }
]);

// Define the ending title
const endingTitle = ref(
  "© 2025 Child Community Initiative. All rights reserved."
);
</script>

<style scoped>
.ending-statement {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #ecf0f1;
  text-align: center;
  gap: 15px;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.social-media {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.social-link {
  display: inline-block;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.2);
}

.social-icon {
  width: 30px;
  height: 30px;
}

.ending-title {
  font-size: 14px;
  margin-top: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .social-media {
    flex-wrap: wrap;
    justify-content: center;
  }

  .social-icon {
    width: 25px;
    height: 25px;
  }

  .ending-title {
    font-size: 12px;
  }
}
</style>

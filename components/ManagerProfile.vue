<template>
  <div class="profile-card">
    <div class="banner">
      <slot name="banner"></slot>
    </div>
    <div class="avatar-container">
      <slot name="avatar">
        <img :src="photoUrl" alt="Avatar" class="avatar" />
      </slot>
    </div>
    <div class="info">
      <h2 class="name">{{ name }}</h2>
      <h4 class="role">{{ role }}</h4>
      <p class="bio" v-if="bio">{{ bio }}</p>
      <div class="contacts" v-if="contacts.length">
        <a
          v-for="(item, i) in contacts"
          :key="i"
          :href="item.link"
          target="_blank"
          >{{ item.label }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Contact {
  label: string;
  link: string;
}

interface Props {
  name: string;
  role: string;
  photoUrl?: string;
  bio?: string;
  contacts?: Contact[];
}

const {
  name,
  role,
  photoUrl = "",
  bio = "",
  contacts = []
} = defineProps<Props>();
</script>

<style scoped>
.profile-card {
  width: 100%;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
}

.banner {
  height: 200px;
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.avatar-container {
  position: relative;
  margin-top: -100px;
}

.avatar {
  width: 100px;
  height: 100px;
  border: 4px solid #fff;
  border-radius: 50%;
  object-fit: cover;
}

.info {
  padding: 1.2rem;
}

.name {
  font-size: 1.4rem;
  margin: 0.5rem 0 0.2rem;
}

.role {
  font-size: 1.8rem;
  margin: 20px 0;
}

.bio {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
}

.contacts a {
  margin: 0 0.4rem;
  font-size: 0.9rem;
  color: #667eea;
  text-decoration: none;
}

.contacts a:hover {
  text-decoration: underline;
}

/* Responsive */
@media (min-width: 400px) {
  .avatar {
    width: 200px;
    height: 200px;
  }
}
</style>

<template>
  <div class="about-page">
    <TopContainer
      :image="AboutUsHome"
      alt="About Us"
      title="About Us"
      class="mv-image"
    />
    <div class="about-container">
      <div class="about-content">
        <div class="top">
          <h1 class="blue-line title">About Us</h1>
        </div>

        <p>
          We are encompassed by the fact that every child in the community
          requires equal opportunity to harness their full potential. It is true
          that every child or person is born useful in one way or the other,
          what makes the difference is the opportunity accorded each in the
          process of growth.
        </p>
        <p>
          We Child Community Initiative, [CCI] believe in creating environment
          that is conducive to the production of young people and citizens who
          are competent in what they do as a way of contributing positively to
          the well-being of the community they live in. Therefore, we will
          diligently commit ourselves to this course always.
        </p>
        <p>
          We believe that no child is born stupid and no one is designated rich
          or poor, what lacks when such a child appears stupid of a person is
          rich or poor, is the absence or presence of deliberate move to
          equitable opportunities.
        </p>
        <p>
          That though the child is born in an environment of low consideration,
          where nothing positive seem to be associated with, given the
          opportunity equal to that of the child born in an environment of high
          consideration, the child would emerge very industrious.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutUsHome from "~/assets/aboutus.jpg";
</script>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9f9; /* Subtle background for better contrast */
  padding: 0 20px 40px 20px;
}

.about-content {
  width: 100%;
  max-width: 800px; /* Keeps content at a readable width */
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for elevation */
  text-align: justify; /* Align text for readability */
}

h1 {
  font-size: 2.5rem; /* Large, bold heading */
  margin-bottom: 20px;
  color: #333; /* Dark text for better contrast */
  text-align: center; /* Center-align the heading */
}

p {
  font-size: 1.2rem; /* Slightly larger text for readability */
  line-height: 1.8; /* Increased line height for better spacing */
  color: #555; /* Slightly lighter text for secondary content */
  margin-bottom: 15px;
}

@media (min-width: 576px) {
  .about-content {
    padding: 25px;
  }

  h1 {
    font-size: 2.25rem;
  }

  p {
    font-size: 1.1rem;
  }
  .staff-text {
    font-size: 1.5625rem;
  }
  .manage-cont {
    flex-direction: row;
  }
}
</style>

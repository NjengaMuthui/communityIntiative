<template>
  <section class="about-us-home">
    <div class="image-container">
      <img src="~/assets/abouthome.jpg" alt="About Us" />
    </div>
    <div class="details-container">
      <h2 class="red-line">About Us</h2>
      <p>
        We are encompassed by the fact that every child in the community
        requires equal opportunity to harness their full potential. It is true
        that every child or person is born useful in one way or the other, what
        makes the difference is the opportunity accorded each in the process of
        growth.
      </p>
      <p>
        We Child Community Network, [CCI] believe in creating environment that
        is conducive to the production of young people and citizens who are
        competent in what they do as a way of contributing positively to the
        well-being of the community they live in. Therefore, we will diligently
        commit ourselves to this course always.
      </p>

      <a href="/aboutus" class="btn btn-nm">
        <div class="hover"></div>
        <span>Learn More</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.about-us-home {
  width: 100%;
  background-color: #f5f5f5;
  padding: 2rem 0;
}
.image-container {
  width: 95%;
  margin: 0 auto;
}

.image-container img {
  width: 100%;
  object-fit: cover;
  border-radius: var(--img-radius);
}
.details-container {
  width: 95%;
  margin: 30px auto;
}
.details-container h2 {
  font-size: 2.4rem;
  margin: 0 0 20px 20px;
  position: relative;
  width: fit-content;
  color: var(--color-header);
}
.details-container p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 16px;
}
@media (min-width: 768px) {
  .about-us-home {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .image-container {
    padding: 0 2.5%;
  }
}
</style>

<template>
  <div class="work-home-container">
    <div class="pyramid-container">
      <div class="top">
        <p class="pyramid-inner">GOING.</p>
        <p class="pyramid-inner red">COMMUNITY /PEOPLE</p>
      </div>
      <div class="middle">
        <p class="pyramid-inner">DEVELOPING.</p>
        <p class="pyramid-inner red">PROGRAMS.</p>
      </div>
      <div class="bottom">
        <p class="pyramid-inner">ASKING SUPPORT</p>
        <p class="pyramid-inner red">RAISING SUPPORT</p>
      </div>
    </div>
    <div class="details-container">
      <h2 class="red-line">Our Work plan</h2>
      <p>
        Basically we [CCI] will operate from a GAD point of view as a path,
        where our operations will take a triangular format. Notice that the
        people or the community is on the tip top of the pyramid signifying that
        the most important component of CCI is the people, the community.
      </p>
      <p>
        Bellow the pyramid are two supportive components to the one on top of
        the pyramid. That we will need to raise support to achieve the desired
        results in the people or community. And programs that produces the
        activities viable to the development of the people or community.
      </p>

      <a href="/ourwork" class="btn btn-nm">
        <div class="hover"></div>
        <span>Learn More</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.work-home-container {
  width: 100%;
  background-color: #f5f5f5;
  padding: 2.5rem 0;
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
.pyramid-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  flex-direction: column;
}
.pyramid-container .top,
.pyramid-container .middle,
.pyramid-container .bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 5px 0;
  border: 2px solid var(--color-header);
}
.pyramid-container .top {
  width: 60%;
  border-bottom: 0;
}
.pyramid-container .middle {
  width: 70%;
  border-bottom: 0;
}
.pyramid-container .bottom {
  width: 80%;
}
.pyramid-inner {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-header);
  text-align: center;
  margin: 3px 0;
}

@media (min-width: 768px) {
  .work-home-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pyramid-container {
    width: 50%;
  }
  .details-container {
    width: 50%;
    margin: 0 auto;
  }
}
</style>

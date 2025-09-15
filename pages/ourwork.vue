<template>
  <div class="page-container">
    <!-- Header -->
    <TopContainer
      :image="OurWork"
      alt="Our Work"
      title="Our Work"
      class="mv-image"
    />

    <!-- Media slots -->
    <section class="media-section">
      <div class="media-item">
        <img :src="Our1" alt="Our Work Image 1" />
      </div>
      <div class="media-item">
        <img :src="Our2" alt="Our Work Image 2" />
      </div>
    </section>

    <!-- Content Sections -->
    <section
      v-for="(section, idx) in sections"
      :key="idx"
      class="content-section"
    >
      <h2 :id="section.id" class="section-title">{{ section.title }}</h2>
      <div
        v-for="(paragraph, pidx) in section.paragraphs"
        :key="pidx"
        class="paragraph"
      >
        <p>{{ paragraph }}</p>
      </div>
    </section>
    <section class="media-section">
      <div class="media-item">
        <img :src="Our3" alt="Our Work Image 3" />
      </div>
      <div class="media-item">
        <img :src="self" alt="Our Work Image 4" />
      </div>
    </section>
    <section class="media-section">
      <Youtube url="https://youtu.be/5zVQQSgW6Hs?si=Hi2xSH6YVWm3F2RB" />
    </section>
  </div>
</template>

<script setup lang="ts">
interface Section {
  title: string;
  paragraphs: string[];
  id: string;
}
import OurWork from "@/assets/ourwork.jpg";
import Our1 from "@/assets/our1.jpg";
import Our2 from "@/assets/our2.jpg";
import Our3 from "@/assets/our3.jpg";
import self from "@/assets/self.jpg";

const sections: Section[] = [
  {
    title: "1. Going to the community to know. [People]",
    paragraphs: [
      "Going is a very key component of engaging the community. The Lord Jesus Christ is presented as one figure who practiced GOING to the people strategy and it worked wonders.",
      "In normal settings, it would be required that the person with the need is the one to come, as is said in Swahili: 'mwenye haja hufuata choo' (he who is pressed is the one that goes to the toilet) and 'mtaka cha mvunguni sharti ainame' (he who wants something under the table must bend). But He, Jesus Christ of Nazareth, went to the people instead. [Matthew 35:35–38]",
      "Nothing could be further from the truth, that CCN is about People. They will formulate the key as to why we exist. The structure covers people engaged here from a day-old child to the last breath at the end of a person. The main focus, however, will be directed to the development of programs targeting: Early Childhood (0–5 years), Pre-Teenagers (6–13 years), Teenagers (14–18 years), Post Teenagers (19–24 years), Young Adults (25–35 years).",
      "Looking at these age brackets, they exist within the same environment but with distinctive characteristics. CCN seeks to tailor-make programs producing desired outcomes for each group.",
      "Going is very key to CCI because when we go, we develop relationships with people that lead to openness of heart. Sharing problems becomes easier as familiarity grows.",
      "Ministry to the people is about people — not programs or activities. This is the number one factor as CCI seeks to penetrate the community to achieve our key objective: people.",
      "With the holistic agenda in mind, we must also note that while we focus on these age brackets, we will also develop leaders from outside in the initial stages, eventually focusing on developing them from within."
    ],
    id: "going"
  },
  {
    title: "2. Asking for support by networking with others. [War chest]",
    paragraphs: [
      "Partnerships must be forged since no organization can exist in isolation, nor be entirely self-sufficient.",
      "Partnerships should extend beyond financial matters to include information and technology, physical resources and expertise, manpower, and personnel acquisition.",
      "The most pressing need in most organizations is the ability to finance activities that grow from programs. This requires: a drafted budget, funds from partners, and funds raised internally.",
      "Fundraising can be both formatted and random, coming in forms such as donations or monetary contributions."
    ],
    id: "support"
  },
  {
    title: "3. Developing programs that are solution-oriented. [Path]",
    paragraphs: [
      "We will develop culturally appropriate programs through which every young person/adult will count and have the opportunity to showcase their God-given ability, thereby flourishing to their full potential.",
      "Programs, being an outgrowth of our philosophy, are drafted to facilitate smooth running of the organization. The uniqueness of programs will carry the proper DNA of CCI and produce desired outcomes.",
      "Key programs include:",
      "I. The iLead Training — Leadership development focusing on calling, professionalism, and vision.",
      "Activities include youth ministry training covering adolescence, cultural engagement, discipleship, youth culture, family, and African youth identity.",
      "Also, Talks Organized by Design — covering health, career, education, economics, family morals, religion, and team building.",
      "II. The iLove Initiative — Reaching out with acts of mercy meeting basic needs (nutrition, shelter, clothing) and secondary needs (education, health, employment).",
      "III. The iTalent Development — Identifying and developing talents/gifts through sports, theatre, craftsmanship, and other skills.",
      "IV. The iSupport Fund Raiser — Structured fundraising, budgeting, and financial policy development.",
      "V. The iOrphans Support and Care — Supporting total orphans, partial orphans, and vulnerable children through food, shelter, and education."
    ],
    id: "programs"
  },
  {
    title: "Summary",
    paragraphs: [
      "In introducing hope and a future to the young generation, the commitment is worth making.",
      "The path is unpredictable but worth navigating; passion must be centered around people — the reason for God’s creation and Christ’s coming.",
      "God loves people more than anything else, enough to give His Son.",
      "CCN delights in raising godly young people who will positively influence their communities using the word of God as a guide."
    ],
    id: "summary"
  }
];
</script>

<style scoped>
.page-container {
  width: 100%;
  line-height: 1.6;
}

.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
}
.page-header,
.media-section,
.content-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.main-title {
  font-size: clamp(2rem, 3vw, 3.2rem);
  font-weight: bold;
  color: #2a4d69;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: clamp(1.1rem, 1.6vw, 1.4rem);
  color: #555;
}

.media-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.media-item {
  background: #f7f9fc;
  border-radius: 12px;
  padding: 1rem;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}
.media-item img {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content-section {
  margin-bottom: 2rem;
}

.section-title {
  font-size: clamp(1.5rem, 2vw, 2rem);
  color: #1e3a56;
  margin-bottom: 0.8rem;
}

.paragraph {
  margin-bottom: 1rem;
  text-align: justify;
}

/* Responsive layout for media */
@media (min-width: 768px) {
  .media-section {
    flex-direction: row;
  }
  .media-item {
    flex: 1;
  }
}
</style>

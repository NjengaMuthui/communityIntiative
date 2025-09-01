<template>
  <div class="donation-page">
    <TopContainer :image="gal13" alt="" title="Donate" />
    <section class="donate-page-container">
      <DonateCard :items="mpesa">
        <img src="~/assets/safaricom.png" alt="Safaricom Logo" />
      </DonateCard>
      <DonateCard :items="bank">
        <IconsKcb />
      </DonateCard>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Payment } from "~/types/globals";
import gal13 from "~/assets/us9.jpg";

const bank = ref<Array<Payment>>([
  {
    accountNumber: "KCB Account Number:",
    amount: 123456789
  }
]);
const mpesa = ref<Array<Payment>>([
  {
    accountNumber: "Buy Goods:",
    amount: 100001
  }
]);
</script>

<style scoped>
.donate-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@media (min-width: 768px) {
  .donate-page-container {
    margin: 40px 20px;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>

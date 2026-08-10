<script setup lang="ts">
import { RouterView } from "vue-router";

import Header from "@/components/HeaderSection.vue";
import Footer from "@/components/FooterSection.vue";
</script>

<template>
    <Header />
    <main>
      <RouterView />
    </main>
    <Footer />
</template>

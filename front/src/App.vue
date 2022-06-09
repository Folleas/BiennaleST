<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div :style="{ 'background-image': 'url(./fond.png)' }">
    <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

@font-face {
  font-family: "le-murmure";
  src: local("le-murmure"), url(./fonts/le-murmure.otf) format("truetype");
  font-family: "Logisoso";
  src: local("Logisoso"), url(./fonts/Logisoso.ttf) format("truetype");
}

p {
  font-family: "Logisoso";
}

h1 {
  font-family: "le-murmure";
  font-weight: bold;
}
</style>

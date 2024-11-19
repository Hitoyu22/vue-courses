<script setup>
// Importation de la fonction RouterLink pour naviguer entre les pages

import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4"
  >
    <h1 class="text-5xl font-bold mb-4 text-center">Bienvenue sur Vue Courses</h1>
    <p class="text-lg mb-8 max-w-2xl text-center">
      Apprenez à créer des applications modernes avec Vue.js et TypeScript. Explorez les
      fonctionnalités avancées disponibles sur notre site.
    </p>
    <RouterLink
      to="/users"
      class="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
    >
      Accéder aux utilisateurs
    </RouterLink>
  </div>
</template>

<style scoped></style>

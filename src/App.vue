<script setup>
// Importation de la fonction RouterLink pour naviguer entre les pages
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-600">
        <RouterLink to="/home">Vue Courses</RouterLink>
      </h1>
      <nav class="space-x-4">
        <RouterLink to="/home" class="text-gray-700 hover:text-blue-600">Accueil</RouterLink>
        <RouterLink to="/users" class="text-gray-700 hover:text-blue-600">Utilisateurs</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>

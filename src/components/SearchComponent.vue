<script setup lang="ts">
import { defineEmits } from 'vue'

// Permet de remonter l'information à un composant parent
const emit = defineEmits(['search-results'])

// Fonction pour stocker dans une variable la recherche du client.
function handleSearch(event: Event) {
  const searchTerm = (event.target as HTMLInputElement).value
  emit('search-results', searchTerm)
}
</script>

<template>
  <div class="mb-4">
    <!-- Barre de recherche, nous définissons dans l'input la fonction handleSearch pour s'effectuer dès que l'utilisateur écrit-->
    <input
      type="text"
      placeholder="Rechercher un utilisateur..."
      @input="handleSearch"
      class="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-blue-200"
    />
  </div>
</template>

<style scoped></style>

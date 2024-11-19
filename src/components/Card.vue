<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div class="p-6">
      <!-- Titre, corps et paragraphe de la carte -->
      <h2 class="text-xl font-bold text-gray-800 mb-2">{{ title }}</h2>
      <p class="text-gray-600 mb-4">{{ body }}</p>
      <p class="text-sm text-gray-500">Âge : {{ paragraph }}</p>
    </div>
    <div class="p-4 bg-blue-100 text-blue-600 text-sm text-center font-semibold">
      Profil disponible
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// Composant pour afficher une carte avec un titre, un corps et un paragraphe
export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped></style>

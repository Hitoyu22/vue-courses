<script setup lang="ts">
import { ref } from 'vue'
import SearchComponent from '@/components/SearchComponent.vue'
import Card from '@/components/Card.vue'
import User from '@/data/users.json'

// Initialisation des variables

// Récupération des utilisateurs depuis le json
const users = ref(User)

// Liste des utilisateurs filtrés
const filteredUsers = ref(users.value)

// Fonction pour filtrer les utilisateurs à partir du nom et prénom (en prenant en compte la casse)
function filterUsers(searchTerm: string) {
  if (searchTerm) {
    filteredUsers.value = users.value.filter((user) =>
      `${user.name} ${user.surname}`.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  } else {
    filteredUsers.value = users.value
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
    <div class="max-w-6xl mx-auto px-6 py-12">
      <!-- Barre de recherche -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-center mb-4 text-gray-800">Liste des Utilisateurs</h1>
        <p class="text-gray-600 text-center mb-6">
          Recherchez et explorez les profils des utilisateurs.
        </p>
        <!-- Nous affichons le composante de recherche et nous faisons pointer la valeur tapé dedans vers filterUsers -->
        <SearchComponent @search-results="filterUsers" />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Carte pour chaque utilisateur à partir d'un composant personnalisé, nous passons en paramètre chaque champ -->
        <Card
          v-for="user in filteredUsers"
          :key="user.id"
          :title="`${user.name} ${user.surname}`"
          :body="user.description"
          :paragraph="`Âge: ${user.age}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

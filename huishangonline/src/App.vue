<template>
  <div>
    <component :is="currentView" @enterGame="goGame" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomeView from './pages/HomeView.vue'
import GameView from './pages/GameView.vue'

const currentView = ref(HomeView)
function goGame() {
  currentView.value = GameView
}
</script>

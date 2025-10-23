<template>
  <div class="event">
    <h3>{{ event.title }}</h3>
    <p>{{ event.desc }}</p>
  </div>
</template>

<script setup>
defineProps({ event: Object })
</script>

<style scoped>
.event {
  background: #fff8e7;
  border: 2px solid #d1c7a3;
  border-radius: 8px;
  margin: 10px auto;
  padding: 15px;
  width: 80%;
  max-width: 500px;
}
</style>

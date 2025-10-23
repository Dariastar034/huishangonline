<template>
  <div class="price">
    <h4>商品价格</h4>
    <ul>
      <li v-for="g in goods" :key="g.name">{{ g.name }}：{{ g.price }} 两</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({ goods: Array })
</script>

<style scoped>
.price {
  background: rgba(255,255,255,0.9);
  border: 2px solid #b79b6e;
  border-radius: 8px;
  padding: 15px;
  margin: 10px auto;
  width: 80%;
  max-width: 500px;
}
</style>

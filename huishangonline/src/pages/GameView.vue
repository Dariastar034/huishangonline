<template>
  <div class="page">
    <h2>《徽商》财富传承</h2>

    <div class="panel">
      <p>身份：{{ player.status }}</p>
      <p>随身资金：{{ player.cash }} 两</p>
      <p>财库资金：{{ player.vault }} 两</p>
      <button @click="draw('personal')" class="btn">抽取个人事件</button>
      <button @click="draw('global')" class="btn ml">抽取全局事件</button>
    </div>

    <EventBox v-if="event" :event="event" />
    <PricePanel :goods="goods" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getRandomEvent } from '../data/events.js'
import EventBox from '../components/EventBox.vue'
import PricePanel from '../components/PricePanel.vue'

const player = ref({ status: '平民', cash: 500, vault: 1000 })
const goods = ref([
  { name: '食盐', price: 10 },
  { name: '茶叶', price: 10 },
  { name: '徽墨', price: 10 },
  { name: '宣纸', price: 10 },
  { name: '生丝', price: 10 },
  { name: '木材', price: 10 }
])
const event = ref(null)

function draw(type) {
  const e = getRandomEvent(type)
  if (e.effect.money) player.value.cash += e.effect.money
  if (e.effect.price)
    goods.value = goods.value.map(g => ({ ...g, price: Math.round(g.price * e.effect.price) }))
  if (e.effect.good)
    goods.value = goods.value.map(g => g.name === e.effect.good ? { ...g, price: Math.round(g.price * e.effect.price) } : g)
  if (e.effect.status) player.value.status = e.effect.status
  event.value = e
}
</script>

<style scoped>
.page {
  background-image: url('../assets/xuanpaper.png');
  background-size: cover;
  min-height: 100vh;
  text-align: center;
  font-family: 'KaiTi', serif;
  padding: 20px;
}
.panel {
  background: rgba(255,255,255,0.9);
  border: 2px solid #b79b6e;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  display: inline-block;
}
.btn {
  background-color: #b79b6e;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
}
.ml { margin-left: 10px; }
</style>

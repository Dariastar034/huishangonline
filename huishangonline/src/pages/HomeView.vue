<template>
  <div class="bg" >
    <div class="scroll">
      <h1>《徽商》桌游Online</h1>
      <p>一场穿越明清商道的财富传奇。</p>
      <p>掷骰、经商、修路、祭祀、赌坊，体验徽商精神与智慧。</p>
      <p>玩法简述：</p>
      <ul>
        <li>点击「抽取事件」触发命运或机遇。</li>
        <li>管理资金与资产，体验价格波动。</li>
        <li>率先财库达千万两者，可登“富可敌国”成就！</li>
      </ul>
      <button class="btn" @click="$emit('enterGame')">进入游戏</button>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('../assets/xuanpaper.png');
  background-size: cover;
  min-height: 100vh;
  font-family: 'KaiTi', serif;
  color: #3e3e3e;
  display: flex;
  justify-content: center;
  align-items: center;
}
.scroll {
  background: rgba(255, 255, 255, 0.85);
  border: 3px solid #b79b6e;
  padding: 30px;
  width: 80%;
  max-width: 500px;
  border-radius: 12px;
  text-align: center;
}
.btn {
  background: #b79b6e;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>

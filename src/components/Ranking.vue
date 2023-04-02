<script setup>
const users = [
  {
    nick: 'Scripted',
    totalCoins: 14,
    avatar: 'http://localhost:3000/img/test.jpg',
  },
  {
    nick: 'Pyrogeno',
    totalCoins: 17,
    avatar: 'http://localhost:3000/img/a.jpeg',
  },
  {
    nick: 'Pyrogeno',
    totalCoins: 23,
    avatar: 'http://localhost:3000/img/a.jpeg',
  },
]

users.sort((a, b) => (a.totalCoins < b.totalCoins ? 1 : -1))
</script>

<template>
  <div>
    <div class="clasificacion" v-for="(user, index) of users" :key="user.nick">
      <div class="nick">{{ index + 1 }} {{ user.nick }}</div>
      <div class="puntos">{{ user.totalCoins }}</div>
      <div
        class="background"
        :style="{ backgroundImage: `url(${user.avatar})` }"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.clasificacion {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  .nick,
  .puntos {
    padding: 10px;
    font-family: Lobster;
    font-size: 25px;
    text-shadow: 2px 2px 5px rgb(0, 0, 0);
  }

  .background {
    position: absolute;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    height: 70px;
    z-index: -1;
  }
}
</style>

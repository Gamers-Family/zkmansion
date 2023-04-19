<script setup>
const props = defineProps({
  users: Array,
})
</script>

<template>
  <div>
    <div v-for="(user, index) of props.users" :key="user.apodo">
      <a :href="`/perfil/${user.userCode}`" class="participante">
        <div class="nick">
          <div
            class="avatar"
            :style="{ backgroundImage: `url(${user.foto})` }"
          />
          <img :src="`/icons/valorant/${user.rango}.png`" />
          {{ user.apodo }}
        </div>

        <div class="puntos">{{ user.points }}</div>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.participante {
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background: linear-gradient(-30deg, #0d253f, #470047);

  .nick,
  .puntos {
    padding: 10px;
    font-family: Lobster;
    font-size: 25px;
    text-shadow: 2px 2px 5px rgb(0, 0, 0);
    z-index: 1;
  }

  .nick {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 50px;
    }
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid white;
    margin-left: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>

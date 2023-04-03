<script setup>
const link = '/img/maria.png'
</script>

<template>
  <a href="perfil/x">
    <div class="profile-card" :style="{ backgroundImage: `url(${link})` }">
      <div class="card__title">Perfil</div>
    </div>
  </a>
</template>

<style lang="scss">
.profile-card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-position: center;
  background-size: cover;

  &__icon {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
}
</style>

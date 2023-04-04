<script setup>
const props = defineProps({
  link: String,
  title: String,
})
</script>

<template>
  <a href="perfil/x">
    <div
      class="profile-card"
      :style="{ backgroundImage: `url(${props.link})` }"
    >
      <div class="card__title">{{ props.title }}</div>
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
  min-height: 125px;

  background-position: center;
  background-size: cover;

  &__icon {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  link: String,
  foto: String,
  title: String,
})
</script>

<template>
  <a :href="link">
    <div
      class="profile-card"
      :style="{ backgroundImage: `url(${props.foto})` }"
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
  box-shadow: 0 0 5px black;
  background-position: center;
  background-size: cover;

  &__icon {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
}
</style>

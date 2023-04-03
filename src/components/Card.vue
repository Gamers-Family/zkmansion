<script setup>
const props = defineProps({
  title: String,
  icon: String,
  link: String,
})
</script>

<template>
  <a :href="link">
    <div class="card">
      <img v-if="icon" class="card__icon" :src="`/img/${icon}.svg`" />
      <div class="card__title">{{ title }}</div>
    </div>
  </a>
</template>

<style lang="scss">
.card {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-30deg, #0d253f, #470047);

  &__icon {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
}
</style>

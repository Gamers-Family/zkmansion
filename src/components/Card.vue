<script setup>
const props = defineProps({
  title: String,
  icon: String,
  link: String,
  theme: String,
})
</script>

<template>
  <a :href="link">
    <div class="card" :class="theme">
      <img v-if="icon" class="card__icon" :src="`/icons/${icon}.svg`" />
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

  &.ranking {
    background: linear-gradient(-30deg, #aa8b00, #ff00f2);
  }

  &__icon {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
}
</style>

<script setup>
const props = defineProps({
  tipo: String,
  mensaje: String,
})
</script>

<template>
  <div class="notificacion" :class="props.tipo">
    <div class="notificacion__data">
      <img :src="`/img/${props.tipo}.svg`" alt="!" />
      <span>{{ props.mensaje }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.notificacion {
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  &.info {
    background: linear-gradient(-30deg, #8501d1, #00d0ff);
  }

  &__data {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      width: 30px;
      height: 30px;
    }
  }

  &.mision {
    background: linear-gradient(-30deg, #e3bb0a, #ff00f2);
  }
}
</style>

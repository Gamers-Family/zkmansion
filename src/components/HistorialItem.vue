<script setup>
const props = defineProps({
  zkoins: Number,
  concepto: String,
})
</script>

<template>
  <div class="historial">
    <div class="historial__diferencia--rojo">{{ zkoins }} ZK</div>
    <div class="historial__concepto">{{ concepto }}</div>
  </div>
</template>

<style lang="scss">
.historial {
  display: grid;
  grid-template-columns: 40px 1fr;
  font-size: 14px;
  padding: 10px;

  &__diferencia {
    &--verde {
      color: rgb(0, 206, 0);
    }

    &--rojo {
      color: red;
    }
  }

  &__concepto {
    color: rgb(207, 207, 207);
  }
}
</style>

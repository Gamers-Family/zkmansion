<script setup>
const props = defineProps({
  zkoins: Number,
  concepto: String,
})
</script>

<template>
  <div class="historial">
    <div v-if="zkoins < 0">
      <div class="historial__diferencia--rojo">{{ zkoins }} ZK</div>
    </div>
    <div v-else>
      <div class="historial__diferencia--verde"> &nbsp; {{ zkoins }} ZK</div>
    </div>
    <div class="historial__concepto">{{ concepto }}</div>
  </div>
</template>

<style lang="scss">
.historial {
  display: grid;
  grid-template-columns: 50px 1fr;
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

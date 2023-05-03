<script setup lang="ts">
const props = defineProps({
  normas: {
    type: Array, // Cambiado de Object a Array
    required: false,
  },
  reglas: {
    type: Array, // Cambiado de Object a Array
    required: false,
  },
})
</script>

<template>
 <div class="regla" v-for="(regla, index) in reglas" :key="index">{{ regla }}</div>
  <div class="norma" v-for="(norma, index) in normas" :key="index">
    <span class="numero">{{ index + 1 }} - </span>{{ norma }}
  </div>
</template>

<style lang="scss">
.regla{
  margin-bottom: 5px;
}

.norma {
  margin-bottom: 5px;

  .numero {
    color: rgb(0, 255, 179);
  }
}
</style>
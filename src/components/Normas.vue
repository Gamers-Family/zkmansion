<script setup lang="ts">
const props = defineProps({
  normas: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="norma" v-for="(norma, index) in normas" :key="norma">
    <span class="numero">{{ index + 1 }} - </span>{{ norma }}
  </div>
</template>

<style lang="scss">
.norma {
  margin-bottom: 5px;

  .numero {
    color: rgb(0, 255, 179);
  }
}
</style>

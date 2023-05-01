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
    {{ index + 1 }} - {{ norma }}
  </div>
</template>

<style lang="scss">
.norma {
  margin-bottom: 5px;
}
</style>

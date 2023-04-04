<script setup>
const props = defineProps({
  fecha: String,
  title: String,
  icono: String,
})
</script>

<template>
  <div class="horario">
    <div class="logo">
      <img src="/img/pelota.svg" />
    </div>
    <div class="info">
      <div class="info__fecha">{{ props.fecha }}</div>
      <div class="info__title">{{ props.title }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.horario {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: rgb(202, 202, 202);
  box-shadow: 5px 5px 8px 0 rgba(94, 94, 94, 0.541);

  .logo {
    display: flex;
    padding: 10px;
    padding-right: 20px;
    border-right: 2px solid #16071d;
    img {
      filter: invert(1);
      width: 40px;
    }
  }
  .info {
    padding: 10px 20px;

    &__fecha {
      font-size: 15px;
      color: black;
      font-weight: bold;
    }
    &__title {
      font-size: 11px;
      color: rgb(38, 38, 38);
    }
  }
}
</style>

<script setup>
const props = defineProps({
  dia: String,
  hora: String,
  titulo: String,
  icono: String,
  endDate: String,
})

const isDone = new Date() - new Date(props.endDate) >= 0
</script>

<template>
  <div class="white-card" :class="isDone ? 'done' : ''">
    <div class="icono">
      <img :src="`/icons/${props.icono}.svg`" />
    </div>
    <div class="info">
      <div class="info__fecha">
        <div class="dia">Dia {{ props.dia }}</div>
        <div class="hora">{{ props.hora }}</div>
      </div>
      <div class="info__title">{{ props.titulo }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.white-card {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background-color: rgb(202, 202, 202);
  box-shadow: 5px 5px 8px 0 rgba(94, 94, 94, 0.541);

  &.done {
    opacity: 0.2;
  }

  .icono {
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

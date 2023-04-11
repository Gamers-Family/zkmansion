<script setup>
const props = defineProps({
  titulo: String,
  stock: Number,
  precio: String,
  foto: String,
})

const base64Image = props.foto
  ? Buffer.from(props.foto.data).toString('base64')
  : ''

const fotoPremio = `data:image/jpeg;base64,${base64Image}`
</script>

<template>
  <div class="premio" :class="!props.stock ? 'outstock' : ''">
    <div class="imagen" :style="{ backgroundImage: `url(${fotoPremio})` }" />
    <div class="info">
      <div class="info__premio">{{ props.titulo }}</div>
      <div class="info__almacen">
        <div class="precio">
          <div class="precio__cantidad">{{ props.precio }}</div>
          <img class="precio__coin" src="/img/zk_color.jpeg" alt="ZK" />
        </div>
        <div class="stock">{{ props.stock }} Uds</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.premio {
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
  background-color: rgb(202, 202, 202);
  border: 1px solid black;
  box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.541);

  &.outstock {
    opacity: 0.2;
  }

  .imagen {
    display: flex;
    width: 100px;
    height: 75px;
    background-size: cover;
    background-position: center;
    border-right: 2px solid #16071d;
  }
  .info {
    padding: 10px 20px;
    width: 100%;

    &__premio {
      font-size: 15px;
      color: black;
      font-weight: bold;
    }
    &__almacen {
      display: flex;
      justify-content: space-between;
    }
    .precio {
      display: flex;
      gap: 5px;
      &__cantidad {
        justify-content: center;
        align-items: center;
        gap: 5px;
        font-size: 20px;
        color: rgb(38, 38, 38);
      }
      &__coin {
        width: 25px;
        height: 25px;
        margin-top: 2px;
        border-radius: 100%;
        border: 2px solid white;
      }
    }

    .stock {
      justify-content: left;
      align-items: center;
      font-size: 18px;
      color: rgb(38, 38, 38);
    }
  }
}
</style>

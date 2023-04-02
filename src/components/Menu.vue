<script setup></script>

<template>
  <div class="menu">
    <div class="header">
      <div class="header__logo">
        <img class="image" src="/img/zk_white.png" alt="ZK" />
        <h1 class="title">MANSION</h1>
      </div>
      <div class="header__monedero">
        <div class="cantidad">14</div>
        <img class="coin" src="/img/zk_color.jpeg" alt="ZK" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.menu {
  height: 50px;
  width: 100%;
  border-bottom: 1px solid $ZKColorB;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    &__logo {
      display: flex;
      align-items: center;

      .image {
        width: 32px;
        height: 32px;
        padding: 10px;
      }

      .title {
        font-size: 20px;
        margin: 0;
      }
    }

    &__monedero {
      display: flex;
      padding: 0 10px;
      gap: 5px;

      .cantidad {
        line-height: 2;
        margin-right: 5px;
      }

      .coin {
        width: 25px;
        height: 25px;
        border-radius: 100%;
        border: 2px solid white;
        animation: spin 2s linear infinite;
      }
    }
  }
}

@keyframes spin {
  0% {
    transform: rotateY(0deg);
    filter: brightness(100%);
  }
  50% {
    filter: brightness(150%);
    transform: rotateY(45deg);
    box-shadow: 0 0 20px 0px purple;
  }
  100% {
    filter: brightness(100%);
    transform: rotateY(0deg);
  }
}
</style>

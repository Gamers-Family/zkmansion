<script setup></script>

<template>
  <div class="menu">
    <div class="header">
      <a href="/">
        <div class="header__logo">
          <img class="image" src="/img/zk_white.png" alt="ZK" />
          <h1 class="title">MANSION</h1>
        </div>
      </a>
      <div class="header__stats">
        <a href="/ranking/global">
          <div class="rango">
            <div class="cantidad">43</div>
            <img class="icono" src="/icons/valorant/immortal.png" />
          </div>
        </a>
        <a href="/monedero">
          <div class="monedero">
            <div class="cantidad">14</div>
            <img class="coin" src="/img/zk_color.jpeg" alt="ZK" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variables.scss';

.menu {
  position: fixed;
  z-index: 2;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: black;
  box-shadow: 0 0 10px 2px rgba(32, 12, 24, 0.527);

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;

    &__logo {
      display: flex;
      align-items: center;

      .image {
        width: 32px;
        height: 32px;
        margin: 5px;
      }

      .title {
        font-size: 20px;
        margin: 0;
      }
    }

    &__stats {
      display: flex;

      .monedero {
        display: flex;
        padding: 0 10px;
        gap: 5px;

        .coin {
          width: 25px;
          height: 25px;
          margin-top: 2px;
          border-radius: 100%;
          border: 2px solid white;
          animation: spin 2s linear infinite;
        }
      }

      .rango {
        display: flex;
        gap: 5px;

        .icono {
          width: 25px;
          height: 25px;
          margin-top: 2px;
        }
      }

      .cantidad {
        line-height: 2;
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

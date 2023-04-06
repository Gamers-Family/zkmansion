<script setup lang="ts">
import { ref } from 'vue'

const type = ref('zkoin')
const cantidad = ref(0)
</script>

<template>
  <div class="admin">
    <select>
      <option value="zkoin">Scripted</option>
      <option value="puntos">Pyrogeno</option>
    </select>

    <hr />

    <div class="block">
      <select class="zk" v-model="type">
        <option value="zkoin">ZKoin</option>
        <option value="puntos">Puntos</option>
      </select>

      <input type="number" v-model="cantidad" placeholder="Cantidad" />

      <button>Add {{ type }}</button>
    </div>

    <div class="block">
      <input type="text" placeholder="Misión" />
      <button>Add Mision</button>
    </div>
  </div>
</template>

<style lang="scss">
.admin {
  padding: 10px;
}

hr {
  width: 70%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid rgb(255, 0, 221);
}

.block {
  display: flex;
  height: 40px;
  gap: 10px;
  margin-bottom: 30px;

  button {
    max-width: 90px;
  }
}
</style>

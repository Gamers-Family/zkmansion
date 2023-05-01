<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import Api from '../api'

const cantidad = ref(0)
const type = ref('zkoins')
const mision = ref('info')
const typeMision = ref('typeMision')
const userCode = ref('todos')
const users = ref([])
const table = reactive([])

const handleAdd = async () => {
  await Api.get(
    `/admin/add?type=${type.value}&cantidad=${cantidad.value}&userCode=${userCode.value}`
  )

  const userName =
    userCode.value === 'todos'
      ? 'Todos'
      : users.value.find((x) => userCode.value === x.userCode).apodo

  alert(`
    Users afectados: (${userName})
    Cantidad: ${cantidad.value}
    Tipo: ${type.value}
  `)
}

const handleAddMision = async () => {
  await Api.get(
    `/admin/new-mision?mision=${mision.value}&userCode=${userCode.value}&type=${typeMision.value}`
  )

  const userName =
    userCode.value === 'todos'
      ? 'Todos'
      : users.value.find((x) => userCode.value === x.userCode).apodo

  alert(`
    Misión enviada a: (${userName})
    Misión: ${mision.value}
  `)
}

onMounted(async () => {
  users.value = await Api.get('/users')
})
</script>

<template>
  <div class="admin">
    <select v-model="userCode">
      <option value="todos">Todos</option>
      <option v-for="user of users" :key="user.userCode" :value="user.userCode">
        {{ user.apodo }}
      </option>
    </select>

    <hr />

    <div class="block">
      <select class="zk" v-model="type">
        <option value="zkoins">ZKoins</option>
        <option value="puntosGeneral">Puntos General</option>
        <option value="futbol">Futbol</option>
        <option value="ajedrez">Ajedrez</option>
        <option value="pong">Ping Pong</option>
        <option value="valorant">Valorant</option>
        <option value="pokemon">Pokémon</option>
        <option value="billar">Billar</option>
        <option value="matar">Matar</option>
        <option value="panuelo">Pañuelo</option>
      </select>
      <input type="number" v-model="cantidad" placeholder="Cantidad" />
      <button @click="handleAdd">Add</button>
    </div>

    <div class="block">
      <select class="zk" v-model="typeMision">
        <option value="info">Info</option>
        <option value="alerta">Alerta</option>
      </select>
      <input type="text" v-model="mision" placeholder="Misión" />
      <button @click="handleAddMision">Add Mision</button>
    </div>

    <hr />
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

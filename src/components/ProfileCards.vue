<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Api from '../api'
import ProfileCard from '../components/ProfileCard.vue'
import { Buffer } from 'buffer'

const props = defineProps({
  users: {
    type: Object,
    required: true,
  },
})

const usersWithImages = ref(props.users)

onMounted(async () => {
  usersWithImages.value = await Api.get('/users/with-images')

  usersWithImages.value = usersWithImages.value.map((user) => {
    if (user.imagen) {
      const base64Image = Buffer.from(user.imagen.data).toString('base64')
      user.imagen = `data:image/jpeg;base64,${base64Image}`
    }
    user.profileLink = `/perfil/${user.userCode}`
    return user
  })
})
</script>

<template>
  <div v-for="user of usersWithImages" :key="user.apodo">
    <ProfileCard
      :title="user.apodo"
      :imagen="user.imagen"
      :link="`/perfil/${user.userCode}`"
    />
  </div>
</template>

<style lang="scss"></style>

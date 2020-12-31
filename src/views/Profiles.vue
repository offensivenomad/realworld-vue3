<template>
  <div class="profiles">
    <ProfileCard
      v-for="profile in profiles"
      :key="profile.id"
      :profile="profile"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileCard from '@/components/ProfileCard.vue'
import ProfileService from '@/services/ProfileService.js'

export default {
  name: 'Profiles',
  components: {
    ProfileCard
  },
  data() {
    return {
      profiles: null
    }
  },
  created() {
    ProfileService.getProfiles()
      .then(response => {
        this.profiles = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.profiles {
  display: flex;
  align-items: space-around;
}
</style>

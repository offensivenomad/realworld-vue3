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
  },
  computed: {
    fullName: {
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      set: function(name) {
        var names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    },
    birthDate: () => {
      return this.profile.dob
    },
    getAge: function() {
      return Math.floor(
        (new Date() - new Date(this.profile.dob).getTime()) / 3.15576e10
      )
    }
  }
}
</script>

<style scoped>
.profiles {
  display: flex;
  align-items: space-around;
}
</style>

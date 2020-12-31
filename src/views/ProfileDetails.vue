<template>
  <div v-if="profile">
    <h1>{{ fullName }}</h1>
    <div class="age">
      <span>DOB: {{ profile.dob }}</span>
      <span>AGE: {{ age }}</span>
    </div>
    <div
      class="locations"
      v-for="location in locations"
      :key="location.type"
      :locations="locations"
    >
      <span>{{ location.street }}</span>
      <span>
        {{ location.suburb }} &nbsp; {{ location.state }} &nbsp;
        {{ location.postcode }}
      </span>
    </div>
  </div>
</template>

<script>
import ProfileService from '@/services/ProfileService.js'

export default {
  props: ['id'],
  data() {
    return {
      profile: null,
      location: null
    }
  },
  created() {
    ProfileService.getProfile(this.id)
      .then(response => {
        this.profile = response.data
      })
      .catch(error => {
        console.log(error)
      }),
      ProfileService.getLocations()
        .then(response => {
          this.locations = response.data
        })
        .catch(error => {
          console.log(error)
        })
  },
  computed: {
    fullName: function() {
      return this.profile.firstName + ' ' + this.profile.lastName
    },
    age: function() {
      var getDob = new Date(this.profile.dob)
      var getNow = new Date()
      var diff = getNow.getTime() - getDob.getTime()

      return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
    }
  }
}
</script>

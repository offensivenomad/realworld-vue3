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

export default {
  name: 'Profiles',
  components: {
    ProfileCard
  },
  data() {
    return {
      profiles: [
        {
          id: 1001,
          title: this.fullName,
          firstName: 'John',
          middleName: 'Doe',
          lastName: 'Example',
          dob: '1980-01-01',
          age: this.getAge
        },
        {
          id: 1002,
          title: this.fullName,
          firstName: 'Jane',
          middleName: 'Doe',
          lastName: 'Example',
          dob: '1990-01-01',
          age: this.getAge
        },
        {
          id: 1003,
          title: this.fullName,
          firstName: 'Barry',
          middleName: 'John',
          lastName: 'Allen',
          dob: '1980-01-01',
          age: this.getAge
        },
        {
          id: 1004,
          title: this.fullName,
          firstName: 'Bruce',
          middleName: 'Knight',
          lastName: 'Wayne',
          dob: '1970-01-01',
          age: this.getAge
        }
      ]
    }
  },
  computed: {
    uID: () => {
      var u = 0
      return this.profile.fullName + u++
    },
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

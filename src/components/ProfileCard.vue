<template>
  <router-link
    class="event-link"
    :to="{ name: 'ProfileDetails', params: { id: profile.id } }"
  >
    <div class="profile-card">
      <span class="id">{{ profile.id }}</span>
      <h4 class="name">{{ fullName }}</h4>
      <div class="age">
        <span>DOB: {{ profile.dob }}</span>
        <span>AGE: {{ age }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    profile: {
      type: Object,
      required: true
    }
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

<style scoped>
.profile-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 2px solid #39495c;
  margin-bottom: 18px;
  margin-right: 18px;
  text-align: left;
  margin-block-start: 0.1em;
}

.profile-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.id {
  display: flex;
  justify-content: flex-end;
  font-size: 8px;
}

.age {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
}

.name {
  margin-block-start: 0.1em;
  margin-block-end: 0.5em;
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>

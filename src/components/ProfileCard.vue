<template>
  <div class="profile-card">
    <span class="id">{{ profile.id }}</span>
    <h4>{{ profile.title }}</h4>
    <span>DOB: {{ profile.dob }}</span>
    <span>{{ profile.age }} </span>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard',
  props: {
    profile: Object
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
}

.profile-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.id {
  font-size: 8px;
}
</style>

<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Home',
  components: {
    EventCard
  },
  data() {
    return {
      events: [
        {
          id: 5928101,
          category: 'animal welfare',
          title: 'Cat Adoption Day',
          description: 'Find your new feline friend at this event.',
          location: 'Meow Town',
          date: 'January 28, 2022',
          time: '12:00',
          petsAllowed: true,
          organizer: 'Kat Laydee'
        },
        {
          id: 5928102,
          category: 'food',
          title: 'Community gardening',
          description: 'Find your new planting friend at this event.',
          location: 'Wood Town',
          date: 'January 15, 2022',
          time: '10:00',
          petsAllowed: true,
          organizer: 'Kat Flower'
        },
        {
          id: 5928102,
          category: 'sustainability',
          title: 'Beach Cleanup',
          description: 'Find your new garbo friend at this event.',
          location: 'Garbo Town',
          date: 'January 31, 2022',
          time: '13:00',
          petsAllowed: true,
          organizer: 'Rubbish Laydee'
        }
      ]
    }
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

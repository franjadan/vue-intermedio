<template>
  <div class="home">
    <Tareas></Tareas>
  </div>
</template>

<script>
import Tareas from '@/components/Tareas.vue'
export default {
  name: 'HomeView',
  components: {
    Tareas
  }
}
</script>

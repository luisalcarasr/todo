<script setup lang="ts">
import { TaskItem, TaskNew } from '@/components'
import { useTodoStore } from '@/stores/todo'

const { tasks } = useTodoStore()
</script>

<template>
  <div class="card">
    <h2 class="card-title">To Do</h2>
    <ul>
      <template v-for="task in tasks" :key="task.id">
        <TaskItem :id="task.id" :description="task.description" :completed="task.completed" />
      </template>
      <li>
        <TaskNew />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply bg-white shadow-md rounded-lg p-4 mx-auto mt-4 max-w-md;

  .card-title {
    @apply text-xl font-semibold border-b-2 border-gray-200 pb-2 mb-4;
  }
}
</style>

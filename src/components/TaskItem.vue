<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'
import type { Task } from '@/types'

defineProps<Task>()

const { remove, complete } = useTodoStore()
</script>

<template>
  <li>
    <input :id="id" type="checkbox" :name="id" :checked="completed" />
    <label :for="id">{{ description }}</label>
    <button @click="remove(id)">🗑️</button>
  </li>
</template>

<style scoped lang="scss">
li {
  @apply mb-2 flex items-center;
  label {
    user-select: none;
  }
}
</style>

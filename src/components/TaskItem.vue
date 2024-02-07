<script lang="ts" setup>
import { useTodoStore } from '@/stores/todo'
import type { Task } from '@/types'

defineProps<Task>()

const { remove, toggle } = useTodoStore()
</script>

<template>
  <li>
    <input :id="id" type="checkbox" :name="id" :checked="completed" @change="toggle(id)" />
    <label :class="{ completed }" :for="id">{{ description }}</label>
    <button @click="remove(id)">🗑️</button>
  </li>
</template>

<style scoped lang="scss">
li {
  @apply mb-2 flex flex-row flex-nowrap;

  input {
    @apply mr-2;
  }

  label {
    @apply flex-1;
    user-select: none;

    &.completed {
      @apply line-through text-gray-500;
    }
  }
}
</style>

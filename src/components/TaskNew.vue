<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const { add } = useTodoStore()

const onKeypress = (event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement
  if (event.key === 'Enter') {
    add(input.value)
    input.value = ''
  }
}
</script>

<template>
  <input type="text" placeholder="Type to create a new task + ⏎" @keypress="onKeypress" />
</template>

<style scoped lang="scss">
input {
  @apply w-full;
}

input:focus {
  @apply outline-none;
}
</style>

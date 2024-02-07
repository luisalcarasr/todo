import type { Task } from '@/types'
import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid'

export const useTodoStore = defineStore('todo', {
  state: () => ({ tasks: (JSON.parse(localStorage.getItem('tasks') || '[]') || []) as Task[] }),
  getters: {},
  actions: {
    add(description: string) {
      this.tasks.push({ id: uuid(), description, completed: false })
      this.saveState()
    },
    remove(id: string) {
      const index = this.tasks.findIndex((task) => task.id === id)
      this.tasks.splice(index, 1)
      this.saveState()
    },
    toggle(id: string) {
      const index = this.tasks.findIndex((task) => task.id === id)
      this.tasks[index].completed = !this.tasks[index].completed
      this.saveState()
    },
    saveState() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})

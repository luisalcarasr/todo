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
      this.tasks = this.tasks.filter((task) => task.id !== id)
      this.saveState()
    },
    complete(id: string) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
      this.saveState()
    },
    saveState() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})

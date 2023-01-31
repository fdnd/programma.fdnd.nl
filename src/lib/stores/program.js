import { writable } from 'svelte/store'

export const loadingState = writable(false)
export const error = writable(false)
export const dataProgram = writable([])



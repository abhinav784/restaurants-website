import { writable} from "svelte/store"
import { browser } from "$app/environment"
export const userStore = writable(browser ? JSON.parse(localStorage.getItem("userStore") || JSON.stringify({})):{});
userStore.subscribe((val) => browser && (localStorage.userStore=JSON.stringify(val)));
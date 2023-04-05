import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useCounterStore = defineStore('counter', ()=>{
    const count = ref(false)
    function changeCount() {
        count.value = true 
    }
    return {count ,changeCount}
})
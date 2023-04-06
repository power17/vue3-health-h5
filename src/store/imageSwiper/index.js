import { defineStore } from 'pinia'
import {ref} from 'vue'
export const useEmailTextStore = defineStore('emailText', ()=>{
    const emailText = ref(false)
    function showEmailText() {
        emailText.value = true 
    }
    return {emailText ,showEmailText}
})
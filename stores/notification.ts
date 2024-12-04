import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const NotifiStore = defineStore({
  id: 'notification',
  state: () => ({
    user_id: null,
  }),
  
  getters: {


  },

  actions: {
    async fetchNew() {

      try {
        const data = await ApiService.get('/user/noticationdlt?user_id='+this.user_id).then(response => {
        

console.log(response);
         });
     
        return true
        } catch (error) {
        return false;
        } 

    },
    async fetchNotication() {

    }

  },



})



import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const NotifiStore = defineStore({
  id: 'notification',
  state: () => ({
    user_id: null,
    data_alert_dlt:[],
    data_alert_news:[],
  }),
  
  getters: {


  },

  actions: {
    async fetchNew() {

      try {
        const data = await ApiService.get('/user/noticationdlt?user_id='+this.user_id).then(response => {  
this.data_alert_dlt = response.data.dlt
this.data_alert_news = response.data.news
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



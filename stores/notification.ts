import { defineStore } from 'pinia'
import ApiService from '../services/api.service';


export const NotifiStore = defineStore({
  id: 'notification',
  state: () => ({
    user_id: null,
    data_alert_dlt:[],
    data_alert_news:[],
    ap_number:null,
    data_app:'',
    dlt: []
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

    },

    async fetchAppointdata() {
      try {
        const data = await ApiService.get('/appointment/reserve/data/'+this.ap_number).then(response => {  
if(response.data){
  this.data_app = response.data[0]
}

console.log(this.data_app);
         });
     
        return true
        } catch (error) {
        return false;
        } 

    },

        async fetchDltType() {
          try {
            const data = await ApiService.get('/master_data/drivinglicense_type').then(response => {
            this.dlt = response.data;
            console.log(this.dlt)
            });
            return true
          } catch (error) {
            return false;
          }
        },

  },



})



import { defineStore } from 'pinia'
import ApiService from '../services/api.service';




export const DltStore = defineStore({
  id: 'dlt',
  state: () => ({
    isActiveCourse:false,
    user_id:null,
    mylic:[],
    dlt_lastes:[],
dlt_all:[],
  }),
  getters: {
   
   
  }, 
  actions: {
   
    async fetchDltUser() {
this.dlt_all = [];
this.dlt_lastes = [];

      try {
        const data = await ApiService.get('/dlt_card/listall/?user_id='+this.user_id).then(response => {

        
if(response.data.length > 0){
for (var i = 0; i < response.data.length; i++) { 


  if(response.data[i].status == 'Y'){
    this.dlt_lastes.push(response.data[i]);
  }else {
    this.dlt_all.push(response.data[i]);
  }
}


}

        });
      } catch (error) {
        return false;
      }

    },

   

  }
})



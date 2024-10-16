import { defineStore } from 'pinia'
import ApiService from '../services/api.service';
import moment from 'moment';

export const AppointmentsStore = defineStore({
  id: 'appointments',
  state: () => ({
    appgroup: [],
    reserve: [],
    event:[],
    reservepass:[],
    reservefisrt:[],
    tooltipText: 'This is a tooltip',
    isShowApp: false,
    loadingApp:false,
    showTooltip:false,
    isShowNoApp: false,
    popupconfirm: false,
    popupcancelapp: false,
    disabledselect:true,
    apdel_id:null,
    ardel_id:null,
    ap_id:null,
    user_id:null,
    appointment: {
      dlt_des: null,
      ap_learn: null,
    },
    form: {
      date_event:0,
      ap_learn_type: 2,
      dlt_code:''
    },
    formdel: {
    user_id:null,
    ap_id:null
    },
    date: null,
    dlt_code:'A1',
    ap_learnlist: [
      {
        value: 1,
        ap_learn: "ทฤษฎี"
      },
      {
        value: 2,
        ap_learn: "ปฏิบัติ"
      }
    ],
    dlttype: [],
    dlt: [
      {
        dlt_code: "A",
        dlt_description_loas:
          "ລົດຈັກສອງລໍ້ ຄວາມແຮງບໍ່ເກີນ 125 cc",
        dlt_description_english:
          "Two-wheels motocycle engine not exceed 125cc", 
      },
      {
        dlt_code: "A1",
        dlt_description_loas:
          "ລົດຈັກສອງລໍ້ ຄວາມແຮງ ແຕ່ 125 cc ຂື້ນໄປ",
        dlt_description_english:
          "Two-wheels motorcycle engine 125 cc and above",    
      },
      {
        dlt_code: "A2",
          dlt_description_loas:
          "ລົດຈັກສາມລໍ້ສ່ວນຕົວ, ລົດສອງລໍ້ ແລະ ສາມລໍ້ໂດຍສານ",
        dlt_description_english:
          "Private three-wheels vehicle Passenger vehicle with two-wheels and three-wheels",   
      },
      {
        dlt_code: "A3",
          dlt_description_loas:
          "ລົດໄຖນາທີ່ແກ່ລໍ້ ແລະ ລົດຕ໋ອກໆ",
        dlt_description_english:
          "Two-wheels tractor with trailer and Walk-behide Tractor",   
      },
      {
        dlt_code: "B",
          dlt_description_loas:
          "ລົດເບົາ ສີ່ລໍ້ ທີ່ມີນ້ຳໜັກລວມບໍ່ເກີນ 3.500 ກິໂລກຣາມ ແລະ ບໍ່ເກີນ 9 ບ່ອນນັ່ງ ລວມທັງຜູ້ຂັບຂີ່",
        dlt_description_english:
          "Car with four-wheels total weight not exceed 3500 kilograms and not more than 9 seats including driver",   
      },
      {
        dlt_code: "C",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້ານ້ຳໜັກລວມ ແຕ່ 3.500 ກິໂລກຣາມ ຫາ 7.500 ກິໂລກຣາມ",
        dlt_description_english:
          "Cargo truck total weight from 3500 to 7500 kilograms",
      },
      {
        dlt_code: "C1",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້ານ້ຳໜັກລວມ ເກີນກວ່າ 7.500ກິໂລກຣາມ ຫາ 15.000 ກິໂລກຣາມ",
        dlt_description_english:
          "Cargo truck total weight exceed 7500 kilogram up to 15000 kilograms",   
      },
      {
        dlt_code: "C2",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້ານ້ຳໜັກລວມ ເກີນກວ່າ 15.000 ກິໂລກຣາມ.",
        dlt_description_english:
          "Cargo truck total weight exceed 15000 kilograms",   
      },
      {
        dlt_code: "D",
          dlt_description_loas:
          "ລົດຂົນສົ່ງຜູ້ໂດຍສານປະເພດ 4 ລໍ້ ຂຶ້ນໄປ, ບໍ່ເກີນ ສິບຫ້າ ບ່ອນນັ່ງ",
        dlt_description_english:
          "Passenger vehicle with 4 wheels or more not more than 15 seats",   
      },
      {
        dlt_code: "D1",
          dlt_description_loas:
          "ລົດຂົນສົ່ງຜູ້ໂດຍສານ ແຕ່ ສິບຫົກ ຫາ ສາມສິບຫ້າ ບ່ອນນັ່ງ",
        dlt_description_english:
          "Passenger vehicle from 16 seats to 35 seats",   
      },
      {
        dlt_code: "D2",
          dlt_description_loas:
          "ລົດຂົນສົ່ງຜູ້ໂດຍສານ ແຕ່ ສາມສິບຫົກ ບ່ອນນັ່ງ ຂຶ້ນໄປ",
        dlt_description_english:
          "Passenger vehicle from 36 seats or more",   
      },
      {
        dlt_code: "E",
          dlt_description_loas:
          "ລົດເບົາ (B), ລົດຂົນສົ່ງສິນຄ້າ (C) ແລະ ລົດຂົນສົ່ງຜູ້ໂດຍສານ (D) ທີ່ແກ່ຫາງລາກນ້ຳໜັກລວມບໍ່ເກີນ 750 ກິໂລກຣາມ",
        dlt_description_english:
          "Car B Cargo truck C and Passenger vehicle D having trailer total weight not exceed 750 kilograms",   
      },
      {
        dlt_code: "E1",
          dlt_description_loas:
          "ລົດຂົນສົ່ງສິນຄ້າ (C2) ແກ່ຫາງລາກນ້ຳໜັກລວມເກີນກວ່າ 750 ກິໂລກຣາມ",
        dlt_description_english:
          "Cargo truck C2 having trailer total weight exceed 750 kilograms",   
      },
    ]

  }),
  getters: {
    FormSearch: (state) => {
      return state.form;
    },
    IsPopup: (state) => {
      return state.popupconfirm;
    },
    getformapp: (state) => {
      return state.form;
    },
    

  },
  actions: {

    async saverevs() {
      const savereve = {user_id:this.user_id,ap_id:this.ap_id}

      try {
        const data = await ApiService.post('/appointment/reserve/create', savereve).then(response => {
        
        });
        return true
      } catch (error) {
        return false;
      }

    },

    async fetchApppointRes() {

      try {
        const data = await ApiService.get('/appointment/reserve/get/'+this.user_id).then(response => {
        if(response.data){
          response.data.sort((a, b) => (a.id > b.id ? 1 : -1));
          this.reserve = response.data
     
          return true; 
        }else {
          return true;
        }
        });
        return data
      } catch (error) {
       
        return false;
      }

    },

    async fetchApppointResCalulat() {
this.reservefisrt = []
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      this.timestamp = date;
     this.reservepass = [];

for (var i = 0; i < this.reserve.length; i++) {
  let e = moment(this.reserve[i].appointment_detail.ap_date_start).format("YYYY-M-DD");

var myDatestart = Date.parse(e);
var myDateNow = Date.parse(date);



  if(myDatestart >= myDateNow){
    this.reservefisrt.push(this.reserve[i])

  }else {

    this.reservepass.push(this.reserve[i])
  }
}
    },

    async fetchApppoint() {

    
         try {
        const data = await ApiService.get('/appointment/event/?ap_learn_type='+ this.form.ap_learn_type+'&dlt_code='+this.form.dlt_code+'').then(response => {
          this.event = response.data
          if(response.data.length == 0){
            this.appgroup = []
            return true
          }
          return true
        });
        return data

      } catch (error) {
        return false;
      }
      
    },
    async fetchApppointEvent() {

      const appdata = {
        date_event: this.form.date_event,
        ap_learn_type: this.form.ap_learn_type,
        dlt_code: this.form.dlt_code
      }

            try {
        const data = await ApiService.post('/appointment/list', appdata).then(response => {
   
          if (response.data.length > 0) {
            this.appgroup = response.data;
           this.ap_id = response.data[0].ap_id
         
            let dltlist = this.dlt.find(x => x.dlt_code === this.form.dlt_code)
            let learn = this.ap_learnlist.find(x => x.value === parseInt(this.form.ap_learn_type))
            this.appointment.dlt_des = dltlist?.dlt_description;
            this.appointment.dlt_des_en = dltlist?.dlt_description_english;
            this.appointment.dlt_des_la = dltlist?.dlt_description_loas;
            this.appointment.ap_learn = learn.ap_learn;

            return true
          } else {
            this.appgroup = [];
            return false
          }
        });
        return data

      } catch (error) {
        return false;
      }

    },
    async deleteAppointUser() {
     this.formdel.user_id = this.user_id;
     try {
      const data = await ApiService.delete('/appointment/reserve/delete/'+this.ardel_id,this.formdel).then(response => {
    return true;
      });
      return data
    } catch (error) {
   
      return false;
    }

  //  let deldata = ApiService.delete('/appointment/reserve/delete/'+this.ardel_id,this.formdel)

    },
    async checkpopupdel(ap,ar) {
      this.ardel_id = ar
      this.formdel.ap_id = ap
      this.popupcancelapp = true;
    },

    async getdrivinglicense_type() {


      try {
        const data = await ApiService.get('/master_data/drivinglicense_type').then(response => {
      this.dlttype = response.data

          return true
        });
        return data

      } catch (error) {
        return false;
      }
  
    },


  }
})



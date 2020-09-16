<template>
  <div>
    <div v-if="invoices.length === 0">
      <h3>Aún no se registran Facturas</h3>
    </div>

    <div class="console">
      <div class= "console-inner">
        <table>
          <thead>
            <tr>
              <th scope="col">NUMERO</th>
              <th scope="col">FECHA</th>
              <th scope="col">MÉTODO DE PAGO</th>
              <th scope="col">ENTREGA PENDIENTE</th>
              <th scope="col">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="invoice in invoices" :key="invoice._id">
              <td rowspan="1">{{ invoice._id }}</td>
              <td rowspan="1">{{timeDate(invoice.timestamp)}}</td>
              <td rowspan="1">{{ invoice.paymentMethod }}</td>
              <td rowspan="1">{{ invoice.toDeliver }}</td>
              <td rowspan="1">${{ invoice.total }}</td>
              <td rowspan="1" style="width:60px">
                <tr style="width:100%; display:block; background:yellow; border-radius: 10px; color: black; font-size:14px">
                  <router-link
                      :to="{ name: 'EditInvoice', params: { id: invoice._id } }"
                      >
                        Editar
                    </router-link>
                </tr>
                <tr style="width:100%; display:block">
                  <button v-on:click="deleteInvoice(invoice._id)" style="background:#EB6C49;width:100%">
                    Borrar
                  </button>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
        <div style="margin-top:20px">
          <button @click="redirect('Home')" style="background:#0f55e4; margin-right:20%; padding:10px">
            Volver
          </button>
          <button @click="redirect('CreateInvoice')" style="background:#219E45; padding:10px">
            Nueva Factura
          </button> 
          <button @click="pettyCashBtn()" style="background:#782D4D; padding:10px; margin-left: 20%">
            Mostrar Caja
          </button> 
          <div v-if="this.showPettyCash == true">
             Caja Chica: ${{pettyCash}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      invoices: [],
      pettyCash: Number,
      showPettyCash: false
    };
  },
  async created() {
    await this.fetchInvoices();
    await this.transToDeliver();
    await this.calcPettyCash()

  },
  methods: {
    pettyCashBtn(){
      if(this.showPettyCash==false){
        this.showPettyCash = true 
      } else {
        this.showPettyCash = false
      }
    },
    timeDate(timestamp) {
      return timestamp.substring(5,10);
    },
    calcPettyCash() {
      let total = null;
      const todayInvoices = null
      for (const i in this.invoices) {
        const today = new Date()
        if ( this.timeDate(this.invoices[i].timestamp) == this.timeDate(today.toISOString())) {
         total += this.invoices[i].total
        }
      }
      this.pettyCash = total;
    },

      transToDeliver(){  
      for (const i in this.invoices) {
        if (this.invoices[i].toDeliver == true) {
          console.log(this.invoices[i].toDeliver)
          this.invoices[i].toDeliver == 'sí'
        } else {
          this.invoices[i].toDeliver == 'no'
          console.log(this.invoices[i].toDeliver)
        }
      }
    },
    redirect(componentName){
      this.$router.push({name:`${componentName}`})
    },
     fetchInvoices() {
      return  axios
        .get(`${server.baseURL}/invoice/invoices`)
        .then(data => (this.invoices = data.data) );
      
    },
    deleteInvoice(id) {
      axios
        .delete(`${server.baseURL}/invoice/delete?invoiceID=${id}`)
        .then(data => {
          console.log(data);
          window.location.reload();
        });
    }
  }
};
</script>

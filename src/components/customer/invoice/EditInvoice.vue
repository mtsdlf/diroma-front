<template>
  <div>
    <div class="form-box">
      <h2>EDITAR FACTURA N°{{invoice._id}}</h2>

      <form id="create-post-form" @submit.prevent>
        <div class="input-box">
          <label name="title">Método de Pago:  </label>
          <select ref="paymentMethod" style="width:40%;"
            required="true">
            <option>
              EFECTIVO
            </option>
            <option>
              MERCADOPAGO
            </option>
            <option>
              TARJETA
            </option>
          </select>
        </div>

        <div style="text-align:left">
          <label>Pendiente de Entrega</label>
          <input  ref="toDeliver" style="width:10%"
            value="SI"
            type="checkbox"
              >  
        </div>
        <div style="margin-top:20px">
          <button @click="redirect('Invoice')" style="background:#0f55e4; margin-right:20%; padding:10px">
            Volver
          </button>
          <button @click="createInvoice" style="background:#219E45; padding:10px">
            Guardar
          </button>
         
        </div>
      </form>
    </div>
  
  <div class="form-box another">
    <h2>PRODUCTOS</h2>
    <table>
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">cantidad</th>
          <th scope="col">Precio/Un.</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prod in invoice.order" :key="prod._id">
          <td>{{ prod.pname }}</td>
          <td>{{ prod.qty }}</td>
          <td>{{ prod.cost }}</td>
        </tr>
      </tbody>
    </table>
    <br>
      PRECIO TOTAL = {{invoice.total}}
  </div>
</div>
</template>

<script>
import { server } from "../../../helper";
import axios from "axios";
import router from "../../../router";
export default {
  data() {
    return {
      id: 0,
      invoice: {},
      product: {}
    };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.getInvoice();
    this.loadOnForm();
  },
  methods: {

 redirect(componentName) {
      this.$router.push({name:`${componentName}`});
    },
    loadOnForm() {
     switch (this.invoice.paymentMethod) {
        case "EFECTIVO":
          this.$refs.paymentMethod[0].selected = true;
          break;
        case "MERCADOPAGO":
          this.$refs.paymentMethod[1].selected = true;
          break;
        case "TARJETA":
          this.$refs.paymentMethod[2].selected = true;
          break;
     }
      if (this.invoice.toDeliver === "SI") {
        this.$refs.toDeliver.checked = true;
      }


      
    },

    async fetchProducts() {
      return axios
        .get(`${server.baseURL}/product/products`)
        .then(data => (this.products = data.data));
    },

    editInvoice() {
      const invoiceData = {
        number: this.invoice.number,
        paymentMethod: this.invoice.paymentMethod,
        toDeliver: this.invoice.toDeliver
      };
      axios
        .put(
          `${server.baseURL}/invoice/update?invoiceID=${this.id}`,
          invoiceData
        )
        .then(data => {
          router.push({ name: "Home" });
        });
    },

    getInvoice() {
      return axios
        .get(`${server.baseURL}/invoice/invoice/${this.id}`)
        .then(data => (this.invoice = data.data));
    },

    navigate() {
      router.go(-1);
    }
  }
};
</script>

<style>
.form-box.another {
  position: absolute;
  color: #ffff;
  top: 50%;
  left: 65%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}
</style>
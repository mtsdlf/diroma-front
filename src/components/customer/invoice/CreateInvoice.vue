<template>
  <div>

    <div class="form-box" >
      <h2>NUEVA FACTURA</h2>
      <form id="create-post-form" 
        @submit.prevent>

        <div class="input-box">
          <label name="title">Método de Pago:  </label>
          <select style="width:40%;"
            v-model="paymentMethod"
            required="true"
            >
            <option 
              :selected="true">
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
        <div class="input-box">
          <label name="title">Producto: </label>
          
          <select ref="selectedProd" style="width:40%"
           @change="onChange()" 
            required="true">
            <option selected="true">
              Seleccione
            </option>
            <option
              v-for="product in products"
              v-bind:key="product._id"
              :value="product._id"

              > 
              {{ product.pname }}
            </option>
          </select>
          <br>
          <input id="qty" ref="prodQty" style="width:80px; text-align:center"
            :required="true"
            type="number"  step="1" min="0" placeholder="Cantidad"
          />

            <button style="border-radius:40px; color:black; align:center;margin-left:10%"
            @click="addToCart">
            Añadir
          </button>
        </div>

        <div style="margin-top:20px">
          <button style="background:#0f55e4; margin-right:20%; padding:10px"
            @click="redirect('Invoice')">
            Volver
          </button>
          <button style="background:#219E45; padding:10px"
            @click="createInvoice" >
            Aprobar
          </button>
        </div>
      </form>
    </div>

    <div class="form-box another"
      v-if="this.cart.length != 0">
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
          <tr v-for="prod in cart" :key="prod._id">
            <td>{{ prod.pname }}</td>
            <td>{{ prod.qty }}</td>
            <td>{{ prod.cost }}</td>
            <td>
            <button v-on:click="deleteProduct(prod._id)" style="background:#EB6C49;width:100%">
                    Quitar 
                  </button>
                  </td>
          </tr>
          
        </tbody>
      </table>
      TOTAL = ${{total}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { server } from "../../../helper";
import router from "../../../router";

export default {
  data() {
    return {
      productItem: {
        _id: "",
        pName:"",
        qty: Number
      },
      products: [],
      cart: [],
      paymentMethod: "EFECTIVO",
      toDeliver: "",
      total: Number
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    onChange() {
      const category = this.getProperty(this.$refs.selectedProd.value, "category");
      if (category == "Fiambrería") {
        this.$refs.prodQty.step = 0.001;
      } else {
        this.$refs.stock.step = 1;
      }
    },
    redirect(componentName) {
      this.$router.push({name:`${componentName}`});
    }, 
    deleteProduct(id) {
      for (const item in this.cart) {
        if (this.cart[item]._id === id) {
          this.cart.splice(item, 1);
        }
      }
     
    },
    addToCart() {
      const qtyToAdd = this.$refs.prodQty.value;
      if (qtyToAdd <= 0 || this.$refs.selectedProd.selectedIndex == 0) {
        alert('No ingresó ningún producto');
      } else {
        const id = this.$refs.selectedProd.value;

        const qtyInStock =  this.getProperty(id,'stock');
        let qtyInCart = null; 
        if (this.cart.find((element)=>element._id == id) 
          === undefined) {
          qtyInCart = 0;
          console.log("cantidad undefined: " + qtyInCart)
        } else {
          qtyInCart = this.cart.find((element)=>
            element._id == id).qty;
          console.log("cantidad incart: " + qtyInCart)
        }
         const total =  parseFloat(qtyInCart) + parseFloat(qtyToAdd);
        if (qtyInStock < total) {
          console.log("ERROR >>> qtyinstock: " + qtyInStock + "  || qtyToAdd: " + qtyToAdd  + "  || qtyinCart " + qtyInCart + "  || total: " + total     )
          alert ("No hay suficientes stock de este producto para realizar la compra");
        } else {
          console.log("PASSED >>> qtyinstock: " + qtyInStock + "  || qtyToAdd: " + qtyToAdd  + "  || qtyinCart " + qtyInCart + "  || total: " + total   )

          this.productItem = {
            _id: id,
            pname: this.getProperty(id,'pname'),
            cost: this.getProperty(id,'cost'),
            qty: parseFloat(this.$refs.prodQty.value)
          };
          for (const item in this.cart) {
            if (this.cart[item]._id === this.productItem._id) {
              this.productItem.qty =
                parseFloat(this.cart[item].qty) + parseFloat(this.productItem.qty);
              this.cart.splice(item, 1);
            }
          }
          this.cart.push(this.productItem);
          this.total = this.getTotal();
        }
      }
    },

    fetchProducts() {
      axios
        .get(`${server.baseURL}/product/products`)
        .then(data => (this.products = data.data));
    },
    getProperty(id,prop) {
      const pObj = this.products.find((element)=>element._id == id);
      return pObj[prop];
    },
    createInvoice() {
      if (this.cart.length <= 0){
        alert ("No hay Productos Seleccionados")
      } else {
        const r = confirm("Aprobar factura") 
        if (r == true ) {
          if (this.$refs.toDeliver.checked === true) {
            this.toDeliver = "SI"
          } else {
            this.toDeliver = "NO"
          }
          const invoiceData = {
            paymentMethod: this.paymentMethod,
            toDeliver: this.toDeliver,
            order: this.cart,
            total: this.total
          };
          this.__submitToServer(invoiceData);
        }
      }
    },
    getTotal(){
      let total = 0;
      for(const item in this.cart) {
        const prod = this.cart[item].cost * this.cart[item].qty
        total += prod 
      }
      return total;
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/invoice/create`, data)
        .then(data => {
        this.redirect('Invoice')
      });
    }
  }
};
</script>

<style>
h2, form-box {
  font-family: monospace, cursive;
}
.form-box {
  position: absolute;
  color: rgb(200, 195, 195);
  line-height: 200%;
  top: 50%;
  left: 35%;
  width: 335px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0,0,0,.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}
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

.form-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
}

.center {
   display: flex;
   justify-content: center;
   align-items: center;
}
.form-box .input-box {
  position: relative;
  text-align: left;

}

.form-box .input-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 0px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
}
select {
  color:white;
   background: transparent;
   border: none;
   font-size: 14px;
   height: 30px;
   padding: 5px;
   width: 250px;
}
select:focus{ outline: none;color:rgb(97, 97, 49)}
</style>

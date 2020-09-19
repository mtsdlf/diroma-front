<template>
  <div>

    <div class="form-box">
      <h2>NUEVO PRODUCTO</h2>
      <form id="create-post-form" 
        @submit.prevent="createProduct">

        <div class="input-box">
          <input id="pname"
            v-model="pname"
            required="true"
            type="text" placeholder="Nombre del artículo(*)"
          />
        </div>

        <div class="input-box">
          <select ref="category"
            required="true"
            @change="onChange()" 
            >
             <option selected="true"> 
              Seleccione
            </option>
            <option value="Almacén">
              Almacén
            </option>
            <option  value="Fiambrería">
              Fiambrería
            </option>
          </select>
        </div>
        
        <div class="input-box">
          <input ref="stock"
            v-model="stock"
            required="true"
            type="number" step="1" min="0" placeholder="Cantidad(*)"
          />
        </div>

        <div class="input-box">
          <input id="cost" ref="cost"
            v-model="cost"
            required="true"
            type="number"  step="0.01" min="0" placeholder="Costo(*)"
          />
        </div>
   
        <div class="input-box">
          <input id="price" ref="price"
            v-model="price"
            required="true"
            type="number"  step="0.01" min="0" placeholder="Precio(*)"
          />
        </div>

        <div class="input-box">
          <input id="code"
            v-model="code"
            required="true"
            type="text" placeholder="Código de Referencia(*)"
          />
        </div>
        
        <div class="input-box">
          <input id="description"
            v-model="description"
            type="text" placeholder="Descripción"
          />
        </div>
        
        <div style="margin-top:20px">
          <button style="background:#0f55e4; margin-right:20%; padding:10px"
            @click="redirect('Product')">
            Volver
          </button>
          <button style="background:#219E45; padding:10px"
             >
            Aprobar
          </button>
        </div>
      </form>
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
      pname: "",
      stock: Number,
      cost: Number,
      price: Number,
      code: "",
      category: "",
      description: "",
      oldValue: ""
    };
  },
  methods: {
    onChange() {
      if (this.$refs.category.value == "Fiambrería") {
        this.$refs.stock.step = 0.001;
      } else {
         this.$refs.stock.step = 1;
      }
    },
    redirect(componentName) {
      this.$router.push({name:`${componentName}`});
    }, 

    createProduct() {
       if (this.$refs.category.selectedIndex == 0) {
        alert('No ingresó categoría');
      } else {
      const productData = {
        pname: this.pname,
        stock: this.stock,
        cost: this.cost,
        precio: this.price,
        code: this.code,
        category: this.$refs.category.value,
        description: this.description,
        oldValue: this.cost
      };
      this.__submitToServer(productData);
      }
    },

    __submitToServer(data) {
      axios.post(`${server.baseURL}/product/create`, data).then(data => {
        this.redirect('Product')
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
  top: 50%;
  left: 50%;
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
  text-align: center;
}

.form-box .input-box {
  position: relative;
}

.form-box .input-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
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

</style>
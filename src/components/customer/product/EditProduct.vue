<template>
  <div>

    <div class="form-box">
      <h2>EDITAR PRODUCTO</h2>

      <form id="create-post-form" @submit.prevent="editProduct">
        <div class="input-box">
          <input  id="pname"
            v-model="product.pname"
            required="true"
            type="text"  placeholder="Nombre del artículo(*)"  
          />
        </div>

        <div class="input-box">
          <input id="cost"
            v-model="product.cost"
            required="true"
            type="number" step="0.1" min="0" placeholder="Precio(*)"
          />
        </div>

        <div class="input-box">
          <input id="stock"
            v-model="product.stock"
            required="true"
            type="number" step="0.001" min="0" placeholder="Cantidad(*)" 
          />
        </div>

        <div class="input-box">
          <input
            type="text"
            id="code"
            v-model="product.code"
            placeholder="Código de Referencia"
          />
        </div>

        <div class="input-box">
          <input
            type="text"
            id="category"
            v-model="product.category"
            placeholder="Categoria"
          />
        </div>

        <div class="input-box">
          <input id="description"
            v-model="product.description"
            type="text" placeholder="Descripción"
          />
        </div>

        <div style="margin-top:20px">
          <button @click="redirect('Product')" style="background:#0f55e4; margin-right:20%; padding:10px">
            Volver
          </button>
          <button @click="redirect('Product')" style="background:#219E45; padding:10px">
            Aprobar
          </button>
        </div>
      </form>
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
      product: {},
      saveOldValue: Number
    };
  },
  async created() {
    this.id = this.$route.params.id;
    await this.getProduct();
    this.loadOldValue();
  },
  methods: {
    loadOldValue() {
      this.saveOldValue = this.product.cost;
    },
    editProduct() {
      const productData = {
        pname: this.product.pname,
        cost: this.product.cost,
        stock: this.product.stock,
        code: this.product.code,
        category: this.product.category,
        description: this.product.description,
        oldValue: this.saveOldValue
      };

      axios
        .put(
          `${server.baseURL}/product/update?productID=${this.id}`,
          productData
        )
        .then(data => {
          router.push({ name: "Product" });
        });
    },
    getProduct() {
      return axios
        .get(`${server.baseURL}/product/product/${this.id}`)
        .then(data => (this.product = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>


<style>
h2, form-box {
  font-family: monospace, cursive;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
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

</style>
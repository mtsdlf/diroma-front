<template>
  <div>
      <div v-if="products.length === 0">
        <h3>Aún no se registran productos</h3>
      </div>

    <div class="console">
      <div class= "console-inner">
        <table>
          <thead>
            <tr>
              <th scope="col">PRODUCTO</th>
              <th scope="col">PRECIO</th>
              <th scope="col">STOCK</th>
              <th scope="col">CÓDIGO</th>
              <th scope="col">CATEGORÍA</th>
              <th scope="col">DESCRIPCIÓN</th>
              <th scope="col">DIFF./MES</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product._id">
              <td rowspan="1">{{ product.pname }}</td>
              <td rowspan="1">${{ product.cost }}</td>
              <td rowspan="1">{{ product.stock }}</td>
              <td rowspan="1">{{ product.code }}</td>
              <td rowspan="1">{{ product.category }}</td>
              <td rowspan="1">{{ product.description }}</td>
              <td rowspan="1">${{ product.oldValue }} / {{timeDate(product.timestamp)}}</td>
              <td rowspan="1"  style="width:60px">
                <tr style="width:100%; display:block; background:yellow; border-radius: 10px; color: black; font-size:  14px">
                  <router-link
                    :to="{ name: 'EditProduct', params: { id: product._id } }"
                    >
                      Editar
                    </router-link>
                </tr>
                <tr style="width:100%; display:block">
                  <button v-on:click="deleteProduct(product._id)" style="background:#EB6C49;width:100%">
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
          <button @click="redirect('CreateProduct')" style="background:#219E45; padding:10px">
            Nuevo Producto
          </button>
        </div>
      </div>
    </div> 
</div>
    <!-- </div> -->
</template>

<script>
import { server } from "../helper";
import axios from "axios";

export default {
  data() {
    return {
      products: []
    };
  },

  async created() {
   await this.fetchProducts();
  },

  methods: {
    timeDate(timestamp) {
      return timestamp.substring(5,10);
    },

    redirect(componentName) {
        this.$router.push({name: componentName})
    },

    async fetchProducts() {
      return axios
        .get(`${server.baseURL}/product/products`)
        .then(data => (this.products = data.data));
  },
  
    deleteProduct(id) {
      const r = confirm("Esta seguro que desea eliminar el producto del inventario?") 
      if (r == true ) {
        axios
          .delete(`${server.baseURL}/product/delete?productID=${id}`)
          .then(data => {
            console.log(data);
            window.location.reload();
          });
      }
    } 
  }
};
</script>

<style>
html,
body {
  min-height: 100%;
}

body {
  background-color: #ececec;
  background:linear-gradient(135deg, #0f55e4, #0a3a9c);
  color: #fff;

  -webkit-font-smoothing: antialiased;
}
div.container {
  width:50%; 
  margin:0%;
}
table {
  text-align:center; 
  margin-left:auto; 
  margin-right:auto; 
  width:100%;    
}
td, tr {
  border: 0.5px outset #0a3a9c;
}
tr:nth-child(even) {
  background-color: #0a3a9c ;
  border: 1px inset #0a3a9c !important;
}

button {
  color: white;
  border: 0.5px outset rgb(12, 5, 39);
  border-radius: 4px;
  text-shadow: -0.5px 0.5px 0 rgb(132, 122, 165),  0.5px 0.5px 0  rgb(132, 122, 165),  0.5px -0.5px 0   rgb(132, 122, 165); 
}

h1 {
  color: #fff; 
  font-family: monospace, cursive;
  font-size: 65px; font-weight: normal; line-height: 60px;
  margin: 10px 0 20px; text-transform: uppercase;
  text-shadow: 2px 2px 0 #000;
  margin: 10px 0 24px;
  text-align: center; 

}
h3 {
  color: #fff; 
  font-family: monospace, cursive;
}

.console {
  position: fixed;
  font-family: monospace,monospace;
  color: #fff;
  width: calc(100% - 3em);
  max-width: 100%;
  max-height: calc(100% - 3em);
  overflow-y: auto;
  margin: 1em 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
  box-shadow: 0 0.75em 3em rgba(50, 50, 50, 0.5);
  z-index: 100;
  line-height: 1.5;
}

.output-text:before {
  content: '> ';
  color: #5F8787;
  font-weight: 600 !important;
  vertical-align: top;
}

.console-inner {
  padding: 0.3em 1.1em;
}

.particles-js-canvas-el {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
</style>

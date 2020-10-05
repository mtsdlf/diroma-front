<template>
  <div id="app">
      <h1>DI ROMA</h1>
    <div v-if="href != 'https://diroma.com.ar/'" id="nav">
      <router-link to="/product"> Stock | </router-link>
      <router-link to="/invoice"> Facturación | </router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return {
      href : window.location.href
    }
  
  
}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
    background-color: rgb(33, 19, 165) ;
    border: 0.5px inset #0c3319;

}

#nav a.router-link-exact-active {
  border: 0.5px outset #00ff55;
  color: #00ff55;
  background-color: rgb(42, 24, 204) ;
  

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
button {
  color: black;
  border-radius:4px;
  text-shadow: -0.5px 0.5px 0 #000,  0.5px 0.5px 0 #000,  0.5px -0.5px 0 #000; 
}
</style>

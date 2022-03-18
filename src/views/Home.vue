<template>
  <div class="home">
    <div class="hero">
      <div class="flex">
        <div id="logo-wrapper">
          <img id="logo" src="@/assets/logo-light.png" alt="">
        </div>
        <div id="text-wrapper">
          <p>list of</p>
          <h1>Myren</h1>
          <p>products</p>
        </div>
      </div>
    </div>

    <div class="content flex">
      <Product v-for="product in products" :data="product" :key="product.name"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Product from "@/components/Product.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Product
  },
  // metaInfo: {
  //   title: "Myren - All Products",
  //   meta: [
  //     {name: "description", content: "list of all products developed by Myren"},
  //     {name: "keywords", content: "Myren, companies like google, Mahdi Akbari, blackestwhite"},
  //     {name: "og:title", content: "Myren - All Products"},
  //     {name: "og:description", content: "list of all products developed by Myren"},
  //     {name: "og:image", content: "https://myren.com/assets/logo-light.png"},
  //     {name: "author", content: "Mahdi Akbari"},
  //   ]
  // }
  computed: mapState({
    products: state => state.products
  }),
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  margin: 18px 17%;
  padding: 18px;
  border-radius: 8px;
  height: 240px;
  background: linear-gradient(135deg, #303a58, #5d6a6e)
}
.flex {
  display: flex;
}
#logo-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
}
#logo {
  width: 120px;
  height: 80px;
}
#text-wrapper {
  margin-left: 18px;
}
h1 {
  font-family: 'Poppins', sans-serif;
  color: #fff;
}
p {
  font-family: 'Poppins', sans-serif;
  color: rgb(207, 207, 207)
}
.content {
  margin: 18px 17%;
}
</style>
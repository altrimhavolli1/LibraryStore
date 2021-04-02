<template>
  <div>
    <appHeader />
    <br />
    <div class="container">
      <b-navbar toggleable="lg">
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
          </b-navbar-nav>
          >
          <b-navbar-nav>
            <b-nav-item to="/shop" active>Shop</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <hr />
    <br /><br />
    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-sm-6"
          v-for="product in products"
          :key="product.id"
        >
          <div class="product-grid">
            <div class="product-image">
              <a href="">
                <img
                  class="pic-1"
                  :src="`http://localhost:3000/${product.bookImage}`" :alt="product.title">
              </a>
              <ul class="social">
                <li>
                  <a href="" data-tip="Add to Cart"
                    ><i class="fa fa-shopping-cart"></i
                  ></a>
                </li>
              </ul>
            </div>
            <div class="product-content">
              <h3 class="title">
                <router-link
                  class="title"
                  :to="{ name: 'product', params: { id: product.id } }"
                  >{{ product.title }}</router-link
                >
              </h3>
              <p class="author">{{ product.author }}</p>
              <div class="price">${{ product.price }}</div>
              <a class="add-to-cart" href="">+ Add To Cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  components: {
    appHeader: Header,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
.product-grid {
  font-family: Poppins, sans-serif;
  text-align: center;
  padding: 0 0 72px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  margin-bottom: 3rem;
}
.product-grid .product-image {
  position: relative;
  transition: all 0.3s ease 0s;
}
.product-grid .product-image a {
  display: block;
}
.product-grid .product-image img {
  width: 16rem;
  height: 19rem;
  margin: 1;
}
.product-grid .pic-1 {
  opacity: 1;
  transition: all 0.3s ease-out 0s;
}
.product-grid:hover .pic-1 {
  opacity: 1;
}
.product-grid .social {
  width: 150px;
  padding: 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  transform: translateY(-50%) translateX(-50%);
  position: absolute;
  top: 60%;
  left: 50%;
  z-index: 1;
  transition: all 0.3s ease 0s;
}
.product-grid:hover .social {
  opacity: 1;
  top: 50%;
}
.product-grid .social li {
  display: inline-block;
}
.product-grid .social li a {
  color: #fff;
  background-color: #333;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  height: 40px;
  width: 40px;
  margin: 0 2px;
  display: block;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.product-grid .social li a:hover {
  color: #fff;
  background-color: #ef5777;
}
.product-grid .social li a:after,
.product-grid .social li a:before {
  content: attr(data-tip);
  color: #fff;
  background-color: #000;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 20px;
  padding: 1px 5px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-50%);
  position: absolute;
  left: 50%;
  top: -30px;
}
.product-grid .social li a:after {
  content: "";
  height: 15px;
  width: 15px;
  border-radius: 0;
  transform: translateX(-50%) rotate(45deg);
  top: -20px;
  z-index: -1;
}
.product-grid .social li a:hover:after,
.product-grid .social li a:hover:before {
  opacity: 1;
}
.product-grid .product-content {
  background-color: #fff;
  text-align: center;
  padding: 12px 0;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -27px;
  z-index: 1;
  transition: all 0.3s;
}
.product-grid:hover .product-content {
  bottom: 0;
}
.product-grid .title {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  margin: 0 0 10px;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: #333;
}
.product-grid .author {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: capitalize;
  margin: 0 0 10px;
  transition: all 0.3s ease 0s;
}
.product-grid .price {
  color: #333;
  font-size: 17px;
  font-family: Poppins, sans-serif;
  font-weight: 700;
  letter-spacing: 0.6px;
  margin-bottom: 8px;
  text-align: center;
  transition: all 0.3s;
}
.product-grid .add-to-cart {
  color: #000;
  font-size: 13px;
  font-weight: 600;
}

@media only screen and (max-width: 990px) {
  .product-grid {
    margin-bottom: 30px;
  }
}
</style>
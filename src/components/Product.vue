<template>
  <div class="product">
    <div class="grid">
      <div id="logo-wrapper">
        <img :src="data.logo" id="logo">
      </div>
      <div id="text-wrapper">
        <h3>{{ data.name }}</h3>
        <p>{{ data.description }}</p>
      </div>
      <div id="cta" @click="navigate">Visit<span></span></div>
    </div>
  </div>
</template>

<style scoped>
.product {
  display: flex;
  /* width: 33.3%; */
  width: 100%;
  background-color: #eee;
  height: 110px;
  border-radius: 8px;
  margin-bottom: 18px;
  overflow: hidden;
}

#text-wrapper {
  font-family: 'Poppins', sans-serif;
  padding: 8px;
}
#text-wrapper p {
  font-family: 'Mulish', sans-serif;
  font-size: 12px;
  color: rgb(42, 42, 42)
}
.grid {
  width: 100%;
  display: grid;
  grid-template-columns: 100px auto 80px;
}
#logo-wrapper {
  justify-self: center;
  align-self: center;
}
#cta {
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: rgb(0, 47, 255);
}
span.ripple {
  position: absolute; /* The absolute position we mentioned earlier */
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 600ms linear;
  background-color: rgba(0, 0, 0, 0.3);
}
#logo {
  width: calc(143.33px / 2.8);
  height: calc(127.7px / 2.8);
}

@media screen and (min-width: 1188px) {
  .product {
    width: 33.3%;
  }
  .product:nth-of-type(2n) {
    margin: 0 18px;
  }
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>

<script>
export default {
  name: 'Product',
  props: ['data'],
  data() {
    return {
      url: ''
    }
  },
  methods: {
    navigate(e) {
      const button = e.currentTarget;
      const circle = this.$el.querySelector('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
      circle.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
      circle.classList.add("ripple");

      setTimeout(() => {
        circle.style = '';
        circle.classList.remove("ripple");
        // open data.link in new tab
        if (this.data.up) window.open(this.data.link, '_blank');
      }, 601);
    }
  },
};
</script>
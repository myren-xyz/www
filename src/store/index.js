import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      {name: 'Audiofy', link: 'https://audiofy.myren.xyz', up: true, logo: 'static/audiofy-logo-dark.png', description: 'a music service that respects users\' privacy and time'},
      {name: 'Vidible', link: 'https://vidible.myren.xyz', up: false, logo: 'static/vidible-logo-dark.png', description: 'a video service that respects its creatros & users\' privacy and time'},
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});

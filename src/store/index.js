import Vue from 'vue'
import Vuex from 'vuex'

import People from './People';
import Man from './Man';


// apiUrl = 'https://swapi.co/api/';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    people: People,
    man: Man
  }
})

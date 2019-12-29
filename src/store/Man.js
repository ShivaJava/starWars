import axios from 'axios';

export default {
    state: {
        statusM: 'listen',
        man: [],
      },
      mutations: {    
        get_man_request(state) {
          state.statusM = 'request';
        },
        get_man_success(state, man) {
          state.statusM = 'success';
          state.man = man;
        },
        get_man_error(state) {
            state.statusM = 'error'
        },
      },
      actions: {
        getMan({ commit }, id) {
          return new Promise((resolve, reject) => {          
              commit('get_man_request');
              axios({ 
                      url: `https://swapi.co/api/people/${id}`, 
                      method: 'GET' 
                  })
                  .then(resp => {          
                      commit('get_man_success', resp.data);                                  
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('get_man_error', err)
                      reject(err)
                  })
              resolve()
          })
        },
      },
      modules: {
    
      },
      getters : {
        getMan: state => state.man,
        getStatusM: state => state.statusM,
      },
}
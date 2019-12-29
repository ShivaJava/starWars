import axios from 'axios';

export default {
    state: {
        statusP: 'listen',
        people: [],
      },
      mutations: {
        get_people_request(state) {
          state.statusP = 'request';
        },
        get_people_success(state, people) {
          state.statusP = 'success';
          state.people = people;
        },
        get_people_error(state) {
            state.statusP = 'error'
        },
      },
      actions: {
        getPeople({ commit },) {
          return new Promise((resolve, reject) => {          
              commit('get_people_request');
              axios({ 
                      url: `https://swapi.co/api/people/`, 
                      method: 'GET' 
                  })
                  .then(resp => {          
                      commit('get_people_success', resp.data.results);                                      
                      resolve(resp)
                  })
                  .catch(err => {
                      commit('get_people_error', err)
                      reject(err)
                  })
              resolve()
          })
        },
      },
      modules: {
    
      },
      getters : {
        getPeople: state => state.people,
        getStatusP: state => state.statusP,
      },
}
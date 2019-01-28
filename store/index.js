import Vuex from 'vuex';
import axiosget from '@/plugins/axios-get';
import axiospost from '@/plugins/axios-post';

const createStore = () => {
  return new Vuex.Store({
    state: {
      name: '',
      email: '',
      estados: [],
    },
    mutations: {
      ADD_ESTADO (state, id) {
        //console.log('add ' + state.name);
        //console.log('add ' + state.email);
        //console.log('add ' + id);

        const params = {
          name: state.name,
          email: state.email,
          estado: id
        };

        axiospost.post('', params).then(function(response) {
          console.log(response); 
          if (response.status==200) {
            if (response.data=="ok") {
              $nuxt.$router.push('/gracias');
           }
            else if (response.data=="votado") {
              $nuxt.$router.push('/ya-votado');
            }
          }

        });
      },
      ADD_USER (state, users) {
        state.name=users.name;
        state.email=users.email;
      },
      SET_DATA(state, theData) {
        state.estados = theData;
      }
    },
    actions: {
      addEstado({commit}, id) {
        new Promise((resolve) => setTimeout(resolve, 500)).then( () => {
          //console.log('add1')
          commit('ADD_ESTADO', id) 
        })
      },
      addUser({commit}, users) {
        new Promise((resolve) => setTimeout(resolve, 2000)).then( () => {
          //console.log('add1')
          commit('ADD_USER', users) 
        })
      },
      async nuxtServerInit({ commit, dispatch }) {
        const { data } = await axiosget.get();
        commit('SET_DATA', data);
      }
    }
  })
}
export default createStore
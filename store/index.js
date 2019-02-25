import Vuex from 'vuex';
import axiosget from '@/plugins/axios-get';
import axiospost from '@/plugins/axios-post';

const createStore = () => {
  return new Vuex.Store({
    state: {
      name: '',
      email: '',
      estados: [],
      control: ''
    },
    mutations: {
      ADD_ESTADO (state, id) {
        const params = {
          name: state.name,
          email: state.email,
          estado: id
        };

        axiospost.post('', params).then(function(response) {
          console.log(response); 
          if (response.status==200) {
            if (response.data=="ok") {
              $nuxt.$router.push($nuxt.localePath({ name: 'gracias' }));
            }
            else if (response.data=="votado") {
              $nuxt.$router.push($nuxt.localePath({ name: 'votado' }));
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
      async getEstados ({commit},lang) {
        const { data } = await axiosget.get('', { params: { lang: lang }});
        commit('SET_DATA', data);
      },
      addEstado({commit}, id) {
        new Promise((resolve) => setTimeout(resolve, 500)).then( () => {
          commit('ADD_ESTADO', id) 
        })
      },
      addUser({commit}, users) {
        new Promise((resolve) => setTimeout(resolve, 2000)).then( () => {
          commit('ADD_USER', users) 
        })
      }/*,
      async nuxtServerInit({ commit, dispatch }) {
        const { data } = await axiosget.get('', { params: { lang: 'ca' }});
        commit('SET_DATA', data);
      }*/
    }
  })
}
export default createStore
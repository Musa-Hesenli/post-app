import Vuex from 'vuex'
import Vue from "vue";
import axios from 'axios';
import router from './router';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        count : 0,
        posts : [],
        singlePost : []
    },
    getters : {
        getPosts(state) {
            return state.posts
        },
        getSinglePost(state) {
            return state.singlePost
        }
    },
    mutations : {
        updateState(state, payload) {
            state.posts = payload
        },
        updateSinglePost(state, payload) {
            state.singlePost = payload
        },
        
    },
    actions : {
        async getPosts({commit}) {
            await axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
                commit('updateState', response.data);
                console.log("updated");
            });
        },
        async getSinglePost({commit}, id) {
            await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
                commit('updateSinglePost', response.data);
            });
        },
        deletePost(id) {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => {
                console.log(response);
                alert("Post deleted");
                router.push({name : "home"})
            });
        },
        
    }
});

export default store;

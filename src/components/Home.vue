<template>
    <div>
        
        <v-container>
        
        <v-row>
            <v-col cols="12" md="4" v-for="(item) in posts" :key="item.id">
                <v-card>
                    <div class="card" >
                        <h1>{{ item.title }}</h1>
                        <p>{{ item.body }}</p>
                        
                            <router-link tag="button" :to="'/' + item.id">
                               Read more
                            </router-link>
                        
                    </div>
                </v-card>
            </v-col>           
        </v-row>
    </v-container>
    </div>
</template>

<script>
export default {
    computed : {
        posts() {
            return this.$store.getters.getPosts
        }
    },
    created()  {
        this.$store.dispatch("getPosts");
    }
}
</script>

<style lang="scss" scoped>
.card {
    padding: 15px;
    min-height: 00px;
    h1 {
        color: rgb(49, 48, 48);
    }
    button {
        margin-top: 20px;
        background: #007bff;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        a { 
            color: #fff;
            text-decoration: none;
        }
    }
}


</style>
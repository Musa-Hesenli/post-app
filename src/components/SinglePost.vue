<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <div class="post-container">
                            <h1>Title: {{ postInfo.title }}</h1>
                    
                    <p>
                        {{ postInfo.body }}
                    </p>
                        <button @click="deletePost(postInfo.id)">Delete Post</button>
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
        postInfo() {
            return this.$store.getters.getSinglePost
        }
    },
    methods: {
        deletePost(id) {
            this.$store.dispatch("deletePost", id);
        }
    }
    ,
    created() {
        this.$store.dispatch("getSinglePost",this.$route.params.id );
    }
}
</script>

<style lang="scss" scoped>
.post-container {
    padding : 20px;
    p {
        margin-top: 20px;
    }
    
}
button {
    margin-top: 20px;
    background: #ff2600;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
}
.edit-btn {
    margin-left: 20px;
    background: #09c946;
}
</style>
<template>
    <div class="blog-list">
        <div v-for="(item, index) in blogList" :key="index">
            <router-link to="blog">{{item.title}}</router-link>
<!--            <a href="http://www.baidu.com">{{item.title}}</a>-->
        </div>
    </div>
</template>

<script>

    export default {
        name: "BlogList",
        data: function () {
            return {
                blogList: []
            }
        },
        mounted() {
            this.getList()
        },
        methods: {
            getList(){
                this.$http.get("http://localhost:8080/api/blog/rows").then((data) => {
                    if (data.data.error == 0) {
                        this.blogList = data.data.data
                    }
                })
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
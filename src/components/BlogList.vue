<template>
    <div class="blog-list">
        <div v-for="item in blogList" :key="item.title">
            <h2>{{ item.title }}</h2>
            <p>{{ item.date_fmt }} {{ item.Sort.sortname }} {{ item.User.nickname }}</p>
            <div v-html="item.content"></div>
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
                let pathName = this.$route.params.pathMatch
                console.log(pathName)
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
</style>
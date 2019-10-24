<template>
    <div class="blog">
        <h1>{{ blog.title }}</h1>
        <div v-html="blog.content"></div>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data: function () {
            return {
                api: "http://localhost:8080/api/blog/row",
                gid: null,
                blog: {},
            }
        },
        mounted: function () {
            this.getBlog()
        },
        methods: {
            getBlog() {
                this.gid = this.$route.params.pathMatch
                this.$http.get(this.api + '/' + this.gid).then((data) => {
                    if (data.data.error == 0) {
                        this.blog = data.data.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
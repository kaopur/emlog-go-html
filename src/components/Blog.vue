<template>
    <div class="blog">
        <h1>{{ blog.title }}</h1>
        <div v-html="blog.content"></div>
        <div>
            <p>评论:</p>
            <ul>
                <li v-for="comment in comments" :key="comment.cid">
                    {{ comment.comment }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data: function () {
            return {
                api: "http://localhost:8080/api/blog/row",
                apiComments: "http://localhost:8080/api/comment/rows",
                gid: null,
                blog: {},
                comments: []
            }
        },
        mounted: function () {
            this.getBlog()
            this.getComments()
        },
        methods: {
            getBlog() {
                this.gid = this.$route.params.pathMatch
                this.$http.get(this.api + '/' + this.gid).then((data) => {
                    if (data.data.error == 0) {
                        this.blog = data.data.data
                    }
                })
            },
            getComments() {
                this.gid = this.$route.params.pathMatch
                this.$http.get(this.apiComments + '/' + "2").then((data) => {
                    if (data.data.error == 0) {
                        this.comments = data.data.data
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
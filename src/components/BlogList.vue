<template>
    <div class="blog-list">
        <div v-for="item in blogList" :key="item.title">
            <h2>{{ item.title }}</h2>
            <p>{{ item.date_fmt }} {{ item.Sort.sortname }} {{ item.User.nickname }}</p>
            <div v-html="item.excerpt || item.content"></div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "BlogList",
        data: function () {
            return {
                api: "http://localhost:8080/api/blog/rows",
                blogList: [],
                queryObj: {},
            }
        },
        mounted() {
            this.getList()
        },
        watch: {
            $route() {
                if (this.$route) {
                    let path = this.$route.path
                    let reg = /^\/(sortid)\/((?:.*))(?:\/(?=$))?$/i
                    let regArr = reg.exec(path)
                    if (regArr == null) {//首页
                        this.queryObj = {}
                    } else if (regArr[1] == "sortid") {//分类
                        this.queryObj = {
                            sortid: regArr[2]
                        }
                    } else {
                        // eslint-disable-next-line no-console
                        console.log('不知道点的什么')
                    }
                this.getList()
                }
            },
        },
        methods: {
            getList(){
                this.$http.get(this.api, {"params": this.queryObj}).then((data) => {
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
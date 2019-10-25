<template>
    <div class="blog-list">
        <div v-for="item in blogList" :key="item.title" class="blog">
            <h2>
                <router-link :to="{path:'/blog/' + item.gid}" class="title-list">{{ item.title }}</router-link>
            </h2>
            <p style="color: #909399;font-size: 10px">{{ item.date_fmt }} {{ item.Sort.sortname }} {{ item.User.nickname }}</p>
            <div v-html="item.excerpt || item.content"></div>
            <p>
                <router-link :to="{path:'/blog/' + item.gid}">
                    <el-link type="info" class="el-icon-notebook-1">&nbsp;阅读全文>></el-link>
                </router-link>
            </p>
            <p style="text-align: right">
                <router-link :to="{path:'/blog/' + item.gid}">
                    <el-link type="info">评论({{ item.comnun }})</el-link>
                </router-link>
                &nbsp;
                <router-link :to="{path:'/blog/' + item.gid}">
                    <el-link type="info">浏览({{ item.views }})</el-link>
                </router-link>
            </p>
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
            getList() {
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
    .title-list {
        text-decoration: none;
        color: black;
    }

    .blog {
        border-radius: 2px;
        border: 1px solid #E4E7ED;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        padding: 10px;
        margin-bottom: 10px;
    }
</style>
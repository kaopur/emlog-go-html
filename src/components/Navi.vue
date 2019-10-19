<template>
    <div class="">
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                router="router"
        >
            <template v-for="item in navi" :index="'/navi/' +item.naviname">
                <template v-if="item.child_navi">
                    <el-submenu
                            :index="(item.type===5) ? ('/blog/'+item.id) : (item.type===1) ? ('/') : ('/navi/'+item.naviname)"
                            :key="item.naviname"
                    >
                        <template slot="title">{{ item.naviname }}</template>
                        <el-menu-item v-for="subItem in item.child_navi"
                                      :index="(subItem.type===5) ? ('/blog/'+subItem.id) : (subItem.type===1) ? ('/') : ('/navi/'+subItem.naviname)"
                                      :key="subItem.naviname"
                        >
                            {{ subItem.naviname }}
                        </el-menu-item>
                    </el-submenu>
                </template>

                <template v-else>
                    <el-menu-item
                            :index="(item.type===5) ? ('/blog/'+item.id) : (item.type===1) ? ('/') : ('/navi/'+item.naviname)"
                            :key="item.naviname"
                    >
                        {{ item.naviname }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    //菜单组件: https://element.eleme.cn/#/zh-CN/component/menu
    export default {
        name: "Navi",
        props: {},
        components: {
        },
        data() {
            return {
                navi: [],
                activeIndex: 'HTML',//当前选中的导航
                router: true,
            }
        },
        methods: {
            getNavi() {
                this.$http.get("http://localhost:8080/api/navi/rows").then((data) => {
                    if (data.data.error == 0) {
                        this.navi = data.data.data
                    }
                })
            },
            handleSelect(key, keyPath) {
                // eslint-disable-next-line no-console
                console.log(key, keyPath);
            }
        },
        mounted() {
            this.getNavi()
        }

    }
</script>

<style scoped>
</style>
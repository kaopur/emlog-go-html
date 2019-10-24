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
                <!--有子导航-->
                <template v-if="item.child_navi">
                    <el-submenu :index="getNaviRoute($el, item)" :key="item.naviname">
                        <template slot="title">{{ item.naviname }}</template>

                        <template v-for="subItem in item.child_navi">
                            <!--如果是首页-->
                            <template v-if="subItem.type===0">
                                <el-menu-item :key="subItem.naviname" :index="subItem.naviname">
                                    <a :href="subItem.url" target="_blank" role="menuitem" style="text-decoration: none; color: rgb(255, 255, 255)">{{ subItem.naviname }}</a>
                                </el-menu-item>
                            </template>
                            <template v-else>
                                <el-menu-item :index="getNaviRoute($el, subItem)" :key="subItem.naviname">
                                    {{ subItem.naviname }}
                                </el-menu-item>
                            </template>
                        </template>
                    </el-submenu>
                </template>
                <!--没有子导航-->
                <template v-else>
                    <template v-if="item.type===0">
                        <el-menu-item :key="item.naviname" :index="item.naviname">
                            <a :href="item.url" target="_blank" role="menuitem" style="text-decoration: none">{{ item.naviname }}</a>
                        </el-menu-item>
                    </template>
                    <template v-else>
                        <el-menu-item :index="getNaviRoute($el, item)" :key="item.naviname">
                            {{ item.naviname }}
                        </el-menu-item>
                    </template>
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
            },
            getNaviRoute($el, item) {
                switch (item.type) {
                    case 5:
                        return '/blog/'+item.type_id
                    case 1:
                        return '/'
                    case 4:
                        return '/sortid/'+item.type_id
                    default:
                        return '/navi/'+item.naviname
                }
            }
        },
        mounted() {
            this.getNavi()
        },

    }
</script>

<style scoped>
</style>
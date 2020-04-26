<template>
  <el-container class="containermain">
    <el-header class="containerheader">
      <div class="headicon">
        <span>
          <img src="../assets/logo.png" />
        </span>
        <span>记账后台管理系统</span>
      </div>
      <div class="btnLoginOut">
        <el-button type="primary" plain disabled>退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="divCollapse" @click="btnCollapse()">|||</div>
        <el-row class="tac">
          <el-menu
            :default-active="activePath"
            class="el-menu-vertical-demo"
      
            background-color="#333744"
            text-color="#fff"
            active-text-color="#0099FF"
            :collapse="isCollapse"
            :collapse-transition="false"
            unique-opened
            router
          >
            <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.authName}}</span>
              </template>
              <el-menu-item
                :index="'/'+subItem.path"
                v-for="subItem in item.children"
                :key="subItem.id"
                @click="saveNavState('/'+subItem.path)"
              >
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{subItem.authName}}</span>
                </template>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-row>
      </el-aside>

      <el-main>
      <!--   <el-tabs
          v-model="editableTabsValue"
          type="card"
          closable
          @tab-remove="removeTab"
          @tab-click="handleClick"
        >
          <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          > -->
            <!-- {{item.content}} -->
          <!-- </el-tab-pane>
        </el-tabs> -->

        <!-- <router-view></router-view> -->
        <keep-alive v-if="$route.meta.keepAlive">
          <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  data() {
    return {
      value: "",
      isCollapse: false,
      activePath: "",
      dynamicTags: ["标签一", "标签二", "标签三"],
      editableTabs: [
        {
          title: "首页 ",
          name: "index",
          content: "Tab 1 content"
        },
        {
          title: "Tab 2",
          name: "accountmanager",
          content: "Tab 2 content"
        }
      ],
      menuList: [
        {
          authName: "账套管理",
          id: "101",
          children: [
            {
              authName: "账套查询",
              path: "accountmanager",
              id: 1011
            }
          ]
        },
        {
          authName: "凭证管理",
          id: "103",
          children: [
            {
              authName: "凭证查询",
              path: "vouchQuery",
              id: 1031
            }
          ]
        },
        {
          authName: "结转管理",
          id: "104",
          children: [
            {
              authName: "结转查询",
              path: "ucos",
              id: 1041
            }
          ]
        },
        {
          authName: "用户管理",
          id: "105",
          children: [
            {
              authName: "用户查询",
              path: "user",
              id: 1051
            }
          ]
        }
      ]
    };
  },
  name: "Home",
  components: {
    HelloWorld
  },
  created() {
    this.activePath = window.sessionStorage.getItem("activePath");
  },
  methods: {
    saveNavState(path) {
      let newoobj = {
        title: "Tab",
          name: path,
          content: "Tab 2 content"
      }
      this.editableTabs.push(newoobj); 
      window.sessionStorage.setItem("activePath", path);
      this.activePath = path;
    },
    btnCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    handleClick(tab, event) {
      let str = event.target.getAttribute("id");
      let id = str.substring(4);
      this.$router.push({ path: "/" + id });
      console.log(tab);
      console.log(event);
      console.log(event.target.getAttribute("id"));
    }
  }
};
</script>

<style lang="less">
.el-container {
  height: 100%;
  /* border: 1px solid #eee; */
}

.el-header {
  padding: 0px !important;
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span img {
    width: 60px;
    height: 60px;
  }
  .headicon {
    display: flex;
    align-items: center;
    span {
      color: #fff;
    }
  }
  .btnLoginOut {
    padding-right: 15px;
  }
}
.el-aside {
  background-color: #333744;
  .divCollapse {
    background-color: #333744;
    text-align: center;
    letter-spacing: 2px;
    cursor: pointer;
    color: #fff;
  }
}
.el-main {
  padding: 5px !important;
}
.el-menu {
  border: 0px !important;
}
</style>

<template>
  <a-layout class="layout">
    <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      class="layout-bg"
      style="
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      "
    >
      <div class="logo">
        <img :src="logo" alt="" style="width: 50%;height: 45%;margin-left: 10px;" />
      </div>
      <a-menu
      class="meun"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        style="background: none;flex-direction: column;display: flex;height: 80%;padding-top:80px"
      >
      <div v-for="(item, index) in mapList" :key="index" style="width: 100%;height: 50px;">
        <div :class="mapList.length-1 === index ? 'k':'y'"> 
          <a-menu-item
          :key="index"
          @click="onClick(item.path,index)"
        >
        <div style="display: flex;align-items: center;">
          <img :src="selectedKeys[0] == index?limgList[index]:imgList[index]" alt="" style="width: 20px;height: 20px;margin-right: 10px;" />
          <span :class="selectedKeys[0] == index?'active-nav-text':'nav-text'" >{{ item.meta.title }}</span>
        </div>
        <div :class="activeName === index ? 'acline':''"></div>
        </a-menu-item>
        </div>
      
      </div>
      
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        :style="{
          background: '#F9F9F9',
          height:'150px',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }"
      >
        <div
          style="
            width: 95%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #C4C4C4;
            height: 100%;
          "
        >
          <div style="display: flex; align-items: center">
            <a-input v-model:value="value" placeholder="Enter keywords..."  @search="onSearch" style="width: 450px;height: 35px;box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;border-radius: 10px;">
            <template #prefix>
              <SearchOutlined  style="color:#C4C4C4" />
            </template>
          
             </a-input>
          </div>

          <div style="display: flex; align-items: center; cursor: pointer">
            <div>
              <a-dropdown>
                <div @click.prevent>
                  EN
                  <DownOutlined />
                </div>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>
                      <a href="javascript:;" style="font-weight: 700;color: #707070;">CH</a>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
            <div class="icon">
              <div
                style="
                  position: absolute;
                  right: 5px;
                  top: 5px;
                  background-color: red;
                  border-radius: 20px;
                  width: 20px;
                  height: 20px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-weight: 600;
                "
              >
                1
              </div>
              <img :src="tix" alt="" style="width: 20px;height: 20px;" />
            </div>
            <div class="icon">
              <img :src="tx" alt=""  style="width: 50px;height: 50px;"/>
              <!-- <icon
                class="iconfont icon-morentouxiangtouxiangwodegerenzhongxin"
              ></icon> -->
            </div>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
       
        <div style="padding:0px 20px 20px 20px;height: 100%;overflow-y:auto;">
          <router-view></router-view>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import tx from '@/assets/tx.png'
import tix from '@/assets/tix.png'
import logo from "@/assets/logon.png";
import dashimg from "@/assets/dashimg.png";
import currimg from "@/assets/currimg.png";
import finimg from "@/assets/finimg.png";
import clienimg from "@/assets/clienimg.png";
import settingimg from "@/assets/settingimg.png";
import dashlimg from "@/assets/dashlimg.png";
import currlimg from "@/assets/currlimg.png";
import finlimg from "@/assets/finlimg.png";
import clienlimg from "@/assets/clienlimg.png";
import settinglimg from "@/assets/settinglimg.png";
import { DownOutlined,SearchOutlined } from "@ant-design/icons-vue";
import Router from "./../../router/index";
import { ref } from "vue";
import { useRouter } from "vue-router";
const imgList = [dashimg,currimg,finimg,clienimg,settingimg]
const limgList = [dashlimg,currlimg,finlimg,clienlimg,settinglimg]
const router = useRouter();
const activeName = ref<number>(0)
const list = Router.getRoutes().filter((item: any) => {
  return item.path === "/content";
});
const mapList = ref<any>(list[0].children);

const value = ref<string>("");

const selectedKeys = ref<string[]>([0]);
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};

const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};

const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
};
const onClick = (path: string,index: string) => {
  activeName.value = index;
  router.push({
    path: path,
  });
};
</script>
<style lang="less" scoped>
.layout {
  .ant-layout{
  background-color: #F9F9F9;

  }
  .nav-text{
    color: #cecece;
  }
  .active-nav-text{
    color: #ffffff;
  }
  .layout-bg{
    background: url('@/assets/meunbg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-width: 250px !important;
    max-width: 400px !important;
  }
  .k{
    height: 50px;
    width: 100%;
    position: absolute;
    bottom: 100px;
  }
  .y{
    position: relative;
    width: 100%;
    height: 50px;
   
  }
  .logo {
    height: 75px;
    background: none;
    margin: 16px;
    display: flex;
    align-items: flex-end;
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
  }

 
}
</style>
<style lang="less" >
@import "@/font/index.less";

.iconfont {
  font-size: 30px;
}

.icon {
  cursor: pointer;
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 20px;
  padding-left: 3px;
}

.layout {
  height: 100vh;
  .meun{
    [data-theme="dark"] .site-layout-sub-header-background {
    background: #141414;
  }
  .ant-menu{
    height: 100%;
  }
  .ant-menu-item {
    color: #cecece !important;
  }
  .ant-menu-item:last-child{
    position: absolute !important;
    bottom: 0 !important;
  }
  .ant-menu-item-selected{
      padding-right: 2px;
    }

  .ant-menu-item-selected {
    background-color: none !important;
    background: none !important;
   
  }

  .ant-menu-item-selected::after {
    border-bottom: 5px solid #0b3c69 !important;
    border-radius: 10px;
   
  }

  .ant-menu-item-active {
    color: #0b3c69 !important;
  }

  .ant-menu-item-active::after {
    border-bottom: 5px solid #0b3c69 !important;
    border-radius: 10px;
  }
  }
 
.ant-dropdown-trigger{
  font-weight: 700;
  color: #707070;
}
.rtitle{
  display: flex;align-items: flex-start;
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 33px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135.48deg, #133364 2.46%, #056CAE 90.65%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
padding-bottom: 10px;

}
.ant-menu-title-content{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  .acline{
    height: 80px;
    width: 3px;
    border-radius: 10px;
    background-color: white;
  }
}
}
.ant-table-row{
  color: #707070;


}

</style>

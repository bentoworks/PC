<template>
  <div class="home">
    <div class="header">
      <div class="logo">
        <img :src="logo" alt=""  />
      </div>
      <div class="header-item">
        <div :class="getClass(0)" @click="onChangeAcitve(0)">
          Home
          <div class="isLine"></div>
        </div>
        <div :class="getClass(1)" @click="onChangeAcitve(1)">
          Overview

          <div class="isLine"></div>
        </div>
        <div :class="getClass(2)" @click="onChangeAcitve(2)">
          Feature
          <div class="isLine"></div>
        </div>
        <div :class="getClass(3)" @click="onChangeAcitve(3)">
          Pricing
          <div class="isLine"></div>
        </div>
      </div>
      <div class="header-r">
        <div
        class="cc"
      
        >
        <button class="home-btn"> Get Started </button>
        </div>
        <div
        class="cc"
    
          @click="onLogin"
        >
        <button  class="home-btn" >
          Login
        </button>
        </div>
      </div>
    </div>
    <div class="content">
      <img
        :src="bgb"
        alt=""
        style="
          width: 300px;
          height: 700px;
          position: absolute;
          top: 0px;
          left: 0px;
        "
      />
      <img
        :src="bga"
        alt=""
        style="
          width: 30%;
          height: 50%;
          position: absolute;
          bottom: 0px;
          right: 0px;
        "
      />
      <div class="title" style="margin-bottom: 30px">
        Manage you global and virtual assets
      </div>
      <div  class="con">
        <div
          style="
          margin-bottom: 30px;
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
              ),
              linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
            width: 180px;
            height: 60px;
            border-radius: 180px;
          "
          @click="onContent"
        >
          <button class="home-btn us">Contact Us</button>
        </div>
      </div>
      <div class="flex">
        <img
          :src="url"
          alt=""
          style="
            height: 100%;
            border-top-right-radius: 30px;
            border-top-left-radius: 30px;
            z-index: 99;
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import url from "@/assets/Dashboard .png";
import logo from "@/assets/logon.png";
import bgb from "@/assets/bgb.jpg";
import bga from "@/assets/bga.jpg";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const active = ref<number>(0);
const onChangeAcitve = (index: number) => {
  active.value = index;
};
const getClass = (index: number) => {
  if (active.value === index) {
    return "isActive";
  }
  return "isShow";
};
const onContent = () => {
  router.push({
    path: "/content",
  });
};
const onLogin = () => {
  router.push({
    path: "/login",
  });
};
</script>
<style lang="less" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header {
    height: 100px;
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(to bottom, #133364, #056cae);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    height: 150px;
    .logo {
      flex: 1;
      background: none !important;
      display: flex;
      align-items: flex-start;
    }
    .header-item {
      cursor: pointer;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      .isActive {
        height: 45px;
        color: white;
        .isLine {
          width: 100%;
          height: 5px;
          border-radius: 3px;
          background-color: #b5b5b5;
          margin-top: 10px;
        }
      }
      .isShow {
        height: 45px;
        color: white;
      }
    }
    .header-r {
      width: 450px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .cc{
        background: linear-gradient(225.97deg, #D0D0D0 33.6%, #ABABAB 73.59%);
            width: 180px;
            height: 60px;
            border-radius: 180px;
      }
    }
  }
  .content {
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    left: 0;
    top: 0;
    .title {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 54px;
      text-align: center;
      /* Onefi colour */
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
      position: absolute;
      bottom: 80%;
      width: 100%;
    }
    .con{
      width: 100%;
      display: flex; align-items: center; justify-content: center;
      position: absolute;
      bottom: 60%;
    }
    .flex {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0px;
      height: 50%;
    }
  }
  .home-btn {
    border:none;
    width: 180px;
    cursor: pointer;
    height: 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 28.5px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135.48deg, #133364 2.46%, #056CAE 90.65%);
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

  
  }
  .us {
    cursor: pointer;
    height: 60px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 28.5px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 101.18%;
    background: linear-gradient(
      116.98deg,
      #b5b5b5 12.38%,
      #bfbfbf 45.52%,
      #848484 78.65%
    );
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    z-index: 99;
    text-fill-color: transparent;
  }
  .ant-btn::after {
    background: linear-gradient(
      116.98deg,
      #b5b5b5 12.38%,
      #bfbfbf 45.52%,
      #848484 78.65%
    );
  }

 
}
</style>

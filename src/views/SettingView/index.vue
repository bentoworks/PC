<template>
  <div>
    <div class="setting">
      <div class="item" v-if="!isShow">
        <div class="title">Accout</div>
        <div class="item-item">
          <div class="l">Name</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">Email Address</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">Role</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
      </div>
      <div class="item" v-if="!isShow">
        <div class="title">Current Password</div>
        <div class="item-item">
          <div class="l">Name</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">New Password</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">Confirm Password</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
      </div>
      <div class="item" v-if="!isShow">
        <div style="display: flex;align-items: flex-end; justify-content: flex-end;">
          <div  style="
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
              ),
              linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
            width: 180px;
            height: 45px;
            margin-left: 20px;
            border-radius: 180px;
          ">
          <button
            class="us"
          >
          <PlusOutlined  style="color: white;size: 20px;"/> Add Role
          </button>
          </div>
        </div>
          <div class="title">Role and Permission</div>

        <div class="item-item">
          <div class="l">Admin</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">Developer</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">Customer Service</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">Project Management</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
      </div>
      <div class="item" v-if="isShow">
        <div class="title">Auth</div>
        <div class="item-item">
          <div class="l">Admin</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">API key</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">API Secret</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
        <div class="item-item">
          <div class="l">Client ID/SBT</div>
          <div class="r">
            <a-input v-model:value="value" placeholder="Basic usage" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">

      <div  v-if="!isShow" style="
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
              ),
              linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
            width: 180px;
            height: 45px;
            border-radius: 180px;
          ">
          <button
            class="us"
            @click="onIsShow"
          >
          API Key
          </button>
          </div>
          <div  style="
            background: linear-gradient(
                0deg,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.2)
              ),
              linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
            width: 180px;
            height: 45px;
            margin-left: 20px;
            border-radius: 180px;
          ">
          <button
            class="us"
            @click="onIsShow"
          >
          Save
          </button>
          </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { PlusOutlined } from "@ant-design/icons-vue";
const isShow = ref<any>(false)
const onIsShow = ()=>{
    isShow.value =! isShow.value
}
</script>
<style lang="less" >
.setting {
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  .item {
    text-align: left;
    width: 100%;
    margin-top: 20px;
    .title {
        width: 100%;
        height: 35px;
        color: #133364;
        font-size: 18px;
        font-weight: 600;
        border-bottom: 1px solid #c4c4c4;
        margin-bottom: 10px;
        }
    .item-item {
      display: flex;
      align-items: center;
      height: 50px;
      margin-bottom: 10px;
      .l {
        flex: 1;
      }
      .r {
        flex: 9;
      }
      .ant-input {
        border-radius: 10px;
      }
    }
  }
}
.bottom {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  .btn {
    width: 120px;
    height: 40px;
    border-radius: 20px !important;
    background-color: #0b3c69 !important;
    border: #0b3c69 !important;
    font-weight: 600 !important;
    margin-right: 20px;
  }
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
    font-size: 16px;
    line-height: 101.18%;
    color: white;
    width: 180px;
    height: 45px;
    border: none;
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
</style>
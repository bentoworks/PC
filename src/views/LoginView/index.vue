<template>
  <div class="login">
    <div class="bg">
      <div class="content">
        <img :src="logo" alt="" />
        <div class="line"></div>
        <div>Fi Platform Dashboard</div>
      </div>
    </div>
    <div class="login-dialog">
      <div class="title">{{ isActiveNum === 0 ? "Login" : "Register" }}</div>

      <a-form
        v-if="isActiveNum === 0"
        style="
          width: 80%;
          height: 80%;
          display: flex;
          align-content: flex-start;
          flex-direction: column;
          justify-content: space-around;
        "
        :model="formState"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <div
          style="
            display: flex;
            align-content: flex-start;
            flex-direction: column;
            justify-content: space-around;
          "
        >
          <a-form-item
            label="Email"
            name="username"
            class="item"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            class="item"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>
        </div>

          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
            "
          >
            <a-checkbox v-model:checked="formState.remember" style="color:#707070"
              >Remember me</a-checkbox
            >
            <a>Forgot password?</a>
          </div>


        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div  style="
            margin-top: 30px;
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
            @click="onChangeNum(1)"
          >
          Login
          </button>
          </div>
          <div  style="
            margin-top: 30px;
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
            @click="onChangeNum(1)"
          >
          Register
          </button>
          </div>
        </div>
      </a-form>
      <a-form
        v-if="isActiveNum === 1"
        style="
          width: 80%;
          height: 80%;
          display: flex;
          align-content: flex-start;
          flex-direction: column;
          justify-content: space-around;
        "
        :model="formState1"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <div
          style="
            display: flex;
            align-content: flex-start;
            flex-direction: column;
            justify-content: space-around;
          "
        >
          <a-form-item
            label="Email"
            name="email"
    
            class="item"
          >
            <a-input v-model:value="formState1.email" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
         
            class="item"
          >
            <a-input-password v-model:value="formState1.password" />
          </a-form-item>

          <a-form-item
            label="Confirm Password"
            name="cpassword"
          
            class="item"
          >
            <a-input-password v-model:value="formState1.cpassword" />
          </a-form-item>
        </div>

        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top:20px;
          "
        >
        <div  style="
            margin-bottom: 30px;
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
            @click="onChangeNum(2)"
          >
          Get verified code
          </button>
          </div>
        </div>
      </a-form>
      <a-form
        v-if="isActiveNum === 2"
        style="
          width: 80%;
          height: 80%;
          display: flex;
          align-content: flex-start;
          flex-direction: column;
          justify-content: space-around;
        "
        :model="formState2"
        name="basic"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <div
          style="
            display: flex;
            align-content: flex-start;
            flex-direction: column;
            justify-content: space-around;
          "
        >
          <a-form-item
            label="Verifed Code"
            name="code"
            class="item"
          >
            <a-input v-model:value="formState2.code" />
          </a-form-item>
        </div>

        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top:20px;
          "
        >
          <div  style="
            margin-bottom: 30px;
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
            @click="onChangeNum(3)"
          >
          Next
          </button>
          </div>
        </div>
      </a-form>
      <div v-if="isActiveNum === 3" class="min-title">
        <div style="height: 80px;line-height:80px;font-size: 20px;font-weight: 300;">
            Your account is now verified
        </div>
        <div style="display:flex;align-items:flex-start;">
          <div  style="
            margin-bottom: 30px;
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
            @click="onChangeNum(0)"
          >
          Login
          </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import logo from "@/assets/logon.png";
import { ref, reactive } from "vue";
const isActiveNum = ref<number>(0);
const formState = reactive<any>({
  username: "",
  password: "",
  remember: true,
});
const formState1 = reactive<any>({
  email: "",
  password: "",
  cpassword: true,
});
const formState2 = reactive<any>({
  code: "",
});
const onChangeNum = (index: number) => {
  isActiveNum.value = index;
};
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>
<style  lang="less">
.login {
  width: 100%;
  height: 100vh;
  background-color: #F9F9F9;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  .bg {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    background: url("@/assets/loginBg.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      height: 300px;
      width: 50%;
      height: 300px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      > img {
        width: 400px;
        height: 120px;
      }
      .line {
        width: 500px;
        background-color: white;
        height: 1px;
      }
      color: white;
      font-weight: bold;
      font-size: 16px;
    }
  }
  .login-dialog {
    width: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    z-index: 999;
    border: 1px solid #ffffff;
    border-radius: 10px;
    margin-right: 30%;
    padding: 50px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-right: 5%;
    margin-top: -15%;
    .item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 100px;
    }
    .title {
      font-size: 26px;
      font-weight: 700;
      color: #0b3c69;
    }
    .min-title {
      font-weight: 700;
      color: #0b3c69;
    }
    .us {
    z-index: 99;
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
    .ant-checkbox-inner {
      background-color: #133364;
      border-color: #133364;
    }
    .ant-input {
      width: 100%;
      height: 45px;
      border-radius: 5px;
      
    }
    .ant-form-item-explain-error {
      height: 30px;
      line-height: 30px;
    }
    .ant-input-password {
      border-radius: 5px;
    }
    .ant-form-item-control-input {
      width: 300px;
    }
    .ant-form-item-required {
      height: 40px;
      line-height: 40px;
    }
    .ant-form-item-required{
        color: #707070;
    }
    .ant-form-item-control{
      width: 100% !important;
    }
    .ant-form-item-control-input{
      height: 45px;
      width: 100% !important;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
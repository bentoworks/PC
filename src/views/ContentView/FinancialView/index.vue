<template>
  <div class="dash">
    <div class="rtitle">{{route.meta.title}}</div>
    <div style="display: flex;height: calc(100% - 43px);flex-direction: column;">
    <div class="header-item">
      <div class="item">
        <div style="position: relative; width: 200px">
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
            :class="isSelectFilterItem != null ? 'us' : 'btn'"
            @click="isFiterShow = true"
          >
           <UnorderedListOutlined style="font-size: 16px"/>
            {{
              isSelectFilterItem != null ? isSelectFilterItem.name : "Filter"
            }}
          </button>
          </div>
          <div class="select" v-if="isFiterShow">
            <div
              class="select-item"
              v-for="item in filterList"
              :key="item"
              @click="onChangeFilterSelect(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div style="position: relative; margin-left: 20px; width: 200px">
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
            :class="isSelectCateItem != null ? 'us' : 'btn'"
            @click="isCateShow = true"
          >
            {{
              isSelectCateItem != null ? isSelectCateItem.name : "By Categories"
            }}
          </button>
          </div>
          <div class="select" v-if="isCateShow">
            <div
              class="select-item"
              v-for="item in CateList"
              :key="item"
              @click="onChangeCateSelect(item)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="item">
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
        @click="showModal"
          class="us"
        >
          <PlusOutlined style="font-size: 12px" />
          Add Product
        </button>
        </div>
      
      </div>
    </div>
    <div class="content">
      <div class="item" v-for="item in 7" :key="item">
        <div style="display: flex; flex-direction: column">
          <div class="item-content">
           
            <div class="title" style="font-size: 32px;"> <img :src="h" alt="" style="width:40px;height:40px;margin-top: -10px;"/>DBS</div>
            <div style="color:rgb(255, 146, 84);font-size: 16px;" v-if="1">Pending</div>
            <div style="color:#3dd26a;font-size: 16px;" v-else>Approve</div>
          </div>
          <div class="item-content">
            <div>Tax Season Lan</div>
            <div class="title-min">Tax Loan</div>
          </div>
          <div class="line"></div>
          <div class="item-content">
            <div class="title-min">interset Rate</div>
            <div class="title-min">Toal Repayment</div>
            <div class="title-min">Total Inerset</div>
          </div>
          <div class="item-content">
            <div class="title" style="font-size: 14px">64%</div>
            <div class="title" style="font-size: 14px">HK $106,410.00</div>
            <div class="title" style="font-size: 14px">HK $106,410.00</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk" :centered="true">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from 'vue-router'
import h from '@/assets/h.png'
import { PlusOutlined, UnorderedListOutlined ,MinusSquareOutlined} from "@ant-design/icons-vue";
const route = useRoute();
const visible = ref<boolean>(false);
const isSelectFilterItem = ref<any>(null);
const isSelectCateItem = ref<any>(null);
const isFiterShow = ref<any>(false);
const isCateShow = ref<any>(false);
const filterList = ref<any>([
  { key: 0, name: "All" },
  { key: 1, name: "By Date added" },
  { key: 2, name: "By Status" },
]);
const CateList = ref<any>([
  { key: 0, name: "All" },
  { key: 1, name: "Loan" },
  { key: 2, name: "Credit Card" },
  { key: 3, name: "Insurance" },
  { key: 4, name: "Mortgages" },
  { key: 5, name: "Digital Assets" },
  { key: 6, name: "Mutual Fund" },
]);
const onChangeFilterSelect = (item: any) => {
  isSelectFilterItem.value = item;
  isFiterShow.value = !isFiterShow.value;
};
const onChangeCateSelect = (item: any) => {
  isSelectCateItem.value = item;
  isCateShow.value = !isCateShow.value;
};
const showModal = () => {
      // visible.value = true;
 };
const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
};
</script>
<style lang="less" scoped>
.dash {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  .header-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    .item {
      border-radius: 10px;
      font-size: 18px;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: space-around;
      
      .btn {
        width: 180px;
        border-radius: 20px;
        background-color: #ffffff;
        border: #ffffff;
        font-weight: 600;
        height: 45px;
        color: #0b3c69;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
      }
      .activebtn {
        width: 200px;
        border-radius: 20px;
        background-color: #0b3c69;
        border: #0b3c69;
        font-weight: 600;
        color: white;
        height: 42px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
      }
      .select {
        width: 100%;
        top: 0px;
        position: absolute;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
        .select-item {
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 0;
          font-size: 16px;
        }
        .select-item:hover {
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
          width: 200px;
          height: 45px;
          border: none;
          text-align: center;
          text-fill-color: transparent;
           background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135.48deg, rgb(19, 51, 100) 2.46%, rgb(5, 108, 174) 90.65%); 
           color:white;
        }
      }
    }
  }
  .content {
    display: flex;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 50px;
    .item {
      padding: 10px;
      width: 31%;
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      margin-bottom: 30px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      height: 240px;

      .item-header {
        display: flex;
        justify-content: space-between;
      }
      .line {
        height: 1px;
        background-color: #cecece;
        width: 100%;
      }
      .item-content {
        display: flex;
        justify-content: space-between;
        height: 35px;
        align-items: center;
      }
    }
    .title {
      text-align: left;
      font-size: 18px;
      font-weight: bold;
    }
    .title-min {
      text-align: left;
      font-size: 14px;
      color: #cecece;
    }
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
}
</style>
<style lang="less">
.dash {
  .ant-select-selector {
    border-radius: 20px !important;
    background-color: rgb(11, 60, 105) !important;
  }
}
</style>

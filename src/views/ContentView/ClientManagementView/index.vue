<template>
  <div class="client">
    <div class="table" v-if="!deatilsDataShow && !moreDataShow" style="box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);">
      <div class="title">User List</div>
      <div style="margin-top: 40px">
        <a-table :columns="columns" :data-source="data" :pagination=false>
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span> Name </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <span>
                {{ record.name }}
              </span>
            </template>
            <template v-else-if="column.key === 'tags'">
              <span v-for="item in record.tags" :key="item">
                {{ item }}
              </span>
            </template>
            <template v-else-if="column.key === 'action'">
              <span>
                <FormOutlined
                  style="font-size: 20px; color: #0b3c69; cursor: pointer"
                  @click="onDeatils(record)"
                />
                <!-- <img :src="deat" alt="" style="width:30px;height:30px;border-radius: 30px;"   @click="onDeatils(record)"/> -->
              </span>
            </template>
          </template>
        </a-table>
      </div>
    </div>

    <div v-if="deatilsDataShow && !moreDataShow" class="deatils">
      <div class="header">
        <div>Client Management</div>
        <div>>Deatils</div>
      </div>
      <div class="info">
        <div>
          <a-menu
            v-model:selectedKeys="current"
            mode="horizontal"
            style="
              font-size: 16px;
              font-weight: 600;
              color: #133364;
              background-color: #f0f2f5;
            "
          >
            <a-menu-item key="Info" style="padding: 0px">
              <template #icon>
                <mail-outlined />
              </template>
              Registration Info •
            </a-menu-item>

            <a-menu-item key="Planning" style="padding: 0px">
              <template #icon>
                <appstore-outlined />
              </template>
              Financial Planning •
            </a-menu-item>
            <a-menu-item key="File" style="padding: 0px">
              <template #icon>
                <appstore-outlined />
              </template>
              Private File •
            </a-menu-item>
            <a-menu-item key="Saving" style="padding: 0px">
              <template #icon>
                <appstore-outlined />
              </template>
              i Saving •
            </a-menu-item>
            <a-menu-item key="Bank" style="padding: 0px">
              <template #icon>
                <appstore-outlined />
              </template>
              Bank Connection
            </a-menu-item>
          </a-menu>
        </div>
        <div class="info-item">
          <div class="info-l">
            <div>
              <div class="top" v-if="current[0] === 'Info'">
                <div class="item">
                  <div class="l">Name</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">User ID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Status</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Initial Capital</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Investment Portfolio</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Phone Number</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Email Address</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Registration Date</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
              </div>

              <div class="top" v-if="current[0] == 'Planning'">
                <div class="item">
                  <div class="l">Type of Goal</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Total Amout</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Partner</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Complete Date</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Plan Name</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Goal Status</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
              </div>
              <div class="top" v-if="current[0] == 'File'">
                <div class="item">
                  <div class="l">Date of Birthday</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Location</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Postcode</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">HKID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Passport</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Student ID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">FPS ID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
              </div>
              <div class="top" v-if="current[0] == 'Saving'">
                <div class="item">
                  <div class="l">Methodology</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">eDDA</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Credit Care</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Bank Accout</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
              </div>
            </div>
            <div class="top" v-if="current[0] == 'Bank'">
              <div class="bank">
                <div class="bank-item" v-for="item in 10" :key="item">
                  <img src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" alt="" style="width: 45px;height: 45px;" />
                  <div class="content">
                      <div class="header-title"> <div class="title">Standard Chartered</div> <div class="min-title" style="margin-left: 10px;">(Buis)</div></div>
                      <div> <div class="title">240500</div></div>
                      <div> <div class="min-title">Last update time: 24.4.2023 16:15</div></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="table" style="padding: 0px">
                <div class="title">Request Record</div>
                <div style="margin-top: 40px">
                  <a-table :columns="columns" :data-source="data" :pagination=false>
                    <template #headerCell="{ column }">
                      <template v-if="column.key === 'name'">
                        <span> Name </span>
                      </template>
                    </template>

                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'name'">
                        <span>
                          {{ record.name }}
                        </span>
                      </template>
                      <template v-else-if="column.key === 'tags'">
                        <span v-for="item in record.tags" :key="item">
                          {{ item }}
                        </span>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <span>
                          <FormOutlined
                            style="
                              font-size: 20px;
                              color: #0b3c69;
                              cursor: pointer;
                            "
                            @click="onDeatils(record)"
                          />
                        </span>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
            </div>
          </div>
          <div class="info-r">
            <div class="list">
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
                Add Product
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
                >
                PEP
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
                >
                Sanction
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
                >
                Report
                </button>
                </div>
                <div  @click="onChangeMore" style="
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
                More
                </button>
                </div>
            </div>
            <div class="bottom-list">
              <div  @click="onChangeMore" style="
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
                Add Product
                </button>
                </div>

              <div class="title">Last update time: 24.4.2023 16:15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more" v-if="deatilsDataShow && moreDataShow">
      <div class="header">
        <div>Client Management</div>
        <div>>Deatils</div>
        <div>>More</div>
      </div>
      <div class="info">
        <div>
          <a-menu
            v-model:selectedKeys="current1"
            mode="horizontal"
            style="
              font-size: 16px;
              font-weight: 600;
              color: #133364;
              background-color: #f0f2f5;
            "
          >
            <a-menu-item key="General" style="padding: 0px">
              <template #icon>
                <mail-outlined />
              </template>
              General Request . •
            </a-menu-item>
            <a-menu-item key="KYC" style="padding: 0px">
              <template #icon>
                <appstore-outlined />
              </template>
              KYC Request •
            </a-menu-item>
            <a-menu-item key="Marketing" style="padding: 0px">
              <template #icon>
                <appstore-outlined />
              </template>
              Marketing Request
            </a-menu-item>
          </a-menu>
        </div>
        <div class="info-item">
          <div class="info-l">
            <div>
              <div class="top" v-if="current1[0] === 'General'">
                <div class="item">
                  <div class="l">Name</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">User ID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Status</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Initial Capital</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Investment Portfolio</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Phone Number</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Email Address</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Registration Date</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
              </div>
              <div class="top" v-if="current1[0] == 'KYC'">
                <div class="item">
                  <div class="l">First Name</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Last Name</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Date of Birthday</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Location</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Address</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Postcode</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">HKID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Passport</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Student ID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">FPS ID</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
              </div>
              <div class="top" v-if="current1[0] == 'Marketing'">
                <div class="item">
                  <div class="l">Methodology</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">eDDA</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Credit Care</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
                <div class="item">
                  <div class="l">Bank Accout</div>
                  <div class="r">
                    <a-input v-model:value="value" placeholder="Basic usage" />
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="bottom">
              <div class="table" style="padding: 0px">
                <div class="title">Request Record</div>
                <div style="margin-top: 40px">
                  <a-table :columns="columns" :data-source="data">
                    <template #headerCell="{ column }">
                      <template v-if="column.key === 'name'">
                        <span> Name </span>
                      </template>
                    </template>

                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'name'">
                        <span>
                          {{ record.name }}
                        </span>
                      </template>
                      <template v-else-if="column.key === 'tags'">
                        <span v-for="item in record.tags" :key="item">
                          {{ item }}
                        </span>
                      </template>
                      <template v-else-if="column.key === 'action'">
                        <span>
                          <FormOutlined
                            style="
                              font-size: 20px;
                              color: #0b3c69;
                              cursor: pointer;
                            "
                            @click="onDeatils(record)"
                          />
                        </span>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
            </div> -->
          </div>
          <div class="info-r">
            <div class="list">
              <div  @click="onChangeMore" style="
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
                API requset
                </button>
                </div>
            </div>
           
            <div class="bottom-list">
              <div  @click="onChangeMore" style="
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
                Add Product
                </button>
                </div>

              <div class="title">Last update time: 24.4.2023 16:15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { FormOutlined } from "@ant-design/icons-vue";
const deatilsData = ref<any>();
const current = ref<string[]>(["Info"]);
const current1 = ref<string[]>(["General"]);
const deatilsDataShow = ref<any>(false);
const moreDataShow = ref<any>(false);
const columns = ref<any>([
  {
    name: "",
    dataIndex: "key",
    key: "key",
  },
  {
    name: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "User ID",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Phone",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Date",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Deatils",
    key: "action",
  },
]);

const data = ref<any>([
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
]);

const onDeatils = (item: any) => {
  deatilsDataShow.value = !deatilsDataShow.value;
  moreDataShow.value = !moreDataShow.value;
  deatilsData.value = item;
};
const onChangeMore = () => {
  moreDataShow.value = !moreDataShow.value;
};
</script>
<style lang="less">
.client {
  height: 80vh;
  padding: 20px;
  .table {
    min-height: 800px;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #ffffff;
    .title {
      width: 100%;
      padding-left: 10px;
      height: 50px;
      line-height: 50px;
      color: #0b3c69;
      font-size: 16px;
      font-weight: 700;
      text-align: left;
      border-bottom: 1px solid #c4c4c4;
    }
    .ant-table-thead {
      .ant-table-cell {
        font-size: 16px;
        font-weight: 600;
        color: #0b3c69 !important;
      }
    }
  }

  .deatils {
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      align-items: center;
      color: #0b3c69;
      font-size: 20px;
      font-weight: 700;
      padding-left: 10px;
      padding-bottom: 30px;
    }
    .info {
      display: flex;
      flex-direction: column;
      .info-item {
        display: flex;
        .info-l {
          flex: 8;
          display: flex;
          flex-direction: column;

          .top {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
            padding: 20px;
            background-color: #ffffff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            display: flex;
            .item {
              height: 50px;
              width: 100%;
              display: flex;
              align-items: center;
              .l {
                flex: 2;
                text-align: left;
              }
              .r {
                flex: 8;
                .ant-input {
                  border-radius: 10px;
                }
              }
            }
            .bank{
              width: 100%;
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              .bank-item{
                width: 45%;
                height: 100px;
                border-bottom: 1px solid #C4C4C4;
                display: flex;
                align-items: center;
                .content{
                  margin-left: 20px;
                  display: flex;
                  align-items: flex-start;
                  flex-direction: column;
                  .header-title{
                    display: flex;
                  }
                  .title{
                    font-size: 16px;
                  }
                  .min-title{
                    font-size: 14px;
                    color: #C4C4C4;
                  }
                }
              }
            }
          }
          .bottom {
            height: auto;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            padding: 20px;
            background-color: #ffffff;
          }
        }
        .info-r {
          padding: 10px;
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .list {
            height: 40%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
          }
          .bottom-list {
            height: 15%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            .title {
              font-size: 18px;
            }
          }
          .btn {
            width: 60%;
            height: 35px;
            border-radius: 20px;
            background-color: #0b3c69;
            border: #0b3c69;
            font-weight: 600;
          }
        }
      }
    }
   
  }
  .more {
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      align-items: center;
      color: #0b3c69;
      font-size: 20px;
      font-weight: 700;
      padding-left: 10px;
      padding-bottom: 30px;
    }
    .info {
      display: flex;
      flex-direction: column;
      .info-item {
        display: flex;
        .info-l {
          flex: 8;
          display: flex;
          flex-direction: column;

          .top {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
            padding: 20px;
            background-color: #ffffff;
            .item {
              height: 50px;
              width: 100%;
              display: flex;
              align-items: center;
              .l {
                flex: 2;
                text-align: left;
              }
              .r {
                flex: 8;
                .ant-input {
                  border-radius: 10px;
                }
              }
            }
          }
          .bottom {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
            padding: 20px;
            background-color: #ffffff;
          }
        }
        .info-r {
          padding: 10px;
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .list {
            height: 40%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
          }
          .bottom-list {
            height: 15%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
            .title {
              font-size: 18px;
            }
          }
          .btn {
            width: 60%;
            height: 35px;
            border-radius: 20px;
            background-color: #0b3c69;
            border: #0b3c69;
            font-weight: 600;
          }
        }
      }
    }
  }
  .ant-menu-item {
    color: #0b3c69 !important;
  }
  .ant-menu-item-selected {
    color: #0b3c69;
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
</style>

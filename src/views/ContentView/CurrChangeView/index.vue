<template>
  <div class="curr">
    <a-menu
      v-model:selectedKeys="current"
      mode="horizontal"
      style="
        font-size: 16px;
        font-weight: 600;
        color: #133364;
        background-color: #f9f9f9;
      "
    >
      <a-menu-item key="Currency" style="padding: 0px">
        <template #icon>
          <mail-outlined />
        </template>
        <div style="font-weight: 700; font-size: 20px">
          Currency Exchange &nbsp;• &nbsp;&nbsp;
        </div>
      </a-menu-item>
      <a-menu-item key="Crypto" style="padding: 0px">
        <template #icon>
          <appstore-outlined />
        </template>
        <div style="font-weight: 700; font-size: 20px">
          Crypto Exchange&nbsp; &nbsp;&nbsp;
        </div>
      </a-menu-item>
    </a-menu>
    <div class="header-all" style="margin-top: 10px">
      <div class="header">
        <div class="item" v-for="(item, index) in 2" :key="item">
          <div class="right">
            <div class="title-min">
              {{ item === 2 ? "Balance in USD" : "Available Balance" }}
            </div>
            <div class="title" style="display: flex; align-items: center">
              <div class="title">$1,478,2866</div>
            </div>
            <div style="display: flex; align-items: center">
              <RiseOutlined style="color: #3dd26a" />
              <div style="color: #3dd26a; margin-left: 10px">{{ item }}</div>
              <div class="title-min" style="margin-left: 10px">Last Month</div>
            </div>
          </div>
          <div style="display: flex; align-items: center">
            <a-button
              type="primary"
              style="
                border-radius: 20px;
                background-color: #f9f9f9;
                border: #f9f9f9;
                color: #133364;
                font-weight: 700;
                font-size: 16px;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                margin-right: 20px;
                height: 45px;
                width: 120px;
              "
            >
              {{ index === 0 ? "Convert" : "Deposit" }}
            </a-button>
            <div
              style="
                background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.2),
                    rgba(0, 0, 0, 0.2)
                  ),
                  linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
                width: 120px;
                height: 45px;
                border-radius: 120px;
              "
            >
              <button class="us">
                {{ index === 0 ? "Transfer" : "Withdarw" }}
              </button>
            </div>
          </div>
          <div
            v-if="index === 0"
            style="height: 40px; width: 1px; background-color: #848484"
          ></div>
        </div>
      </div>
    </div>
    <div class="graph">
      <div class="graph-r">
        <div class="text-all">
          <div class="title-gr">Currency Trends Graph</div>
          <div class="text-bt">
            <div style="display: flex; align-items: center">
              <div
                style="
                  background: linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.2),
                      rgba(0, 0, 0, 0.2)
                    ),
                    linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
                  width: 80px;
                  height: 45px;
                  border-radius: 80px;
                "
              >
                <button class="us" style="width: 80px">ALL</button>
              </div>
              <a-button
                type="primary"
                style="
                  border-radius: 20px;
                  background-color: #f9f9f9;
                  border: #f9f9f9;
                  color: #133364;
                  font-weight: 600;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  margin-left: 20px;
                  width: 80px;
                  height: 45px;
                  border-radius: 80px;
                "
              >
                USD
              </a-button>
              <a-button
                type="primary"
                style="
                  border-radius: 20px;
                  background-color: #f9f9f9;
                  border: #f9f9f9;
                  color: #133364;
                  font-weight: 600;
                  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                  margin-left: 20px;
                  width: 80px;
                  height: 45px;
                  border-radius: 80px;
                "
              >
                JPY
              </a-button>
            </div>
            <div>
              <div
                style="
                  background: linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.2),
                      rgba(0, 0, 0, 0.2)
                    ),
                    linear-gradient(135.48deg, #133364 2.46%, #056cae 90.65%);
                  width: 200px;
                  height: 45px;
                  border-radius: 200px;
                "
              >
                <button class="us" style="width: 200px">
                  <PlusOutlined style="font-size: 18px" /> Currency Chart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="main" style="width: 100%; height: 400px"></div>
      </div>
      <div class="graph-l">
        <div class="text-all">
          <div class="title-gr">
            {{
              current[0] === "Currency"
                ? "Currency Trends Graph"
                : "Currency Balance"
            }}
          </div>
        </div>
        <div style="overflow: auto; height: 90%">
          <div class="item-l" v-for="(item, index) in 20" :key="item">
            <div style="display: flex; align-items: center">
              <img
                :src="imgList[index]"
                alt=""
                style="
                  width: 30px;
                  height: 30px;
                  border-radius: 30px;
                  margin-right: 10px;
                "
              />
              <div class="title" style="color: color: #707070">HKD</div>
              <div class="min-title" style="color: #707070; margin-left: 10px">
                1≈USD 0.128
              </div>
            </div>
            <div class="title" style="display: flex; align-items: center">
              <div>$</div>
              <div>100,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="graph-b" style="height: 400px">
      <a-table
        :columns="columns"
        :data-source="data"
        :pagination="false"
        :scroll="{ y: 280 }"
      >
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
            </span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { getAvailableData, onCreateConvert, onCreateTransfer , getHistoryData , getDeposit } from "@/api/exchange";
import { RiseOutlined, PlusOutlined } from "@ant-design/icons-vue";
const current = ref<any>(["Currency"]);
const imgList = ref<any>([
  "https://ts1.cn.mm.bing.net/th/id/R-C.8fa23c7b8315e28dd18d12297960344d?rik=l5j%2fjw9Nktl5dg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f07-16%2f88998%2fwater_88998_698_698_.png&ehk=U2F6rPjSZKX%2faOUfKSzWnbrYg8qyMM4ZhIjIUGOT3aI%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
  "https://ts4.cn.mm.bing.net/th?id=OIP-C.3jjFPiVddMntSKkTYEfCQgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://ts1.cn.mm.bing.net/th/id/R-C.f2cba17a2229603c6b88d9aa6a4ff6e7?rik=aCPvcjOgjmcksA&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2014%2f0724%2f0708zsucaijtdcb00299.jpg&ehk=5yoiHRETOKkNxcx7cU6WbYsDas3mxQ%2ffAz13MezqHw8%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
  "https://ts1.cn.mm.bing.net/th/id/R-C.8fa23c7b8315e28dd18d12297960344d?rik=l5j%2fjw9Nktl5dg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f07-16%2f88998%2fwater_88998_698_698_.png&ehk=U2F6rPjSZKX%2faOUfKSzWnbrYg8qyMM4ZhIjIUGOT3aI%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
  "https://ts4.cn.mm.bing.net/th?id=OIP-C.3jjFPiVddMntSKkTYEfCQgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://ts1.cn.mm.bing.net/th/id/R-C.f2cba17a2229603c6b88d9aa6a4ff6e7?rik=aCPvcjOgjmcksA&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2014%2f0724%2f0708zsucaijtdcb00299.jpg&ehk=5yoiHRETOKkNxcx7cU6WbYsDas3mxQ%2ffAz13MezqHw8%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
  "https://ts1.cn.mm.bing.net/th/id/R-C.8fa23c7b8315e28dd18d12297960344d?rik=l5j%2fjw9Nktl5dg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f07-16%2f88998%2fwater_88998_698_698_.png&ehk=U2F6rPjSZKX%2faOUfKSzWnbrYg8qyMM4ZhIjIUGOT3aI%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
  "https://ts4.cn.mm.bing.net/th?id=OIP-C.3jjFPiVddMntSKkTYEfCQgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://ts1.cn.mm.bing.net/th/id/R-C.f2cba17a2229603c6b88d9aa6a4ff6e7?rik=aCPvcjOgjmcksA&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2014%2f0724%2f0708zsucaijtdcb00299.jpg&ehk=5yoiHRETOKkNxcx7cU6WbYsDas3mxQ%2ffAz13MezqHw8%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
  "https://ts1.cn.mm.bing.net/th/id/R-C.8fa23c7b8315e28dd18d12297960344d?rik=l5j%2fjw9Nktl5dg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f07-16%2f88998%2fwater_88998_698_698_.png&ehk=U2F6rPjSZKX%2faOUfKSzWnbrYg8qyMM4ZhIjIUGOT3aI%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
  "https://ts4.cn.mm.bing.net/th?id=OIP-C.3jjFPiVddMntSKkTYEfCQgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  "https://ts1.cn.mm.bing.net/th/id/R-C.f2cba17a2229603c6b88d9aa6a4ff6e7?rik=aCPvcjOgjmcksA&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2014%2f0724%2f0708zsucaijtdcb00299.jpg&ehk=5yoiHRETOKkNxcx7cU6WbYsDas3mxQ%2ffAz13MezqHw8%3d&risl=&pid=ImgRaw&r=0",
  "https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png",
]);
const columns = ref<any>([
  {
    title: "Client ID",
    dataIndex: "iD",
    key: "iD",
  },
  {
    title: "Transaction deatils",
    dataIndex: "deatils",
    key: "deatils",
  },
  {
    title: "Transaction ID",
    dataIndex: "transactionid",
    key: "transactionid",
  },
  {
    title: "Date",
    key: "date",
    dataIndex: "date",
  },
  {
    title: "Merchant",
    key: "merchant",
    dataIndex: "merchant",
  },
  {
    title: "Currency",
    key: "currency",
    dataIndex: "currency",
  },
  {
    title: "Amount",
    key: "amount",
    dataIndex: "amount",
  },
  {
    title: "Status",
    key: "tatus",
    dataIndex: "status",
  },
]);

const data = ref<any>([
  {
    iD: "1",
    name: "John Brown",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "BTC",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
  {
    iD: "2",
    name: "Jim Green",
    date: "23.4.2023 16:15",
    deatils: "Cash With",
    transactionid: "098 765 432",
    merchant: "Merchant name",
    currency: "ETH",
    amount: 7000,
    status: 0,
  },
]);

const init = () => {
  const chartDom: any = document.getElementById("main");
  const myChart = echarts.init(chartDom);

  const option = {
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      data: [
        "Dec",
        "",
        "",
        "",
        "",
        "",
        "",
        "Jan",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Feb",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Apr",
        "",
        "",
        "",
        "",
        "",
        "",
        "Jun",
      ],
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
      },
    },
    yAxis: {},
    series: [
      {
        type: "candlestick",
        data: [
          [20, 34, 10, 18],
          [40, 35, 20, 20],
          [31, 38, 33, 34],
          [38, 15, 5, 42],
          [20, 34, 2, 18],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [20, 34, 10, 38],
          [40, 35, 30, 50],
          [31, 38, 33, 44],
          [38, 15, 5, 42],
        ],
      },
    ],
  };

  option && myChart.setOption(option);
};
const intData = async () => {
  const data = await getAvailableData({});
  console.log(data, "curr");
};
const initHistoryData = async() =>{
  const data = await getHistoryData({});
  console.log(data, "initHistoryData");
}
const onDeatils = (item: any) => {
  console.log(item, "item");
};
const onCreateTransferData = async () => {
  /*
    { 
        "beneficiary": {
          "additional_info": {
            "personal_email": "john.walker@gmail.com"
          },
          "address": {
            "city": "Seattle",
            "country_code": "US",
            "postcode": "98104",
            "state": "Washington",
            "street_address": "412 5th Avenue"
          },
          "bank_details": {
            "account_currency": "USD",
            "account_name": "John Walker",
            "account_number": "50001121",
            "account_routing_type1": "aba",
            "account_routing_value1": "021000021",
            "bank_country_code": "US",
            "local_clearing_system": "ACH"
          },
          "company_name": "ABC University",
          "entity_type": "COMPANY"
        },
        "payment_amount": "50",
        "payment_currency": "USD",
        "payment_method": "LOCAL",
        "quote_id": "string",
        "reason": "travel",
        "reference": "PMT1936398",
        "request_id": "c02d2e3c-dedd-410b-a1cc-9b7e58444fa2",
        "source_currency": "CNY"
    }
  */
  const pramas= {
    beneficiary_id: "9a45987e-cffc-4f0a-81d7-82e80f0ce336",
     payment_amount: "50",
    payment_currency: "USD",
    payment_method: "LOCAL",
    quote_id: "string",
    reason: "travel",
    reference: "PMT1936398",
    request_id: "c02d2e3c-dedd-410b-a1cc-9b7e58444fa2",
   source_currency: "CNY"
  }
  const data = await onCreateTransfer(pramas)
    console.log(data, "onCreateTransferData");
}

const onCreateConvertData = async () => {
  const pramas = {
    buy_amount: "10000",
    buy_currency: "USD",
    client_data: "string",
    reason: "Settling invoices",
    request_id: "67f687fe-dcf4-4462-92fa-203353a01d9d96",
    sell_currency: "AUD",
    settlement_date: "2018-12-11",
    term_agreement: true,
  };
  const data = await onCreateConvert(pramas);
  console.log(data, "onCreateConvertData");
};
const getDepositData = async () => {
  const data = await getDeposit({})
   console.log(data, "getDepositData");
}
onMounted(async () => {
  init();
  // await intData();
  // await initHistoryData();
  // await getDepositData()
});
</script>
<style lang="less">
.curr {
  display: flex;
  flex-direction: column;
  height: 100%;
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
    width: 120px;
    height: 45px;
    border: none;
    text-align: center;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .header-all {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .header {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    .item {
      flex: 1;
      width: 20%;
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      .right {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }
      .left {
        width: calc(100% - 80px);
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 20px;
      }
    }
  }
  .graph {
    margin-top: 20px;
    width: 100%;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .graph-r {
      flex: 7;
      height: 550px;
      background-color: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      margin-right: 20px;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
    .text-all {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: left;

      .title-gr {
        border-bottom: 1px solid #c4c4c4;
        color: #133364;
        font-size: 16px;
        font-weight: 600;
        height: 35px;
      }
      .text-bt {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .graph-l {
      padding: 20px;
      flex: 3;
      height: 550px;
      background-color: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      .item-l {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        border-bottom: 1px solid #c4c4c4;
      }
    }
  }
  .graph-b {
    margin-top: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #ffffff;
    border-radius: 10px;
    padding: 10px;
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
.title {
  font-size: 18px;
  font-weight: bold;
}
.title-min {
  font-size: 14px;
  color: #cecece;
}
</style>
<style lang="less">
.curr {
  .ant-table-thead {
    .ant-table-cell {
      font-size: 16px;
      font-weight: 600;
      color: #0b3c69 !important;
    }
  }
  .ant-menu-title-content {
    display: flex;
    font-family: "Open Sans";
    min-width: 120px;
  }
  .ant-menu-item .ant-menu-item-icon + span,
  .ant-menu-submenu-title .ant-menu-item-icon + span,
  .ant-menu-item .anticon + span,
  .ant-menu-submenu-title .anticon + span {
    margin-left: 0px !important;
  }
  .ant-menu-horizontal > .ant-menu-item::after,
  .ant-menu-horizontal > .ant-menu-submenu::after {
    left: 0px !important;
  }
}
</style>

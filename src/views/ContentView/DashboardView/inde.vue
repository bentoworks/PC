<template>
  <div class="dash">
    <div class="rtitle">{{ route.meta.title }}</div>
    <div style="display: flex;height: calc(100% - 43px);">
      <div class="header-item" v-if="isShow">
        <div style="width: 100%;display: flex;justify-content: space-between; align-items: center;height: 400px;">
          <div id="min-main" style="
          width: 48%;
          height: 100%;
          background-color: #ffffff;
          border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        "></div>
          <div style="
          width: 48%;
          height: 100%;
          background-color: #ffffff;
          border-radius: 5px;
          padding: 10px 20px ;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        ">
            <div
              style="display: flex;align-items: center;justify-content: space-between;height: 40px;line-height: 40px;border-bottom: 1px solid #C4C4C4;">
              <div class="rltitle">Bank Account</div>
              <div style="color: #056CAE;">Total Balance</div>
            </div>
            <div style="display: flex;flex-direction: column;overflow-y: auto;height:320px;">
              <div
                style="width:92%;display: flex;align-items: center;justify-content: space-between;border-bottom: 1px solid #C4C4C4;padding: 5px;"
                v-for="(item,index) in mssageList" :key="index">
                <div style="">
                  <img :src="imgList[index]" alt=""
                    style="width: 50px; height: 50px;border-radius: 50px;" />
                </div>
                <div style="text-indent: 20px;flex: 8;">
                  <div style="display: flex;align-items: center;">
                    <div class="title">{{ item.title }}</div>
                    <div class="title-min">({{ item.minTile }})</div>
                  </div>
                  <div class="title">{{ item.acout }}</div>
                  <div class="title-min">{{ item.updated }}</div>
                </div>
                <div >
                  <div class="title" style="text-align: right;">${{ item.pay }}</div>
                </div>
              </div>

            </div>

          </div>
        </div>


        <div class="content">
          <div class="table">
            <a-space align="center" style="margin-bottom: 16px"> </a-space>
            <a-table  :scroll="{ y: 500 }" :columns="columns" :data-source="data" :pagination=false  >
              <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'status'">
                <div v-if="record.status === 0" style="color:#FF9254">Pending</div>
                <div v-else style="color:#3dd26a">Success</div>
              </template>
            </template>
            </a-table>
          </div>
        </div>
      </div>
      <div class="header-r-item" v-if="isShow">
        <div class="show-item" style="height: 400px; margin-bottom: 20px">
          <div class="show " v-for="item in 4" :key="item">
            <div class="right">
              <div class="title-min" style="height: 32px;">Accest</div>
              <div class="title" style="display: flex; align-items: center;height: 35px">
                $
                <div class="title">1,285,256</div>
              </div>
              <div style="display: flex; align-items: center;height: 25px">
                <RiseOutlined style="color: #3dd26a" />
                <div style="color: #3dd26a; margin-left: 10px">{{ item }}</div>
                <div class="title-min" style="margin-left: 10px">Last Month</div>
              </div>
            </div>
          </div>
        </div>

        <div class="geo" >
          <div style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-right: 20px;
            padding-bottom: 20px;
          ">
            <div style="display: flex; align-items: center">
              <div class="title">Gender</div>
              <div class="title-min" style="margin-left: 10px">Geographic</div>
            </div>
            <div class="title-min" style="margin-left: 10px">
              <a-button type="primary" v-if="!iSopen" @click="initBirCharts1" style="
                border-radius: 20px;
                background-color: #133364;
                border: #133364;
                color: white;
                font-weight: 600;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
                height: 35px;
              ">
                open global account
              </a-button>
            </div>
          </div>
          <div id="b-bir" style="width: 100%; height: 200px;"></div>
          <div style="overflow: auto; padding-right: 10px; height: 60%">
            <div class="item" v-for="item in markList" :key="item">
              <div class="item-header">
                <div style="display: flex;align-items: center;">
                  <div v-if="item.value === 1" style="width: 8px;height: 8px;border-radius: 8px;background-color: #900C3F ;margin-right: 15px;"></div>
                  <div v-else style="width: 8px;height: 8px;border-radius: 8px;background-color: #F8CA0B ;margin-right: 15px;"></div>
                  <div class="title">{{ item.title }}</div>
                </div>
                <div class="title-mid">{{ item.pay }}k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import { RiseOutlined } from "@ant-design/icons-vue";
import { ref, onMounted, nextTick } from "vue";
import * as echarts from "echarts";
import { useRoute } from 'vue-router'
import { onGetAccountsList } from '@/api/dash'
const route = useRoute();
const isShow = ref<any>(true);
const myChart1 = ref<any>(null);
const myChart2 = ref<any>(null);
const markList = ref<any>([
  {
    value:1,
    title:'Asla',
    pay:8.2
  },
  {
    value:2,
    title:'Europe',
    pay:8.2
  },
  {
    value:3,
    title:'Northern',
    pay:8.2
  }
]);
const imgList = ref<any>(['https://ts1.cn.mm.bing.net/th/id/R-C.8fa23c7b8315e28dd18d12297960344d?rik=l5j%2fjw9Nktl5dg&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fpic%2fw%2f2020%2f07-16%2f88998%2fwater_88998_698_698_.png&ehk=U2F6rPjSZKX%2faOUfKSzWnbrYg8qyMM4ZhIjIUGOT3aI%3d&risl=&pid=ImgRaw&r=0',
'https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png','https://ts4.cn.mm.bing.net/th?id=OIP-C.3jjFPiVddMntSKkTYEfCQgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2','https://ts1.cn.mm.bing.net/th/id/R-C.f2cba17a2229603c6b88d9aa6a4ff6e7?rik=aCPvcjOgjmcksA&riu=http%3a%2f%2fpic.zsucai.com%2ffiles%2f2014%2f0724%2f0708zsucaijtdcb00299.jpg&ehk=5yoiHRETOKkNxcx7cU6WbYsDas3mxQ%2ffAz13MezqHw8%3d&risl=&pid=ImgRaw&r=0',
'https://www.abysse.co.jp/flags/wp-content/uploads/2019/09/hk.png'])

const iSopen = ref<any>(false);
const mssageList = ref<any>([
  {
    title:'Standard',
    minTile:'Business',
    pay:'100',
    acout:'024******',
    updated : '2023-7-17 (19:19:05 )'
  },
  {
    title:'American',
    minTile:'Business',
    pay:'100',
    acout:'017******',
    updated : '2023-7-17 (19:19:05 )'
  },
  {
    title:'HSBC ',
    minTile:'Business',
    pay:'100',
    acout:'024******',
    updated : '2023-7-17 (19:19:05 )'
  },
  {
    title:'HSBC ',
    minTile:'Business',
    pay:'100',
    acout:'024******',
    updated : '2023-7-17 (19:19:05 )'
  }
  ,
  {
    title:'HSBC ',
    minTile:'Business',
    pay:'100',
    acout:'024******',
    updated : '2023-7-17 (19:19:05 )'
  }
])
const rowSelection = ref({
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record: any, selected: boolean, selectedRows: any) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: boolean, selectedRows: any, changeRows: any) => {
    console.log(selected, selectedRows, changeRows);
  },
});
const data = ref<any>([
  {
    id: "1",
    name: "Cash",
    clien: "jenny",
    status: 0,
    time: '2022-10-21 08:09:10',
    approve: false
  },
  {
    id: "2",
    name: "Cash",
    clien: "jenny",
    status: 1,
    time: '2022-10-21 08:09:10',
    approve: true
  }, {
    id: "3",
    name: "Cash",
    clien: "jenny",
    status: 0,
    time: '2022-10-21 08:09:10',
    approve: false
  },
  {
    id: "4",
    name: "Cash",
    clien: "jenny",
    status: 1,
    time: '2022-10-21 08:09:10',
    approve: true
  },
  {
    id: "5",
    name: "Cash",
    clien: "jenny",
    status: 0,
    time: '2022-10-21 08:09:10',
    approve: false
  },
  {
    id: "6",
    name: "Cash",
    clien: "jenny",
    status: 1,
    time: '2022-10-21 08:09:10',
    approve: true
  },
  {
    id: "7",
    name: "Cash",
    clien: "jenny",
    status: 0,
    time: '2022-10-21 08:09:10',
    approve: false
  },
  {
    id: "8",
    name: "Cash",
    clien: "jenny",
    status: 1,
    time: '2022-10-21 08:09:10',
    approve: true
  },
  {
    id: "9",
    name: "Cash",
    clien: "jenny",
    status: 0,
    time: '2022-10-21 08:09:10',
    approve: false
  },
  {
    id: "10",
    name: "Cash",
    clien: "jenny",
    status: 1,
    time: '2022-10-21 08:09:10',
    approve: true
  },
  {
    id: "11",
    name: "Cash",
    clien: "jenny",
    status: 0,
    time: '2022-10-21 08:09:10',
    approve: false
  },
  {
    id: "12",
    name: "Cash",
    clien: "jenny",
    status: 1,
    time: '2022-10-21 08:09:10',
    approve: true
  },
  
]);

const columns = ref<any>([
  {
    title: "Type",
    dataIndex: "name",
    key: "name",
    className: 'cell'
  },
  {
    title: "Clien",
    dataIndex: "clien",
    key: "clien",
    className: 'cell'
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    className: 'cell'
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    className: 'cell'
  },
  {
    title: "Date/time",
    dataIndex: "time",
    key: "time",
    className: 'cell'
  },
  {
    title: "Approve",
    dataIndex: "approve",
    key: "approve",
    className: 'cell'
  },
]);


const initCateCharts = () => {
  const chartDom: any = document.getElementById("min-main");
  const myChart = echarts.init(chartDom);
  const option = {
    title: {
      text: 'Cash flow',
      aligin: 'left',
      textStyle: {
        color: '#133364'

      },
      top: '5%',
      left: '2%'
    },
    grid: {
      left: "2%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    legend: {
      icon: 'circle',
      top: '5%',
      right: '5%'
    },
    tooltip: {},
    dataset: {
      source: [
        ["product", "Info", "Outflow"],
        ["Dec", 43.3, 85.8],
        ["Jan", 83.1, 73.4],
        ["Feb", 86.4, 65.2],
        ["Mar", 72.4, 53.9],
        ["Apr", 83.1, 73.4],
        ["May", 86.4, 65.2],
        ["Jun", 72.4, 53.9],
      ],
    },
    xAxis: {
      type: "category", axisTick: {
        show: false
      }
    },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{ type: "bar", itemStyle: { color: '#74D7A2', barBorderRadius: [5, 5, 0, 0] }, barWidth: '25%' }, { type: "bar", itemStyle: { color: '#FF4C71', barBorderRadius: [5, 5, 0, 0] }, barWidth: '25%', }],
  };
  option && myChart.setOption(option);
};

const initBirCharts1 = () => {
  iSopen.value = !iSopen.value
  const chartDom: any = document.getElementById("b-bir");
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {

    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ["45", '65%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1548 },
          { value: 1000 },
          { value: 1200, selected: true }
        ]
      },
      {
        name: 'Access From',
        type: 'pie',
        radius: ['70%', '100%'],
        labelLine: {
          length: 0,
          show: false
        },
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
          { value: 335 },
          { value: 335 },
          { value: 310 },
          { value: 251 },
          { value: 234 },
          { value: 147 },
          { value: 135 },
          { value: 102 }
        ]
      }
    ]
  }
  option && myChart.setOption(option, true);

};
const initBirCharts = () => {
  const chartDom: any = document.getElementById("b-bir");
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {

    },
    series: [
      {
        name: '',
        type: 'pie',
        radius: ["45", '65%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
       
        ]
      },
      {
        name: '',
        type: 'pie',
        radius: ['70%', '100%'],
        labelLine: {
          length: 0,
          show: false
        },
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2
        },
        data: [
        
        ]
      }
    ]
  }
  option && myChart.setOption(option, true);

};
const onGetAccountsListData = async () => {
  const pramas= {
    country_code: "US",
    currency: "USD",
    nick_name: "USD Account in US for Subsidiary Company ABC",
    payment_methods: [
      "LOCAL"
    ],
    request_id: "7f687fe6-dcf4-4462-92fa-80335301d9d2"
  }
  const data = await onGetAccountsList(pramas)
  console.log(data,'onGetAccountsListData');
 
}

onMounted(() => {
  nextTick(() => {
    initCateCharts();
    initBirCharts();
  })
});

</script>
<style lang="less" >
.ant-table-thead {
  .cell {
    text-align: left;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 33px;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135.48deg, #133364 2.46%, #056CAE 90.65%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
}


.rltitle {
  text-align: left;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 33px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(135.48deg, #133364 2.46%, #056CAE 90.65%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

}
</style>
<style lang="less" scoped>
.dash {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;

  .header-item {
    padding-right: 20px;
    flex: 7;
    height: 95%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .header {
      display: flex;
      justify-content: space-between;
      height: 10%;

      .item {
        cursor: pointer;
        width: 23%;
        background-color: #ffffff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
     
        .left {
          .img {
            width: 80px;
            height: 80px;
            border-radius: 80px;
          }
        }

        .right {
          width: calc(100% - 80px);
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          padding-left: 20px;

          .title {
            font-size: 16px;
            font-weight: bold;
          }

          .title-min {
            font-size: 14px;
            color: #cecece;
          }
        }
      }
    }

    .content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      height: 78%;

      .table {
        flex: 7;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        border-radius: 10px;
        padding: 10px;

      }

    }
  }

  .header-r-item {
    flex: 3;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .show-item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .show {
        width: 48%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #ffffff;
        border-radius: 10px;
        margin-bottom: 15px;
        padding: 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
      }
    }

    .geo {
      flex: 2;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      background-color: #ffffff;
      border-radius: 10px;
      padding: 20px;

      .item {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #cecece;
        padding-bottom: 10px;
        padding-left: 30px;
        padding-right: 20px;

        .item-header {
          padding: 10px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }

  .title {
    text-align: left;
    font-size: 15px;
    font-weight: bold;
  }

  .title-min {
    text-align: left;
    font-size: 14px;
    color: #cecece;
  }

  .title-mid {
    text-align: left;
    font-size: 16px;
    color: #707070;
  }


}</style>

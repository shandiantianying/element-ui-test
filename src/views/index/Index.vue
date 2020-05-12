<template>
  <div class="echartbg">
    <div id="pie1" :style="{width: '300px', height: '300px'}"></div>
    <div id="pie2" :style="{width: '300px', height: '300px'}"></div>
    <div id="pie3" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>
<script>
import api from "@/network/api";
import { request } from "@/network/index";
import { ztbzdata, qyndata, qyydata } from "@/data/publicData";
export default {
  name: "Index",
  data() {
    return {
      pieCharts2: {},
      incomeAndTaxdata: []
    };
  },
  mounted() {
    this.drawLine1();
    this.drawLine2();
    this.drawLine3();
  },
  methods: {
    chartClick(param) {
      console.log("chartClick.........");

      console.log(param);
      this.$router.replace({ name: param.seriesName });
    },
    drawLine3() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("pie3"));
      let params = {};
      this.isShowLoading = true;
      request({
        url: api.carryOverDeclarData,
        method: "POST",
        data: params
      })
        .then(res => {
          this.incomeAndTaxdata = res.data;

          // 绘制图表
          myChart.setOption({
            title: {
              text: "账套数据" // 标题组件，设置图表标题
            },

            series: [
              // 系列列表 ，里面每个对象通过 type 决定自己额图表类型
              {
                name: "tdsenddeclare", // 系列名称
                type: "pie", // 通过设置这个值来控制图表是扇形图
                radius: ["0%", "55%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径

                data: res.data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  },
                  normal: {
                    label: {
                      show: true,
                      formatter: "{b} : {c} ({d}%)"
                    },
                    labelLine: { show: true }
                  }
                }
              }
            ]
          });
        })
        .catch(res => {
          // this.isShowLoading = false;
          // this.$Message.error("您的网络连接异常，请稍候再试！");
        });
    },
    drawLine2() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("pie2"));
      let params = {};
      this.isShowLoading = true;
      request({
        url: api.voucherData,
        method: "POST",
        data: params
      })
        .then(res => {
          this.incomeAndTaxdata = res.data;

          // 绘制图表
          myChart.setOption({
            title: {
              text: "凭证数据" // 标题组件，设置图表标题
            },

            series: [
              // 系列列表 ，里面每个对象通过 type 决定自己额图表类型
              {
                name: "tdsenddeclare", // 系列名称
                type: "pie", // 通过设置这个值来控制图表是扇形图
                radius: ["0%", "55%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径

                data: res.data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  },
                  normal: {
                    label: {
                      show: true,
                      formatter: "{b} : {c} ({d}%)"
                    },
                    labelLine: { show: true }
                  }
                }
              }
            ]
          });
        })
        .catch(res => {
          // this.isShowLoading = false;
          // this.$Message.error("您的网络连接异常，请稍候再试！");
        });
    },
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("pie1"));
      let params = {};
      this.isShowLoading = true;
      request({
        url: api.accountbooksdata,
        method: "POST",
        data: params
      })
        .then(res => {
          this.incomeAndTaxdata = res.data;

          // 绘制图表
          myChart.setOption({
            title: {
              text: "账套数据" // 标题组件，设置图表标题
            },

            series: [
              // 系列列表 ，里面每个对象通过 type 决定自己额图表类型
              {
                name: "tdsenddeclare", // 系列名称
                type: "pie", // 通过设置这个值来控制图表是扇形图
                radius: ["0%", "55%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径

                data: res.data,
                itemStyle: {
                  emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: "rgba(0, 0, 0, 0.5)"
                  },
                  normal: {
                    label: {
                      show: true,
                      formatter: "{b} : {c} ({d}%)"
                    },
                    labelLine: { show: true }
                  }
                }
              }
            ]
          });
        })
        .catch(res => {
          // this.isShowLoading = false;
          // this.$Message.error("您的网络连接异常，请稍候再试！");
        });
    }
  }
};
</script>
<style lang="less">
.echartbg{
  display: flex;
}
// #pie1{
//   width: 50%;
//   height: 400px;
// }
// #pie2{
//   width: 50%;
//   height: 400px;
// }
// #pie3{
//   width: 50%;
//   height: 400px;
// }
</style>

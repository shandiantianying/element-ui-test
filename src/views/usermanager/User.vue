<template>
  <div>
    <div id="chart-panel"></div>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  },
  mounted() {
    var myChart = this.$echarts.init(document.getElementById("chart-panel"));
    function randomData() {
      return Math.round(Math.random() * 510); //round取整
    }
    var mydata = [
      { name: "北京", value: "100" },
      { name: "天津", value: randomData() },
      { name: "上海", value: randomData() },
      { name: "重庆", value: randomData() },
      { name: "河北", value: randomData() },
      { name: "河南", value: randomData() },
      { name: "云南", value: randomData() },
      { name: "辽宁", value: randomData() },
      { name: "黑龙江", value: randomData() },
      { name: "湖南", value: randomData() },
      { name: "安徽", value: randomData() },
      { name: "山东", value: randomData() },
      { name: "新疆", value: randomData() },
      { name: "江苏", value: randomData() },
      { name: "浙江", value: randomData() },
      { name: "江西", value: randomData() },
      { name: "湖北", value: randomData() },
      { name: "广西", value: randomData() },
      { name: "甘肃", value: randomData() },
      { name: "山西", value: randomData() },
      { name: "内蒙古", value: randomData() },
      { name: "陕西", value: randomData() },
      { name: "吉林", value: randomData() },
      { name: "福建", value: randomData() },
      { name: "贵州", value: randomData() },
      { name: "广东", value: randomData() },
      { name: "青海", value: randomData() },
      { name: "西藏", value: randomData() },
      { name: "四川", value: randomData() },
      { name: "宁夏", value: randomData() },
      { name: "海南", value: randomData() },
      { name: "台湾", value: randomData() },
      { name: "香港", value: randomData() },
      { name: "澳门", value: randomData() }
    ];
    var option = {
      title: {
        text: "iphone销量",
        subtext: "纯属虚构",
        left: "center"
      },
      tooltip: {
        trigger: "item"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: ["iphone"]
      },
      visualMap: {
        min: 0,
        max: 2500,
        left: "left",
        top: "bottom",
        text: ["高", "低"], // 文本，默认为数值文本
        calculable: true
      },
      toolbox: {
        show: true,
        orient: "vertical",
        left: "right",
        top: "center",
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: "iphone",
          type: "map",
          mapType: "china",
          roam: false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { name: "北京", value: Math.round(Math.random() * 1000) },
            { name: "天津", value: Math.round(Math.random() * 1000) },
            { name: "上海", value: Math.round(Math.random() * 1000) },
            { name: "重庆", value: Math.round(Math.random() * 1000) },
            { name: "河北", value: Math.round(Math.random() * 1000) },
            { name: "河南", value: Math.round(Math.random() * 1000) },
            { name: "云南", value: Math.round(Math.random() * 1000) },
            { name: "辽宁", value: Math.round(Math.random() * 1000) },
            { name: "黑龙江", value: Math.round(Math.random() * 1000) },
            { name: "湖南", value: Math.round(Math.random() * 1000) },
            { name: "安徽", value: Math.round(Math.random() * 1000) },
            { name: "山东", value: Math.round(Math.random() * 1000) },
            { name: "新疆", value: Math.round(Math.random() * 1000) },
            { name: "江苏", value: Math.round(Math.random() * 1000) },
            { name: "浙江", value: Math.round(Math.random() * 1000) },
            { name: "江西", value: Math.round(Math.random() * 1000) },
            { name: "湖北", value: Math.round(Math.random() * 1000) },
            { name: "广西", value: Math.round(Math.random() * 1000) },
            { name: "甘肃", value: Math.round(Math.random() * 1000) },
            { name: "山西", value: Math.round(Math.random() * 1000) },
            { name: "内蒙古", value: Math.round(Math.random() * 1000) },
            { name: "陕西", value: Math.round(Math.random() * 1000) },
            { name: "吉林", value: Math.round(Math.random() * 1000) },
            { name: "福建", value: Math.round(Math.random() * 1000) },
            { name: "贵州", value: Math.round(Math.random() * 1000) },
            { name: "广东", value: Math.round(Math.random() * 1000) },
            { name: "青海", value: Math.round(Math.random() * 1000) },
            { name: "西藏", value: Math.round(Math.random() * 1000) },
            { name: "四川", value: Math.round(Math.random() * 1000) },
            { name: "宁夏", value: Math.round(Math.random() * 1000) },
            { name: "海南", value: Math.round(Math.random() * 1000) },
            { name: "台湾", value: Math.round(Math.random() * 1000) },
            { name: "香港", value: Math.round(Math.random() * 1000) },
            { name: "澳门", value: Math.round(Math.random() * 1000) }
          ]
        }
      ]
    };
    // @3 固定步骤
    myChart.setOption(option);
    // 动态显示tooptip，每隔3秒去提示
  }
};
</script>
<style>
#chart-panel {
  width: 600px;
  height: 400px;
}
</style>
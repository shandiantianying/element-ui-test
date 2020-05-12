<template>
  <div>
    <el-breadcrumb separator="/" class="brdcmb">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>凭证管理</el-breadcrumb-item>
      <el-breadcrumb-item>凭证查询</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
      <el-form :inline="true" :model="formValidate" :label-position="labelPosition">
        <el-row :gutter="2">
          <el-col :span="8">
            <el-form-item label="社会信用代码" label-width="100px">
              <el-input v-model="formValidate.shxydm" placeholder="社会信用代码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="单位名称">
              <el-input v-model="formValidate.dwmc" placeholder="单位名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="处理状态">
              <el-select v-model="formValidate.ztbz" placeholder>
                <el-option
                  :label="item.desp"
                  :value="item.value"
                  v-for="item in ztbzD"
                  :key="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="2">
          <el-col :span="8">
            <el-form-item label="日期起" label-width="100px">
              <el-date-picker
                v-model="formValidate.pzrqq"
                align="right"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="日期止">
              <el-date-picker
                v-model="formValidate.pzrqz"
                align="right"
                type="date"
                placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
              <el-button type="info" @click="onReset">重置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <el-table :data="tableData" style="width: 100%" border stripe v-loading="loading">
        <!-- <el-table-column type="index"></el-table-column> -->
        <el-table-column prop="shxydm" label="社会信用代码" width="190"></el-table-column>
        <el-table-column prop="dwmc" label="单位名称" width="200"></el-table-column>
        <el-table-column prop="pzrq" label="日期"></el-table-column>
        <el-table-column label="类型" width="60">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.pzlx==0" type="success">记</el-tag>
            <el-tag v-if="scope.row.pzlx==1" type="success">借</el-tag>
            <el-tag v-if="scope.row.pzlx==2" type="success">付</el-tag>
            <el-tag v-if="scope.row.pzlx==3" type="success">转</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="pzzh" label="序号" width="50"></el-table-column>
        <el-table-column prop="cjsj" label="创建时间"></el-table-column>
        <el-table-column prop="zhgxsj" label="更新时间"></el-table-column>
        <el-table-column prop="state" label="状态" width="70">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.ztbz"
              active-color="#999"
              inactive-color="#13ce66"
              :active-value="0"
              :inactive-value="1"
            ></el-switch>
            <!-- <el-tag type="success">{{scope.row.ztbz}}</el-tag> -->
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="editAccount(`${scope.row.pzid}`)"
            ></el-button>
            <el-tooltip content="查看返回详情" placement="top">
              <el-button
                type="primary"
                icon="el-icon-share"
                size="mini"
                @click="queryDesp(`${scope.row.fhxx}`)"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[10,20,50,100]"
        :page-size="queryInfo.pagesize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="total"
      ></el-pagination>
    </el-card>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <span>{{fhxx}}</span>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import api from "@/network/api";
import { request } from "@/network/index";
import { ztbzdata, qyndata, qyydata } from "@/data/publicData";
export default {
  name: "VouchQuery",
  data() {
    return {
      labelPosition: "right",
      dialogVisible: false,
      fhxx: "",
      total: 5,
      queryInfo: {
        pagenum: 1,
        pagesize: 10
      },
      formValidate: {
        shxydm: "",
        dwmc: "",
        pzrqq: "",
        pzrqz: "",
        ztbz: "0"
      },
      input: "",
      tableData: [],
      ztbzD: [],
      qynD: [],
      qyyD: [],
      loading: false
    };
  },
  created() {
    this.ztbzD = ztbzdata;
    this.qynD = qyndata;
    this.qyyD = qyydata;
    // this.getDatalist();
  },

  methods: {
    editAccount(ztid) {
      console.log(ztid);
    },
    queryDesp(fhxx) {
      this.fhxx = fhxx;
      this.dialogVisible = true;
    },
    onSubmit() {
      this.getDatalist();
    },
    onReset() {
      this.formValidate.shxydm = "";
      this.formValidate.dwmc = "";
      this.formValidate.pzrqq = "";
      this.formValidate.pzrqz = "";
      this.formValidate.ztbz = "0";
    },
    getDatalist() {
      this.loading = true;
      let params = {};
      params = this.formValidate;
      console.log(params);
      request({
        url:
          "/new/vchs?pageNum=" +
          this.queryInfo.pagenum +
          "&pageSize=" +
          this.queryInfo.pagesize,
        //  url: api.voucherMangerData
        //   .replace("PAGENUM", this.queryInfo.pagenum)
        //   .replace("PAGESIZE", this.queryInfo.pagesize),
        method: "POST",
        data: params
      })
        .then(res => {
          this.loading = false;
          console.log(res);
          this.tableData = res.data.pageInfo.list;
          this.total = res.data.pageInfo.total;
          if (this.total === 0) {
            this.$message({
              message: "查无数据！",
              type: "waring"
            });
          }
        })
        .catch(res => {
          this.loading = false;
          this.$message({
            message: "您的网络连接异常，请稍候再试！",
            type: "error"
          });
        });
    },

    //监听pagesize改变的事件
    handleSizeChange(val) {
      console.log(val);
      this.queryInfo.pagesize = val;
      this.getDatalist();
    },
    //监听页码值 改变事件
    handleCurrentChange(newpage) {
      this.queryInfo.pagenum = newpage;
      this.getDatalist();
    }
  }
};
</script>
<style lang="less">
.el-form-item__content {
  width: 180px;
}
</style>


<template>
  <div class="container">
    <div class="logindiv">
      <div class="loginfrom">
        <div class="icondiv">
          <img src="../assets/logo.png" />
        </div>
        <div class="loginformdiv">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="0px"
            class="demo-ruleForm"
          >
            <el-form-item class="usernameinput" prop="username">
              <el-input type="text" v-model="ruleForm.username" prefix-icon="el-icon-user"></el-input>
            </el-form-item>

            <el-form-item class="passwordinput" prop="password">
              <el-input type="password" v-model="ruleForm.password" prefix-icon="el-icon-key"></el-input>
            </el-form-item>

            <el-form-item class="submitdiv">
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <!-- <div class="text1">
      <Ul>
        <li v-for="(item,index) in tabArr" :key="index" :class='activeIndex==index?"hd":""'>
          <a @click="tabChange(index,item)" href="#">{{item.categoryName}}</a>
        </li>
      </Ul>
    </div> -->
  </div>
</template>
<script>
import api from "@/network/api";
import { request } from "@/network/index";
export default {
  data() {
    return {
      activeIndex: 0,
      tabArr: [
        { categoryName: "发票", path: "invoice" },
        { categoryName: "记账", path: "keepaccount" },
        { categoryName: "申报", path: "declare" },
        { categoryName: "汇算清缴", path: "final" },
        { categoryName: "网上办税", path: "onlineTax" },
        { categoryName: "风险检测", path: "riskCheck" },
        { categoryName: "工具箱", path: "tools" }
      ],
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空！", trigger: "blur" },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码不能为空！", trigger: "blur" },
          { min: 3, max: 30, message: "长度在 3 到 30 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    tabChange(index, item) {
      this.activeIndex = index;
      // this.$router.push({ path: "/" + item.path });
    },
    resetForm(formName) {
      console.log("1111");
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {

        request({
        url: "/dologin?username="+this.ruleForm.username+'&password='+this.ruleForm.password,
        method: "POST",
        data: this.ruleForm
      })
        .then(res => {
          this.loading = false;
          console.log(res.data.code);
        if( res.data.code === '2000'){
          this.$message({
            message: "登录成功！",
            type: "success",
            duration: 1000
          });
          this.$router.push({ path: "/home" });
          } else {
              this.$message({
                      message: "用户名密码错误，请重新输入！",
                      type: "error",
                      duration: 1000
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

        } else {
          this.$message({
            message: "检验不通过！",
            type: "error"
          });
          return false;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.text1 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #0682f2;
}

ul {
  display: flex;
  overflow: hidden;
}

li {
  list-style: none;
  position: relative;
  margin: 0px 10px;
}

li a {
  text-decoration: none;
  color: #fff;
}

li a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-bottom-color: #fff;
  top: 66%;
  left: 20%;
  transform: rotate(90deg);
  transform-origin: left bottom;
}
li a:hover:after {
  transform: rotate(0deg);
  transform-origin: left bottom;
}
.hd a::after {
  transform: rotate(0deg);
  transform-origin: left bottom;
}
.loginformdiv:hover {
  // background-color:rgb(0,0,0);
  border-radius: 40%;
}
.usernameinput {
  margin: 10px 8px;
}
.passwordinput {
  margin: 20px 8px;
}
.submitdiv {
  margin-top: 20px;
  text-align: right;
  padding-right: 30px;
}
.container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
}
.loginformdiv {
  //   background-color: #222;
  margin-top: 100px;
}

.logindiv {
  width: 300px;
  height: 300px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loginfrom {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.icondiv {
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: #ffffff;
  left: 50%;
  transform: translate(-50%);
  top: -30px;
  border-radius: 50%;
  border: rgb(151, 140, 151) 1px solid;
  img {
    width: 80px;
    height: 80px;
    margin: 10px;
    border-radius: 50%;
    border: rgb(151, 140, 151) 1px solid;
  }
}
</style>
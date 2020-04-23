
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
  </div>
</template>
<script>
export default {
  data() {
    return {
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
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    resetForm(formName) {
      console.log("1111");
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功！",
            type: "success",
            duration:1000
          });
          this.$router.push({path:'/home'})
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
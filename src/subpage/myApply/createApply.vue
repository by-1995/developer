<template>
  <div>
    <div class="reg-form">
      <el-form
        :model="appInfoRuleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="reg-ruleForm"
        size="medium"
      >
        <!-- 应用名称 -->
        <el-form-item label="应用名称:" prop="name">
          <el-input v-model="appInfoRuleForm.name"></el-input>
        </el-form-item>
        <!-- 代号 -->
        <el-form-item label="代号(code):" prop="code">
          <el-input v-model="appInfoRuleForm.code"></el-input>
        </el-form-item>
        <!-- 有效期 -->
        <el-form-item style="color: #666;" label="有效期:" prop="expireTime">
          <el-input
            v-model="appInfoRuleForm.expireTime"
            style="padding-right: 5px"
            type="number"
            max="60"
            min="1"
          ></el-input>秒
        </el-form-item>
        <!-- 彩管家安全域名 -->
        <el-form-item label="彩管家安全域名:" prop="cgjDomain">
          <el-form
            :model="appInfoRuleForm.cgjDomain"
            ref="cgjDomain"
            label-width="100px"
            class="cgjForm"
            size="medium"
          >
            <el-form-item
              class="cgjFormItem"
              v-for="(domain, index) in appInfoRuleForm.cgjDomain.domains"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{
                required: true, message: '域名不能为空', trigger: 'blur'
              }"
            >
              <el-input v-model="domain.value" style="padding: 0 0 5px;"></el-input>
              <el-button @click.prevent="removeCgjDomain(domain)" v-if="hiddenCgjSub">-</el-button>
              <el-button @click="addCgjDomain" v-if="hiddenCgjAdd">+</el-button>
            </el-form-item>
          </el-form>
        </el-form-item>
        <!-- 彩之云安全域名 -->
        <el-form-item label="彩之云安全域名:" prop="czyDomain">
          <el-form
            :model="appInfoRuleForm.czyDomain"
            ref="czyDomain"
            label-width="100px"
            class="czyForm"
            size="medium"
          >
            <el-form-item
              class="czyFormItem"
              v-for="(domain, index) in appInfoRuleForm.czyDomain.domains"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{
                required: true, message: '域名不能为空', trigger: 'blur'
              }"
            >
              <el-input v-model="domain.value" style="padding: 0 0 5px;"></el-input>
              <el-button @click.prevent="removeCzyDomain(domain)" v-if="hiddenCzySub">-</el-button>
              <el-button @click="addCzyDomain" v-if="hiddenCzyAdd">+</el-button>
            </el-form-item>
          </el-form>
        </el-form-item>
        <!-- 备注描述 -->
        <el-form-item label="备注描述:" prop="remark">
          <el-input
            type="textarea"
            autosize
            maxlength="200"
            show-word-limit
            v-model="appInfoRuleForm.remark"
          ></el-input>
        </el-form-item>
        <!-- 权限申请 -->
        <el-form-item label="权限申请:" prop="permissionApplyFor">
          <template>
            <el-dropdown
              style="padding: 0 40px 10px 0px;"
              placement="bottom-start"
              trigger="click"
              :hide-on-click="false"
              v-for="(item, index) in apiList"
              :key="index"
            >
              <span class="el-dropdown-link">
                {{item.name}}
                <i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <el-checkbox
                    style="display: block"
                    v-for="(childItem, index) in item.apis"
                    :key="index"
                  >
                    {{childItem.name}}
                    <i
                      v-if="true"
                      style="color: #000; padding-left: 5px"
                      class="el-icon-lock"
                    ></i>
                    <i v-else style="color: #000; padding-left: 5px" class="el-icon-time"></i>
                  </el-checkbox>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-form-item>
        <!-- 提交 -->
        <el-form-item>
          <el-button type="primary" @click.native="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import api from "@/api/subspi.js";
export default {
  name: "CreateApply",
  data() {
    return {
      appInfoRuleForm: {
        name: "", // 应用名称
        code: "", // 代号
        expireTime: "", // 有效时间
        cgjDomain: {
          // 彩管家域名
          domains: [
            {
              value: ""
            }
          ]
        },
        czyDomain: {
          // 彩之云域名
          domains: [
            {
              value: ""
            }
          ]
        },
        remark: "", // 备注
        permissionApplyFor: "" // 权限申请
      },
      rules: {
        name: [{ required: true, message: "请输入应用名称", trigger: "blur" }],
        code: [{ required: true, message: "请输入代号", trigger: "blur" }],
        expireTime: [
          { required: true, message: "有效期不能为空", trigger: "blur" }
        ],
        remark: [
          { required: true, message: "备注描述不能为空", trigger: "blur" }
        ]
      },
      apiList: [
        // 开放服务接口列表
        // {
        //   serviceUuid:'xxx-xxx1',
        //   name:'彩之云用户授权1',
        //   list:[
        //     {
        //       uuid:'xx-x--x1-1',
        //       name:'接口-1-1'
        //     },
        //     {
        //       uuid:'xx-x--x1-2',
        //       name:'接口-1-2'
        //     },
        //     {
        //       uuid:'xx-x--x1-3',
        //       name:'接口-1-3'
        //     },
        //     {
        //       uuid:'xx-x--x1-4',
        //       name:'接口-1-4'
        //     }
        //   ]
        // },
        // {
        //   serviceUuid:'xxx-xxx2',
        //   name:'彩之云用户授权2',
        //   list:[
        //     {
        //       uuid:'xx-x--x2',
        //       name:'接口-2'
        //     }
        //   ]
        // },
        // {
        //   serviceUuid:'xxx-xxx3',
        //   name:'彩之云用户授权3',
        //   list:[
        //     {
        //       uuid:'xx-x--x3',
        //       name:'接口-3'
        //     }
        //   ]
        // },
        // {
        //   serviceUuid:'xxx-xxx4',
        //   name:'彩之云用户授权4',
        //   list:[
        //     {
        //       uuid:'xx-x--x4',
        //       name:'接口-4'
        //     }
        //   ]
        // },
        // {
        //   serviceUuid:'xxx-xxx5',
        //   name:'彩之云用户授权5',
        //   list:[
        //     {
        //       uuid:'xx-x--x5-1',
        //       name:'接口-5-1'
        //     },
        //     {
        //       uuid:'xx-x--x5-2',
        //       name:'接口-5-2'
        //     },
        //     {
        //       uuid:'xx-x--x5-3',
        //       name:'接口-5-3'
        //     },
        //     {
        //       uuid:'xx-x--x5-4',
        //       name:'接口-5-4'
        //     }
        //   ]
        // }
      ],
      checkList: []
    };
  },
  computed: {
    hiddenCgjAdd() {
      if (this.appInfoRuleForm.cgjDomain.domains.length < 3) {
        return true;
      }
    },
    hiddenCgjSub() {
      if (this.appInfoRuleForm.cgjDomain.domains.length < 2) {
        return false;
      } else {
        return true;
      }
    },
    hiddenCzyAdd() {
      if (this.appInfoRuleForm.czyDomain.domains.length < 3) {
        return true;
      }
    },
    hiddenCzySub() {
      if (this.appInfoRuleForm.czyDomain.domains.length < 2) {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    getOpenApiList() {
      let params = { accessToken: this.$store.getters.access_token };
      api.myApply.getOpenApiList(params).then(res => {
        if (res.code === 0) {
          this.apiList = res.content;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    removeCgjDomain(item) {
      var index = this.appInfoRuleForm.cgjDomain.domains.indexOf(item);
      if (index !== -1) {
        this.appInfoRuleForm.cgjDomain.domains.splice(index, 1);
      }
    },
    addCgjDomain() {
      this.appInfoRuleForm.cgjDomain.domains.push({
        value: "",
        key: Date.now()
      });
    },
    removeCzyDomain(item) {
      var index = this.appInfoRuleForm.czyDomain.domains.indexOf(item);
      if (index !== -1) {
        this.appInfoRuleForm.czyDomain.domains.splice(index, 1);
      }
    },
    addCzyDomain() {
      this.appInfoRuleForm.czyDomain.domains.push({
        value: "",
        key: Date.now()
      });
    }
  },
  created() {
    this.getOpenApiList();
    console.log(this.$route.params);
  }
};
</script>

<style lang="scss">
// 彩管家安全域名
.cgjForm {
  .cgjFormItem {
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
  .el-input--medium {
    width: 200px;
  }
  .el-input--medium .el-input__inner {
    width: 200px;
  }
}
// 彩之云安全域名
.czyForm {
  .czyFormItem {
    .el-form-item__content {
      margin-left: 0 !important;
    }
  }
  .el-input--medium {
    width: 200px;
  }
  .el-input--medium .el-input__inner {
    width: 200px;
  }
}
</style>
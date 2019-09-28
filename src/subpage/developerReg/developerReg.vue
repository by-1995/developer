<template>
  <div>
    <div  v-if="!isRegSuccess" class="reg-form">
      <el-form
        :model="developerInfoRuleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="auto"
        class="reg-ruleForm"
        size="medium"
      >
        <el-form-item label="开发者类型" prop="developerType">
          <el-select
          v-model="developerInfoRuleForm.developerType"
          @change="selectedType" placeholder="请选择">
            <el-option
              v-for="item in devTypeOptions"
              :key="item.value"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="联系人姓名" prop="contactsName">
          <el-input
            v-model="developerInfoRuleForm.contactsName"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input
            maxlength="11"
            v-model="getCurrentDeveloperInfo.mobile"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item label="短信验证码" prop="smsCode">
          <el-input maxlength="6" v-model="developerInfoRuleForm.smsCode"></el-input>
          <el-button
            type="primary"
            class="send-code-btn"
            @click="sendVerificationCode"
          >发送验证码</el-button>
        </el-form-item>
        <el-form-item label="实名状态" prop="isIdentity">
          <el-tag
            type="info"
            :style="isIdentity === 1 ? '' : (isIdentity === 1 ? 'color: red' : 'color: #999')"
            size="medium"
          >{{isIdentity === 1 ? '已实名' : (isIdentity === 2) ? '未实名' : '验证中'}}
          </el-tag>
          <span v-if="isIdentity === 1" style="padding-left: 30px; color: #8BC34A;">
            <i class="el-icon-success"></i>
            验证通过
          </span>
          <span v-else-if="isIdentity === 2" style="padding-left: 30px;">
            <i style="color: #CA3B2B;" class="el-icon-error"></i>
            请
            <span
              @click="showIdentityDialog"
              style="cursor: pointer; color: #409EFF;">
              点击实名
            </span>
            后申请，即可通过审核
          </span>
        </el-form-item>
        <!-- 实名认证二维码 -->
        <identity-dialog
          :showDialog="isIdentityShow"
          :qrcodeImg="qrcodeImgUrl"
          @hiddenIdentity="hiddenIdentityDialog"
        ></identity-dialog>
        <template v-if="isBusiness || SelectDeveloperType === '企业'">
          <el-form-item label="行业类别" prop="categoryId">
            <el-select
              no-data-text="加载中"
              v-model="developerInfoRuleForm.categoryId"
              placeholder="请选择行业类别"
              @visible-change="getCategoryList"
              @change="selectedCategory"
            >
              <el-option
                v-for="item in workTypesOptions"
                :key="item.id"
                :value="item.name"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="企业地址" prop="address">
            <el-select
              no-data-text="加载中"
              v-model="developerInfoRuleForm.provinceUuid"
              placeholder="省份"
              @visible-change="getProvinceList"
              @change="selectedProvince"
            >
              <el-option
                v-for="item in businessAddrOptions.province"
                :key="item.regionId"
                :label="item.name"
                :value="item.regionId"
              >
              </el-option>
            </el-select>
            <el-select
              no-data-text="加载中"
              v-model="developerInfoRuleForm.cityUuid"
              placeholder="地级市"
              @visible-change="getCityList"
              @change="selectedCity"
            >
              <el-option
                v-for="item in businessAddrOptions.city"
                :key="item.regionId"
                :label="item.name"
                :value="item.regionId"
              >
              </el-option>
            </el-select>
            <el-select
              v-model="developerInfoRuleForm.countyUuid"
              placeholder="市、县级"
              no-data-text="加载中"
              @visible-change="getCountyList"
            >
              <el-option
                v-for="item in businessAddrOptions.county"
                :key="item.regionId"
                :label="item.name"
                :value="item.regionId"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="businessId" label="营业执照号" prop="businessId">
            <el-input
              v-model="developerInfoRuleForm.businessId"
              placeholder="请填写统一社会信用代码，如无统一社会信用代码请填写其它标示号码"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="上传营业执照图片" prop="businessImgId">
            <upload-img :imgUrl="developerInfoRuleForm.businessImgId ? developerInfoRuleForm.businessImgId : ''"></upload-img>
          </el-form-item>
        </template>
        <el-form-item>
          <el-button
            v-if="developerInfoRuleForm.developerType === '个人'"
            type="primary"
            @click.native="personalReg"
          >立即注册
          </el-button>
          <el-button
            v-else-if="developerInfoRuleForm.developerType === '企业'"
            type="primary"
            @click.native="businessReg"
          >立即注册
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <reg-success
      v-if="isRegSuccess"
      :currentDeveloperInfo="getCurrentDeveloperInfo"
      :isIdentity="isIdentity"
    ></reg-success>
  </div>

</template>
<script>
import api from '@/api/subspi'
import UpLoadImg from './components/upLoadImg'
import IdentityDialog from './components/identityDialog'
import regSuccess from './regSuccess'
import { message } from 'element-ui'
export default {
  name: 'RegDeveloper',
  data() {
    return {
      devTypeOptions: [
        {
          value: '个人'
        },
        {
          value: '企业'
        }
      ],
      workTypesOptions: [],
      businessAddrOptions: {
        province: [],
        city: [],
        county: []
      },
      currentDevType: '', // 当前选中的开发者类型
      isIdentity: 0, // 实名状态 1 为已实名 2为未实名
      identityName: '', // 实名姓名
      mobile: '', // 手机号
      isIdentityShow: false, // 扫码实名对话框是否显示
      isRegSuccess: false, // 是否注册成功
      qrcodeImgUrl: '', // 实名二维码图片地址
      qrcodeUrl: '', // 实名二维码对应地址
      selectedCategoryId: '', // 当前选中的行业类别编号
      selectedProvinceId: '', // 当前选中的省编号
      selectedCityId: '',
      selectedCountyId: '',
      developerInfoRuleForm: {
        smsCode: '',
        developerType: '',
        contactsName: '',
        categoryId: '',
        provinceUuid: '',
        cityUuid: '',
        countyUuid: '',
        businessId:  '', // 营业执照号
        businessImgId: '' // 营业执照图片
      },
      rules: {
        developerType: [
          { required: true, message: '请选择开发者类型', trigger: 'change'}
        ],
        categoryName: [
          { required: true, message: '请选择行业类型', trigger: 'change'}
        ],
        name: [
          { required: true, message: '请输入联系人名称', trigger: 'blur' },
          { min: 1, max: 8, message: '长度在 1 到 8 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入短信验证码', trigger: 'blur'}
        ]
      }
    }
  },
  computed: {
    isBusiness () {
      return this.developerInfoRuleForm.developerType === '企业'
    },
    SelectDeveloperType () { // 如果有传递进来的开发者信息参数
      if (this.developerInfoRuleForm) {
        if (this.developerInfoRuleForm.developerType === 1) {
          this.developerInfoRuleForm.developerType = '个人'
        } else if (this.developerInfoRuleForm.developerType === 2) {
          this.developerInfoRuleForm.developerType = '企业'
        }
      }
    },
    getCurrentDeveloperInfo () {
      return this.$store.getters.developerInfo
    }
  },
  components: {
    'upload-img': UpLoadImg,
    'identity-dialog': IdentityDialog,
    'reg-success': regSuccess
  },
  methods: {
    checkIdentity () { // 检验当前登录的彩之云账户是否已实名
      let params = {
        accessToken: this.$store.getters.access_token
      }
      api.developerReg.checkUserIdentity(params).then(res => {
        if (res.code === 0) {
          this.isIdentity = res.content.is_identity
        }
      })
    },
    sendVerificationCode () { // 发送验证码
      let params = {
        accessToken: this.$store.getters.access_token
      }
      api.developerReg.sendVerificationCode(params).then(res => {
        if (res.code === 0) {
          message.success('验证码发送成功')
        }
      })
    },
    getCategoryList () { // 获取行业类型列表
      if (this.workTypesOptions.length === 0) {
        api.developerReg.getCategoryList({accessToken: this.$store.getters.access_token}).then(res => {
          if (res.code === 0) {
            this.workTypesOptions = res.content
          }
        })
      }
    },
    selectedCategory (id) {
      this.selectedCategoryId = id
    },
    getProvinceList (show) { // 获取省
      if (show && this.businessAddrOptions.province.length === 0) {
        let params = {
          accessToken: this.$store.getters.access_token
        }
        api.developerReg.getRegionList(params).then(res => {
          if (res.code === 0) {
            console.log(res.content)
            this.businessAddrOptions.province = res.content
          }
        })
      }
    },
    selectedProvince (id) { // 获取选中省的编号id
      this.selectedProvinceId = id
    },
    getCityList (show) { // 根据省编号获取对应城市列表
      if (this.selectedProvinceId && show && this.businessAddrOptions.city.length === 0) {
        let params = {
          accessToken: this.$store.getters.access_token,
          regionId: this.selectedProvinceId
        }
        api.developerReg.getRegionList(params).then(res => {
          if (res.code === 0) {
            this.businessAddrOptions.city = res.content
          }
        })
      } else if (show) {
        message.error('请先选择省份')
      }
    },
    selectedCity (id) { // 获取选中的城市编号id
      this.selectedCityId = id
    },
    getCountyList (show) {
      if (this.selectedCityId && show && this.businessAddrOptions.county.length === 0) {
        let params = {
          accessToken: this.$store.getters.access_token,
          regionId: this.selectedCityId
        }
        api.developerReg.getRegionList(params).then(res => {
          if (res.code === 0) {
            this.businessAddrOptions.county = res.content
          }
        })
      } else if (show) {
        message.error('请先选择地级市')
      }
    },
    personalReg () {
      let params = {
        accessToken: this.$store.getters.access_token,
        smsCode: this.developerInfoRuleForm.smsCode
      }
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          api.developerReg.regPersonalDeveloper(params).then(res => {
          if (res.code === 0) {
            if (res.content.applyResult === 1) { // 个人开发者注册成功
              this.isRegSuccess = true
            }
          }
        })
      } else {
          message.error('信息不能为空')
          return false
        }
      })
    },
    businessReg () {
      console.log('企业注册')
      // this.$refs['ruleForm'].validate((valid) => {
      //   if (valid) {
      //     api.developerReg.regEnterpriseDeveloper(params).then(res => {
      //     if (res.code === 0) {
      //       if (res.content.applyResult === 1) { // 个人开发者注册成功
      //         this.isRegSuccess = true
      //       }
      //     }
      //   })
      // } else {
      //     message.error('信息不能为空')
      //     return false
      //   }
      // })
    },
    showIdentityDialog () { // 显示实名认证二维码对话框
      if (this.isIdentityShow) {
        return
      } else {
        setTimeout(() => {
          this.getIdentityQrCode()
          this.isIdentityShow = true
        }, 20)
      }
    },
    getIdentityQrCode () { // 获取实名认证二维码
      if (this.qrcodeImgUrl) {
        return
      } else {
        let params = {
          accessToken: this.$store.getters.access_token
        }
        api.developerReg.getIdentityQRcode(params).then(res => {
          if (res.code === 0) {
            this.qrcodeImgUrl = res.content.qrcodeUri
            this.qrcodeUrl = res.content.redirectUri
          }
        })
      }
    },
    hiddenIdentityDialog () {
      this.isIdentityShow = false
    },
    selectedType (value) {
      this.developerInfoRuleForm.developerType = value
      console.log(this.developerInfoRuleForm.developerType)
    }
  },
  created () {
    let params = this.$route.params
    if (params) {
      this.developerInfoRuleForm = params
    }
    if (this.isIdentity) {
      return
    } else {
      this.checkIdentity()
    }
  }
}
</script>
<style lang="scss" >
  .reg-form {
    .businessId {
      .el-input--medium .el-input__inner {
        width: 500px;
      }
    }
    .el-input--medium {
      width: 200px;
    }
    .el-input--medium .el-input__inner {
      width: 200px;
    }
    .send-code-btn {
      margin-left: 50px;
    }
    .el-scrollbar {
      .el-scrollbar__view .el-select-dropdown__list {
        li.el-select-dropdown__item.selected {
          background-color: #fff !important;
        }
      }
      
    }
  }
</style>

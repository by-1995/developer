<template>
  <div>
    <div class="personalInfo">
      <div class="title"  style="color: #666">
        基本信息
      </div>
      <el-form class="infoContent" style="padding: 20px 60px 0 150px">
        <el-form-item label="姓名:">{{developerInfo.name}}</el-form-item>
        <el-form-item label="手机号:">{{developerInfo.mobile}}</el-form-item>
        <el-form-item label="开发者类型:">
          {{developerInfo.developerType === 1 ? '个人' : '企业'}}
          <span v-if="developerInfo.developerType === 1" style="padding-left: 40px">立即升级为
            <span
              style="color: #409EFF; cursor: pointer"
              @click="pathToDeveloperReg"
              >企业开发者, 管理更多成员 >>
            </span>
          </span>
        </el-form-item>
      </el-form>
    </div>
    <div class="businessInfo" v-if="developerInfo.developerType === 2">
      <div class="title" style="color: #666; padding-top: 40px">
        企业信息
      </div>
      <el-form class="infoContent" style="padding: 20px 60px 0 150px">
        <el-form-item label="行业类型:">{{developerInfo.categoryName}}</el-form-item>
        <el-form-item label="企业地址:">
          <el-select v-model="developerInfo.provinceName" placeholder="省份">
              <el-option
                v-for="item in businessAddrOptions.province"
                :key="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="developerInfo.cityName" placeholder="地级市">
              <el-option
                v-for="item in businessAddrOptions.city"
                :key="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="developerInfo.countyName" placeholder="市、县级">
              <el-option
                v-for="item in businessAddrOptions.county"
                :key="item.value"
                :value="item.value"
              >
              </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="企业名称:">{{developerInfo.companyName}}</el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevelopInfo',
  data () {
    return {
      developerInfo: {
        developerType: 1,
        name: '王小二',
        mobile: '15365215485',
        companyName: 'xxx互联网公司',
        categoryName: '互联网',
        provinceName: '广东省',
        cityName: '深圳市',
        countyName: '龙华区'
      },
      businessAddrOptions: {
        province: [
          {value: '广东省'}
        ],
        city: [
        ],
        county: []
      }
    }
  },
  methods: {
    pathToDeveloperReg () {
      this.$router.push(
        {
          name: 'DeveloperReg',
          params: this.developerInfo
        }
      )
    }
  },
  beforeDestroy () {
    let route = this.$route
    if (route && route.path === '/developerReg/index') {
      route.meta.title = '升级成为企业开发者'
    }
  }
}
</script>
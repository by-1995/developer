<template>
  <div>
    <template>
      <div class="my-table" style="padding: 20px 0px 60px;">
        <el-table
          :data="tableData"
          :border="true"
          style="width: 100%"
          :default-sort="{prop: 'applyAt', order: 'ascending'}"
          @cell-click="CurrentCellClick($event)"
        >
          <el-table-column
            align="center"
            :resizable="false"
            prop="companyName"
            label="开发者名称"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            :resizable="false"
            prop="businessId"
            label="注册号"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            :resizable="false"
            prop="applyName"
            label="申请人"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            sortable
            :resizable="false"
            prop="applyAt"
            label="申请时间"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            filter-multiple
            :filters="[
              {text: '全部', value: 0},
              {text: '已通过', value: 2},
              {text: '待审核', value: 1},
              {text: '已驳回', value: 3}]"
            :filter-method="filterHandler"
            :resizable="false"
            prop="status"
            label="审核结果"
            min-width="100"
          >
            <template slot-scope="scope">
              <span :style="scope.row.status === 2 ? styleObject.success : (scope.row.status === 1 ? styleObject.pending : (scope.row.status === 3 ? styleObject.reject : ''))">
                {{scope.row.status === 2 ? '已通过' : (scope.row.status === 1 ? '待审核' : (scope.row.status === 3 ? '已驳回' : ''))}}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            min-width="100">
            <template slot-scope="scope">
              <el-button
                @click="viewDetail()"
                type="text"
                size="small"
              >查看详情</el-button>
              <!-- 审核状态为已驳回时显示重新发起申请按钮 -->
              <el-button
                v-if="scope.row.status === 3"
                @click="pathToDeveloperReg()"
                type="text"
                size="small"
              >重新发起申请</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
    <developer-detail
      :showDialog="isDetailShow"
      :detailData="currentRowData"
      dialogTitle="开发者资料"
      @hiddenDetail="hiddenDetail"
    ></developer-detail>
  </div>
</template>

<script>
import DeveloperAuthDetail from './components/Detail'
export default {
  name: 'DeveloperAuth',
  components: {
    'developer-detail': DeveloperAuthDetail
  },
  data () {
    return {
      styleObject: {
        success: 'color: #8ABEE5;',
        reject: 'color: #E0001B;',
        pending: 'color: #F69A86;'
      },
      currentRowData: {},
      isDetailShow: false,
      tableHead: ['开发者名称', '注册号', '申请人', '申请时间', '审核结果'],
      tableData: [
        {
          developerType:  2,
          applyName:  '123开发者',
          companyName:  'XXX123开发公司',
          applyUuid:  'xxx-xxx-xxx',
          applyAt:  '2019-08-01 16:55:55',
          status: 3,
          registerNum:  '15651541111',
          comment:  '营业执照已过期',
          categoryID: "3",
          categoryName: '互联网',
          provinceName: '广东省',
          cityName: '深圳市',
          countyName: '龙华区',
          businessId: 'xxxx12323',
          businessImgId: '2323',
          businessImgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568805485924&di=228f18959610e60fad06c0d08f0cbbe7&imgtype=0&src=http%3A%2F%2Fstatics.garmentnet.cn%2Ffile%2Ffile_photo%2Fshow%2Fstyle%2F548fd1c76c6e7420521954.jpg'
        },
        {
          developerType:  2,
          applyName:  '233开发者',
          companyName:  'XXX24开发公司',
          applyUuid:  'xxx-xxx-xxx',
          applyAt:  '2019-08-02 16:55:55',
          status: 1,
          registerNum:  '15651544322',
          comment:  '',
          categoryID: "3",
          categoryName: '互联网',
          provinceName: '广东省',
          cityName: '深圳市',
          countyName: '龙华区',
          businessId: 'xxxx2333',
          businessImgId: '2323',
          businessImgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          developerType:  2,
          applyName:  '333开发者',
          companyName:  'XXX424开发公司',
          applyUuid:  'xxx-xxx-xxx',
          applyAt:  '2019-08-08 16:55:55',
          status: 1,
          registerNum:  '15651541233',
          comment:  '',
          categoryID: "3",
          categoryName: '互联网',
          provinceName: '广东省',
          cityName: '深圳市',
          countyName: '龙华区',
          businessId: 'xxxx44444',
          businessImgId: '2323',
          businessImgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        },
        {
          developerType:  2,
          applyName:  '444开发者',
          companyName:  'XXX124124开发公司',
          applyUuid:  'xxx-xxx-xxx',
          applyAt:  '2019-08-03 12:55:55',
          status: 2,
          registerNum:  '15651548521',
          comment:  '',
          categoryID: "3",
          categoryName: '互联网',
          provinceName: '广东省',
          cityName: '深圳市',
          countyName: '龙华区',
          businessId: 'xxxx412312314',
          businessImgId: '2323',
          businessImgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    CurrentCellClick (e) {
      this.currentRowData = e
      console.log(e)
    },
    styleCustom (row, column, rowIndex, columnIndex) {
    },
    viewDetail() { // 点击查看详情
      if (this.isDetailShow) {
        return
      } else {
        setTimeout(() => {
          this.isDetailShow = true
        }, 20)
      }
    },
    pathToDeveloperReg () { // 点击重新发起申请
      setTimeout(() => {
        this.$router.push(
          {
            name: 'DeveloperReg',
            params: this.currentRowData
          }
        )
      }, 20)
    },
    hiddenDetail () {
      this.isDetailShow = false
    },
    filterHandler(value, row, column) {
      if (value === '全部') {
        return true
      }
      const property = column['property'];
      return row[property] === value;
    }
  },
  created () {
  },
  beforeDestroy () {
    let route = this.$route
    if (route && route.path === '/developerReg/index') { // 如果跳转的路径是注册开发者路径
      route.meta.title = '注册成为开发者'
      Object.keys(route.params).map((item) => {
        if (item === 'applyName') {
          route.params.name = route.params[item]
        } else if (item === 'registerNum') {
          route.params.mobile = route.params[item]
        }
        return route.params
      })
      console.log(route.params)
    }
  },
  // beforeRouteLeave (to, from, next) { // 子组件中组件内路由守卫不生效
  //   console.log(from)
  //   if (to.path === '/developerReg/index')
  //   console.log(this.$route.params)
  //   next()
  // }
}
</script>
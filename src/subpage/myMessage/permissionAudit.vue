<template>
  <div>
    <template>
      <span class="search-btn">
        <span style="color: #666">接口名称:</span>
        <el-input
          style="width: 250px; text-align: center; margin-right: 60px;"
          placeholder="请输入接口名称搜索"
          size="medium"
          v-model="apiNameKeyWord"
        ></el-input>
        <span style="color: #666">接口路径:</span>
        <el-input
          style="width: 250px; text-align: center"
          placeholder="请输入接口路径搜索"
          size="medium"
          v-model="apiPathKeyWord"
        ></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </span>
    </template>
    <template>
      <div class="my-table" style="padding: 20px 0px 60px;">
        <el-table
          :data="tableData"
          :border="true"
          style="width: 100%"
          :default-sort="{prop: 'applyAt', order: 'ascending'}"
          @cell-click="CurrentCellClick($event)"
        >
          <!-- <el-table-column
            align="center"
            :resizable="false"
            v-for="(item, index) in getObjKeys"
            :key="index"
            :prop="item"
            :label="tableHead[index]"
            :sortable="tableHead[index] === '申请时间' ? true : false"
            filter-multiple
            :filters="tableHead[index] === '审核结果' ? [
              {text: '全部', value:'全部'},
              {text: '已通过', value:'已通过'},
              {text: '待审核', value:'待审核'},
              {text: '已驳回', value:'已驳回'}] : []"
            :filter-method="tableHead[index] === '审核结果' ? filterHandler : filterNothing"
            min-width="100">
            <template slot-scope="scope">
              {{scope.row.status}}
            </template>
          </el-table-column> -->
          <el-table-column
            align="center"
            :resizable="false"
            prop="apiName"
            label="api名称"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            :resizable="false"
            prop="apiPath"
            label="api路径"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            :resizable="false"
            prop="requestType"
            label="请求方式"
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
            width="100">
            <template>
              <el-button
              @click="viewDetail()"
              type="text"
              size="small"
              >查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
    <api-detail
      :showDialog="isDetailShow"
      :detailData="currentRowData"
      dialogTitle="API详情"
      @hiddenDetail="hiddenDetail"
    ></api-detail>
    <pagination></pagination>
  </div>
</template>

<script>
import MyTab from './components/myTab'
import Search from '../components/Search'
import Pagination from '../components/Pagination'
import MyTable from '../components/MyTable'
import ApiDetail from './components/Detail'
export default {
  name: 'PermissionAudit',
  components: {
    'my-tab': MyTab,
    'search': Search,
    'pagination': Pagination,
    'my-table': MyTable,
    'api-detail': ApiDetail
  },
  data () {
    return {
      apiNameKeyWord: '',
      apiPathKeyWord: '',
      styleObject: {
        success: 'color: #8ABEE5;',
        reject: 'color: #E0001B;',
        pending: 'color: #F69A86;'
      },
      currentRowData: {},
      isDetailShow: false,
      tableHead: ['api名称', 'API路径', '请求方式', '申请时间', '审核结果'],
      tableData: 
      [{
          apiName: 'xx接口-1',
          apiPath: 'xx/xx/xxx/123',
          requestType: 'GET',
          applyAt: '2019-08-01 16:02',
          status: 2
        },
        {
          apiName: 'xx接口-2',
          apiPath: 'xx/xx/xxx/233',
          requestType: 'GET',
          applyAt: '2019-08-03 16:02',
          status: 1
        },
        {
          apiName: 'xx接口-3',
          apiPath: 'xx/xx/xxx/124',
          requestType: 'GET',
          applyAt: '2019-08-02 16:02',
          status: 3,
          comment:'无权申请'
        },
        {
          apiName: 'xx接口-0',
          apiPath: 'xx/xx/xxx/235',
          requestType: 'GET',
          applyAt: '2019-08-02 13:02',
          status: 1
        }
      ]
    }
  },
  computed: {
    getObjKeys () {
      return Object.keys(this.tableData[0])
    }
  },
  methods: {
    CurrentCellClick (e) {
      this.currentRowData = e
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
  }
}
</script>

<style lang="scss" scoped>
  .apiNameSearch {
    padding: 0 40px 60px;
  }
</style>

<style lang="scss">
  .el-table th, .el-table tr:nth-child(0) {
    background: #eaedf0 !important;
  }
</style>
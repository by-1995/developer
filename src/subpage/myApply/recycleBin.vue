<template>
  <div>
    <!-- 搜索 -->
    <template>
      <span class="search-btn">
        <el-input style="width: 250px; text-align: center" placeholder="请输入应用名称/代号搜索" size="medium" v-model="keyWord"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </span>
    </template>
    <template>
      <div class="my-table" style="padding: 20px 0px 60px;">
        <el-table
          :data="tableData"
          :border="false"
          @cell-click="CurrentCellClick($event)"
          @cell-mouse-enter="showCopyIcon"
          @cell-mouse-leave="hiddenCopyIcon"
          style="width: 100%">
          <el-table-column
            align="center"
            class="has-gutter"
            prop="name"
            label="应用名称"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            prop="code"
            label="代号(code)"
            min-width="100">
          </el-table-column>
          <el-table-column
            align="center"
            prop="appId"
            label="应用ID"
            min-width="120">
            <template slot-scope="scope">
              <span style="width: 5px" class="appId">{{ scope.row.appId }}</span>
              <i
                v-show="isCopyIconShow"
                class="el-icon-document-copy"
                v-copy="scope.row.appId"
              ></i>
            </template>
          </el-table-column>

          <el-table-column
            align="center"
            prop="token"
            label="token"
            min-width="100">
            <template slot-scope="scope">
              <span style="width: 10px">{{ scope.row.token }}</span>
              <i 
                v-show="isCopyIconShow"
                class="el-icon-document-copy"
                v-copy="scope.row.token"
              ></i>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="ClientSecert"
            label="ClientSecert"
            min-width="100">
            <template slot-scope="scope">
              <span style="width: 10px">{{ scope.row.ClientSecert }}</span>
              <i 
                v-show="isCopyIconShow"
                class="el-icon-document-copy"
                v-copy="scope.row.ClientSecert"
              ></i>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            prop="deletedAt"
            label="删除时间"
            min-width="100">
          </el-table-column>
          <el-table-column
            label="操作"
            width="100">
            <template>
              <el-button
              @click="clickRecovery()"
              type="text"
              size="small"
              >点击恢复</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
    <pagination></pagination>
  </div>
</template>

<script>
import Search from '../components/Search'
import Pagination from '../components/Pagination'
import MyTable from '../components/MyTable'
export default {
  name: 'RecycleBin',
  components: {
    'search': Search,
    'pagination': Pagination,
    'my-table': MyTable
  },
  props: {

  },
  data () {
    return {
      keyWord: '', // 搜索关键词
      appId: '',
      isCopyIconShow: false, //复制图标是否显示
      tableHead: ['应用名称', '代号(code)', '应用ID', 'token', 'ClientSecert', '删除时间'],
      tableData: 
      [{
          name: '2016-05-22',
          code: 'aa',
          appId: 'asdadasd12312ra',
          token: '普陀区22',
          ClientSecert: 'kjhgf234324',
          status: 2, // 是否被删除 1 正常 2 回收站类型,
          deletedAt: '2019-08-08 16:02' // 删除时间
        },
        {
          name: '2016-05-02',
          code: 'bb',
          appId: 'asdasd1rsdgdfbfdber',
          token: '普陀区',
          ClientSecert: 'kjhgf234324',
          status: 2,
          deletedAt: '2019-08-03 12:02'
        },
        {
          name: '2016-05-02',
          code: 'cc',
          appId: 'asfxbfgdfhdf',
          token: '普陀区',
          ClientSecert: 'kjhgf234324',
          status: 1
        },
        {
          name: '2016-05-02',
          code: 'dd',
          appId: 'asdgsgjdurtetwerq1231231241qwe',
          token: '普陀区',
          ClientSecert: 'kjhgf234324',
          status: 1
        },
        {
          name: '2016-05-02',
          code: 'ee',
          appId: 'qwrwtyreuti475',
          token: '普陀区',
          ClientSecert: 'kjhgf234324',
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
    CurrentCellClick ({appId}) {
      this.appId = appId
      console.log(this.appId)
    },
    clickRecovery() {
      setTimeout(() => {
        this.$confirm('确定恢复应用吗?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.appId)
        this.$message({
          type: 'success',
          message: '恢复成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消恢复'
        })         
      })
      }, 20)
    },
    showCopyIcon () {
      this.isCopyIconShow = true
    },
    hiddenCopyIcon () {
      this.isCopyIconShow = false
    },
    filterDeletedData () {
      let data = this.tableData
      let res = data.filter((item) => {
        return item.status === 2
      })
      this.tableData = res
    }
  },
  created () {
    this.filterDeletedData()
  }
}
</script>

<style lang="scss">
  .el-table th, .el-table tr:nth-child(0) {
    background: #eaedf0 !important;
  }
</style>
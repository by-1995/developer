<template>
  <div>
    <!-- 搜索 -->
    <template>
      <span class="search-btn">
        <el-input style="width: 250px; text-align: center" placeholder="请输入应用名称/代号搜索" size="medium" v-model="keyWord"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </span>
    </template>
    <div class="btnGroup">
      <router-link to="/myApply/createApply">
        <el-button type="primary">创建应用</el-button>
      </router-link>
      <router-link to="/myApply/recycleBin">
        <el-button type="danger">回收站</el-button>
      </router-link>
    </div>
    <!-- <my-table
    :currentTableData="tableData"
    :currentTableHead="tableHead"
    >
    </my-table> -->
    <template>
      <div class="my-table" style="padding: 20px 0px 60px;">
        <el-table
          :data="tableData"
          :border="false"
          @cell-click="CurrentCellClick($event)"
          @cell-mouse-enter="showCopyIcon"
          @cell-mouse-leave="hiddenCopyIcon"
          style="width: 100%">
          <!-- <el-table-column
            show-overflow-tooltip
            v-for="(item, index) in getObjKeys"
            :key="index"
            class="has-gutter"
            :prop="item"
            :label="tableHead[index]"
            min-width="100">
          </el-table-column> -->
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
            label="操作"
            width="100">
            <template>
              <el-button
              @click="pathToCreateApp()"
              type="text"
              size="small"
              >修改</el-button>
            <el-button
              type="text"
              size="small"
              @click="deleteApp()"
              >
              删除</el-button>
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
  name: 'ViewApply',
  components: {
    'search': Search,
    'pagination': Pagination,
    'my-table': MyTable
  },
  data () {
    return {
      keyWord: '', // 搜索关键词
      appId: '',
      isCopyIconShow: false, //复制图标是否显示
      currentRowData: {},
      tableHead: ['应用名称', '代号(code)', '应用ID', 'token', 'ClientSecert'],
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
    CurrentCellClick (e) {
        this.appId = e.appId
        this.currentRowData = e
      },
      pathToCreateApp () { // 调整到创建应用页面并传递参数
        setTimeout(() => {
          this.$router.push({
            name: 'CreateApply',
            params: this.currentRowData
          })
        }, 20)
      },
      deleteApp() {
        setTimeout(() => {
          this.$confirm('确定删除该应用吗?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(this.appId)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })         
        })
        }, 20)
      },
      showCopyIcon () {
        this.isCopyIconShow = true
      },
      hiddenCopyIcon () {
        this.isCopyIconShow = false
      }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/mixin.scss';
  .btnGroup {
    padding: 20px;
  }
  .appId {
    @include ellipsis(1);
  }
</style>

<style lang="scss">
  .el-table th, .el-table tr:nth-child(0) {
    background: #eaedf0 !important;
  }
</style>
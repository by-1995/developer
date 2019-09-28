<template>
  <div>
    <div class="btnGroup" style="padding: 0 20px 20px;">
      <el-button type="info" plain @click="deleteSelected">删除</el-button>
      <el-button type="info" plain @click="markAllRead">全部标记为已读</el-button>
      <el-button type="info" plain @click="markSelectedRead">标记已读</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 80%; padding: 20px 0px 60px;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        align="center"
        prop="date"
        label="标题内容"
        min-width="150"
        >
        <template slot-scope="scope">
          <el-badge v-if="scope.row.status === 1" value="未读" class="mark">{{scope.row.title}}</el-badge>
          <el-badge v-else value="已读" hidden class="mark">{{scope.row.title}}</el-badge>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        prop="typeName"
        label="类型"
        min-width="150">
      </el-table-column>
      <el-table-column
        align="center"
        prop="createAt"
        label="时间"
        min-width="150">
      </el-table-column>
    </el-table>
    <pagination></pagination>
  </div>
</template>

<script>
import Pagination from '../components/Pagination'
export default {
  name: 'MessageNotif',
  components: {
    'pagination': Pagination
  },
  data() {
    return {
      multipleSelection: [],
      tableData: [{
        title: '鉴权微服务权限申请通过',
        typeName: '权限申请',
        createAt: '2019-08-31  01:14',
        status: 1
      }, {
        title: '鉴权微服务权限申请通过',
        typeName: '权限申请',
        createAt: '2019-08-31  01:14',
        status: 1
      }, {
        title: '鉴权微服务权限申请通过',
        typeName: '权限申请',
        createAt: '2019-08-31  01:14',
        status: 2
      }, {
        title: '鉴权微服务权限申请通过',
        typeName: '权限申请',
        createAt: '2019-08-31  01:14',
        status: 2
      }]
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteSelected () {

    },
    markAllRead () {

    },
    markSelectedRead () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .mark {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>

<style lang="scss">
  .el-table th, .el-table tr:nth-child(0) {
    background: #eaedf0 !important;
  }
</style>
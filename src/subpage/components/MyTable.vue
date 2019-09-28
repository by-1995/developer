<template>
  <div class="my-table" style="padding: 20px 0px 60px;">
    <el-table
      :data="currentTableData"
      :border="isBorder"
      @cell-click="CurrentCellClick($event)"
      style="width: 100%">
      <el-table-column
        v-for="(item, index) in getObjKeys"
        :key="index"
        class="has-gutter"
        :prop="item"
        :label="currentTableHead[index]"
        width="150">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template>
          <el-button
          @click="handleClick()"
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

<script>
  export default {
    name: 'MyTable',
    props: {
      currentTableData: {
        type: Array,
        default: function () {
          return [
          {
          appName: '2016-05-02',
          code: '王小虎',
          appId: '上海',
          token: '普陀区',
          ClientSecert: '上海市普陀区金沙江路 1518 弄'
        },
        {
          appName: '2016-05-02',
          code: '王小虎',
          appId: '上海',
          token: '普陀区',
          ClientSecert: '上海市普陀区金沙江路 1518 弄'
        },
        {
          appName: '2016-05-02',
          code: '王小虎',
          appId: '上海',
          token: '普陀区',
          ClientSecert: '上海市普陀区金沙江路 1518 弄'
        },
        {
          appName: '2016-05-02',
          code: '王小虎',
          appId: '上海',
          token: '普陀区',
          ClientSecert: '上海市普陀区金沙江路 1518 弄'
        }]
        }
      },
      currentTableHead: {
        type: Array,
        default: function () {
          return ['应用名称', '代号(code)', '应用ID', 'token', 'ClientSecert']
        }
      },
      isBorder: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      getObjKeys () {
        return Object.keys(this.currentTableData[0])
      }
    },
    data() {
      return {
        appId: ''
      }
    },
    methods: {
      CurrentCellClick ({appId}) {
        this.appId = appId
        console.log(this.appId)
      },
      deleteApp() {
        setTimeout(() => {
          this.$confirm('确定删除应用吗?', {
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

<style lang="scss">
  .el-table__header {
    .has-gutter {
      background: #eaedf0;
    }
  }
</style>
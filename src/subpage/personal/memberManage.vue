<template>
  <div>
    <span>手机号: </span>
    <!-- 搜索 -->
    <template>
      <span class="search-btn">
        <el-input style="width: 250px; text-align: center" placeholder="请输入手机号搜索" size="medium" v-model="keyWord"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </span>
    </template>
    <span class="btnWrapper" style="padding-left: 600px">
      <el-button type="primary" @click="addMember">新增成员</el-button>
    </span>
    <template>
      <div style="padding: 20px 0px 60px;">
        <el-table
        :data="tableData"
        border
        style="width: 100%;">
          <el-table-column
            :resizable="false"
            align="center"
            class="has-gutter"
            prop="index"
            label="序号"
            min-width="40">
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="mobile"
            label="手机号"
            min-width="100">
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="name"
            label="真实姓名"
            min-width="100">
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            prop="roleType"
            label="角色"
            min-width="100">
            <template slot-scope="scope">
              {{scope.row.roleType === 1 ? '管理员' : '操作层'}}
            </template>
          </el-table-column>
          <el-table-column
            :resizable="false"
            align="center"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button
                v-if="scope.row.roleType === 1"
                type="text"
                size="small"
                @click="transferAdmin"
              >转让管理员</el-button>
            <el-button
              type="text"
              size="small"
              >
              删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
    <my-dialog
      :showDialog="isDialogShow"
      :dialogTitle="currentDialogTitle"
      @hiddenDetail="hiddenDetail"
      :options="tableData"
      ></my-dialog>
    <pagination></pagination>
  </div>
</template>

<script>
import Search from '../components/Search'
import Pagination from '../components/Pagination'
import MyTable from '../components/MyTable'
import MyDialog from './components/myDialog'
export default {
  components: {
    'search': Search,
    'pagination': Pagination,
    'my-table': MyTable,
    'my-dialog': MyDialog
  },
  data () {
    return {
      keyWord: '', // 搜索关键词
      currentDialogTitle: '',
      isDialogShow: false,
      tableData: [
        {
          index: 0,
          mobile: '1565245152',
          name: '管理员1号',
          roleType: 1
        },
        {
          index: 1,
          mobile: '1565245152',
          name: '开发者2号',
          roleType: 2
        },{
          index: 2,
          mobile: '1565245152',
          name: '开发者3号',
          roleType: 2
        },{
          index: 3,
          mobile: '1565245152',
          name: '开发者3号',
          roleType: 2
        }
      ]
    }
  },
  methods: {
    addMember () {
      if (this.isDialogShow) {
        return
      } else {
        setTimeout(() => {
          this.currentDialogTitle = '新增成员'
          this.isDialogShow = true
        }, 20)
      }
    },
    transferAdmin () {
      if (this.isDialogShow) {
        return
      } else {
        setTimeout(() => {
          this.currentDialogTitle = '转让管理员'
          this.isDialogShow = true
        }, 20)
      }
    },
    hiddenDetail () {
      this.isDialogShow = false
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

<style lang="scss">
  .el-table th, .el-table tr:nth-child(0) {
    background: #eaedf0 !important;
  }
</style>
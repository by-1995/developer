<template>
  <div>
    <el-dialog
      :visible.sync="dialogFormVisible"
      :close-on-click-modal="false"
      :show-close="false"
      width="30%"
    >
      <div class="dialog-header" slot="title">
        {{dialogTitle}}
        <el-button
          class="el-icon-close"
          style="padding-left: 300px;font-size: 20px;color: #000;"
          type="text"
          @click="hiddenDialog"
        ></el-button>
      </div>
      <el-form v-if="dialogTitle === '新增成员'" label-width="80px">
        <el-form-item label="手机号:">
          <el-input v-model="mobile"></el-input>
        </el-form-item>
      </el-form>
      <!-- 转让管理员 -->
      <el-form v-if="dialogTitle === '转让管理员'" label-width="90px">
        <el-form-item label="转让管理员:">
          <el-select v-model="name" filterable>
            <el-option
              v-for="item in memberOptions"
              :key="item.index"
              :label="item.label"
              :value="item.name">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="hiddenDialog">取消</el-button>
        <el-button type="primary" @click="hiddenDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  props: {
    showDialog: {
      type: Boolean
    },
    dialogTitle: {
      type: String
    },
    options: {
      type: Array
    }
  },
  watch: {
    showDialog: {
      handler(nv) {
        this.dialogFormVisible = nv
      }
    }
  },
  computed: {
  },
  data () {
    return {
      mobile: '',
      dialogFormVisible: null,
      memberOptions: [],
      name: ''
    }
  },
  methods: {
    hiddenDialog () {
      this.dialogFormVisible = false
      this.$emit('hiddenDetail')
    },
    filterOptions () {
      let options = Object.assign([], this.options)
      if (options) {
        let res = []
        options.forEach((item) => {
          res.push({name: item.name})
        })
        this.memberOptions = res
      }
    }
  },
  created () {
    this.filterOptions()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin.scss';
  @mixin icon ($color) {
    display: inline-block;
    position: relative;
    text-align: center;
    width: 12px;
    height: 12px;
    background: #eee;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    box-shadow: 0 0 4px 1px rgb(99, 99, 99);
    &>i {
      display: inline-block;
      position: absolute;
      left: 0;
      top: 0;
      width: 12px;
      height: 12px;
      background: $color;
      -moz-border-radius: 50%;
      -webkit-border-radius: 50%;
      border-radius: 50%;
    }
  }
  .dialog-header {
    padding-bottom: 10px;
    @include one-px-border();
  }
  .dialog-footer {
    padding-top: 10px;
    @include one-px-border(top);
  }
</style>
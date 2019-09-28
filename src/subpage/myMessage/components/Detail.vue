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
      <el-form v-if="dialogTitle === 'API详情'" label-width="80px" style="padding-left: 60px">
        <el-form-item label="API名称:">
          {{detailData.apiName}}
        </el-form-item>
        <el-form-item label="请求方式:">
          {{detailData.requestType}}
        </el-form-item>
        <el-form-item label="路径:">
          {{detailData.apiPath}}
        </el-form-item>
        <el-form-item label="审核状态:">
          <i :class="statusClass"><i></i></i>
          {{detailData.status === 2 ? '已通过' : (detailData.status === 1 ? '待审核' : (detailData.status === 3 ? '已驳回' : ''))}}
        </el-form-item>
        <el-form-item v-if="detailData.comment" label="驳回理由:">
          {{detailData.comment}}
        </el-form-item>
      </el-form>
      <!-- 开发者资料 -->
      <el-form v-else label-width="80px" style="padding-left: 60px">
        <el-form-item label="企业名称:">
          {{detailData.companyName}}
        </el-form-item>
        <el-form-item label="行业类型:">
          <el-input size="small" :value="detailData.categoryName"></el-input>
        </el-form-item>
        <el-form-item label="注册号:">
          {{detailData.businessId}}
        </el-form-item>
        <!-- 营业执照照片 -->
        <el-form-item label="营业执照:">
          <el-image
            lazy
            style="width: 100%; height: 100%"
            :src="detailData.businessImgUrl"
          >
          </el-image>
        </el-form-item>
        <el-form-item label="审核状态:">
          <i :class="statusClass"><i></i></i>
          {{detailData.status === 2 ? '已通过' : (detailData.status === 1 ? '待审核' : (detailData.status === 3 ? '已驳回' : ''))}}
        </el-form-item>
        <el-form-item v-if="detailData.comment" label="驳回理由:">
          {{detailData.comment}}
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="hiddenDialog">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: {
    showDialog: {
      type: Boolean
    },
    detailData: {
      type: Object
    },
    dialogTitle: {
      type: String
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
    statusClass () {
      return this.detailData.status === 2 ? 'statusIconA' : (this.detailData.status === 1 ? 'statusIconB' : (this.detailData.status === 3 ? 'statusIconC' : ''))
    }
  },
  data () {
    return {
      dialogFormVisible: null
    }
  },
  methods: {
    hiddenDialog () {
      this.dialogFormVisible = false
      this.$emit('hiddenDetail')
    }
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
  .statusIconA {
    @include icon(#02A7F0);
  }
  .statusIconB {
    @include icon(#F59A23);
  }
  .statusIconC {
    @include icon(#D9001B);
  }
</style>
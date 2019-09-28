<template>
  <div>
    <el-dialog
      class="identity-dialog"
      :visible.sync="centerDialogVisible"
      width="40%"
      :close-on-click-modal="false"
      :show-close="false"
      style="text-align: center"
    >
      <div
        class="dialog-header"
        slot="title"
        style="text-align:center;"
      >
        扫码实名
        <el-button
          class="el-icon-close"
          style="position: relative; top: -8px; float: right;font-size: 20px;color: #000;"
          type="text"
          @click="hiddenDialog"
        ></el-button>
      </div>
      <div class="qrcodeImgWrapper">
        <el-image
          v-if="qrcodeImg"
          :src="qrcodeImg"
        >
      </el-image>
      </div>
      <span
        slot="footer"
        class="dialog-footer"
        style="text-align:center;"
      >
        用彩之云APP扫码，即可快速实名
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DeveloperHelp',
  props: {
    showDialog: {
      type: Boolean
    },
    qrcodeImg: {
      type: String
    }
  },
  watch: {
    showDialog: {
      handler(nv) {
        this.centerDialogVisible = nv
      }
    }
  },
  data () {
    return {
      centerDialogVisible: null
    }
  },
  methods: {
    hiddenDialog () {
      this.centerDialogVisible = false
      this.$emit('hiddenIdentity')
    }
  }
}
</script>

<style lang="scss">
.identity-dialog {
  .el-dialog__footer {
    text-align: center;
  }
  .qrcodeImgWrapper {
    height: 0;
    padding-bottom: 100%;
  }
}
</style>
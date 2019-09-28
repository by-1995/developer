<template>
  <div style="text-align: center">
    <section v-if="isIdentity === 1 && currentDeveloperInfo.developerType === 1">
      <p>
        <i
          style="font-size: 20px; color: #8BC34A; padding-right: 5px"
          class="el-icon-success"
        ></i>
        <span class="regRes">{{isPersonalRegSucc}}</span>
      </p>
      <p class="contact">
        联系人: {{regInfo.contact}}
      </p>
      <p class="phone">
        联系人电话: {{regInfo.phone}}
      </p>
      <div>
        <el-button type="primary" @click="pathToCreateApp">创建应用</el-button>
        <el-button type="primary" @click="pathToDeveloperInfo">查看基本信息</el-button>
      </div>
    </section>
    <section v-else-if="isIdentity === 2 && currentDeveloperInfo.developerType === 1">
      <img src="" alt="">
      <p>
        <i class="el-icon-check"></i>
        <span class="regRes">{{isPersonalRegSucc}}</span>
      </p>
      <p class="realName">
        <span
          @click="showIdentityDialog"
          style="cursor: pointer; color: #409EFF;">
          点此实名
        </span>
        ,即可注册成功哦
      </p>
      <identity-dialog
        :showDialog="isIdentityShow"
        @hiddenIdentity="hiddenIdentityDialog"
        ></identity-dialog>
    </section>
    <section v-else>
      <p>
        <i class="el-icon-check"></i>
        <span class="regRes">{{isBusinessRegSucc}}</span>
      </p>
      <p class="contact">
        联系人: {{currentDeveloperInfo.name}}
      </p>
      <p class="phone">
        联系人电话: {{currentDeveloperInfo.mobile}}
      </p>
      <div>
        <el-button type="primary" @click="pathToCreateApp">创建应用</el-button>
        <el-button type="primary" @click="pathToDeveloperInfo">查看基本信息</el-button>
      </div>
    </section>
  </div>
</template>

<script>
import IdentityDialog from './components/identityDialog'
export default {
  name: 'RegSuccess',
  props: {
    currentDeveloperInfo: {
      type: Object,
      default: function () {
        return {
          developerType: 1,
          regRes: 2, // 已实名
          contact: '陈公公',
          phone: 15515215454
        }
      }
    },
    isIdentity: {
      type: Number
    }
  },
  data () {
    return {
      isIdentityShow: false
    }
  },
  components: {
    'identity-dialog': IdentityDialog
  },
  computed: {
    isPersonalRegSucc () {
      return this.isIdentity === 1 && this.currentDeveloperInfo.developerType === 1 ? '已成功注册成为开发者' : '已提交，请等待审核'
    },
    isBusinessRegSucc () {
      if (this.isIdentity === 1 && this.currentDeveloperInfo.developerType === 2) {
        return '已提交，请等待审核'
      }
    }
  },
  methods: {
    showIdentityDialog () {
      if (this.isIdentityShow) {
        return
      } else {
        setTimeout(() => {
          this.isIdentityShow = true
        }, 20)
      }
    },
    hiddenIdentityDialog () {
      this.isIdentityShow = false
    },
    pathToCreateApp () {
      this.$router.push('/myApply/createApply')
    },
    pathToDeveloperInfo () {
      this.$router.push('/personal/developerInfo')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
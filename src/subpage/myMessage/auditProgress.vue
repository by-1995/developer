<template>
  <div>
    <div class="tabGroup" style="padding: 10px 20px 30px;">
      <el-button-group>
        <el-button
          :type="paBtnTypeChange"
          @click="currentTab='permission-audit'"
        >权限审核
        </el-button>
        <el-button
          :type="daBtnTypeChange"
          @click="currentTab='developer-auth'"
        >开发者认证
        </el-button>
      </el-button-group>
    </div>
    <!-- 动态切换权限审核与开发者认证两个组件 -->
    <component :is="currentTabComponent"></component>
  </div>
</template>

<script>
import PermissionAudit from './permissionAudit'
import DeveloperAuth from './developerAuth'
export default {
  name: 'AuditProgress',
  components: {
    'permission-audit': PermissionAudit,
    'developer-auth': DeveloperAuth
  },
  data () {
    return {
      currentTab: 'permission-audit'
    }
  },
  computed: {
    currentTabComponent () {
      return this.currentTab
    },
    paBtnTypeChange () {
      return this.currentTabComponent === 'permission-audit' ? 'primary' : 'info'
    },
    daBtnTypeChange () {
      return this.currentTabComponent === 'permission-audit' ? 'info' : 'primary'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>

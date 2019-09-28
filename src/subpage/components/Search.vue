
<template>
  <span class="search-btn">
    <el-input style="width: 250px; text-align: center" :placeholder="currentPlaceholder" size="medium" v-model="keyWord"></el-input>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </span>
</template>

<script>
export default {
  name: 'Search',
  props: {
    currentPlaceholder: {
      type: String,
      default: '请输入应用名称/代号搜索'
    }
  },
  data () {
    return {
      keyWord: ''
    }
  }
}
</script>

<style lang="scss">
</style>
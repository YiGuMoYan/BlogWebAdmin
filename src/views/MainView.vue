<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <aside-component/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideComponent from '@/components/AsideComponent.vue'

export default {
  name: 'MainView',
  components: { AsideComponent }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" :border="false" class="border-b" />
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id) // 必须是number类型
  },
  data() {
    return {
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '签证办理', path: '/visa' },
        { title: '套餐详情', path: '' }
      ],
    }
  }
}
</script>

<style>

</style>
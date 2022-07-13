<template>
  <div>
    <!-- banner -->
    <ShopBanner />
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'medicine',
      typeText: {
        medicine: '药品商城',
        health: '保健品',
        devices: '医用器械',
        PE: '赴日医检',
      },
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '在线商城', path: '/shop' },
        { title: '', path: '' },
      ]
    }
  },
  mounted() {
    this.type = this.$route.query.type
    this.breadcrumbList[2].title = this.typeText[this.$route.query.type]
  }
}
</script>

<style>

</style>
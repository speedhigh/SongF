<template>
  <div class="pb-12">
    <!-- banner -->
    <ShopBanner />
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" />
    <!-- menu -->
    <ShopMenu />
    <!-- main -->
    <main class="w-[1400px] mx-auto mt-12 space-y-12">
      <!-- section2` 热销产品 -->
      <ShopSectionHot />
      <!-- section3` 药品商城 -->
      <ShopSectionMedicine />
      <!-- section4` 保健品 -->
      <ShopSectionHealth />
      <!-- section5` 赴日医检 -->
      <ShopSectionPE />
      <!-- section6` 医疗器材 -->
      <ShopSectionDevices />
      <!-- section7` 更多推荐产品 -->
      <ShopSectionMore />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '在线商城', path: '' },
      ]
    }
  }
}
</script>

<style>
.el-carousel__button {
  @apply bg-primary -mt-3
}
</style>
<template>
  <div>
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" :border="false" class="border-b" />
    <!-- content -->
    <div class="w-[1400px] mx-auto flex">
      <div class="w-[1000px] h-screen bg-red-200">
        content
      </div>
      <div class="ml-auto w-[340px] z-10 relative pt-10">
        <div class="sticky top-24 space-y-[30px]">
          <div class="shadow-md rounded-lg h-[294px]">
            <div class="w-full h-[54px] flex items-center px-5 rounded-t-lg bg-gray-100">
              <h2 class="text-lg font-normal">诊疗技术</h2>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="p-5 space-y-1">
              <div v-for="i in 5" :key="i" class="cursor-pointer hover:text-primary">
                <p class="text-lg line-1 leading-9">这里放一条活蹦乱跳的新闻...</p>
              </div>
            </div>
          </div>
          <div class="shadow-md rounded-lg h-[294px]">
            <div class="w-full h-[54px] flex items-center px-5 rounded-t-lg bg-gray-100">
              <h2 class="text-lg font-normal">诊疗技术</h2>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-auto h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="p-5 space-y-1">
              <div v-for="i in 5" :key="i" class="cursor-pointer hover:text-primary">
                <p class="text-lg line-1 leading-9">这里放一条活蹦乱跳的新闻...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        { title: '最新资讯', path: '/info' },
        { title: '资讯详情', path: '' }
      ],
    }
  }
}
</script>

<style>

</style>
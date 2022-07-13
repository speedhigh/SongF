<template>
  <div>
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" :border="false" class="border-b" />
    <div class="w-[1200px] mx-auto pt-10 pb-20">
      <!-- top -->
      <div class="flex space-x-10">
        <img src="https://api.lorem.space/image/house?w=520&h=253" alt="身元保证书办理" width="520" height="253" class="flex-shrink-0 rounded-md">
        <div class="flex-grow w-full">
          <h2 class="text-[1.63rem] font-normal">短期旅居签证</h2>
          <div class="mt-4 flex space-x-3.5">
            <div class="w-[3.75rem] h-6 rounded bg-primary text-white text-sm text-center leading-6">推荐</div>
            <div class="w-[3.75rem] h-6 rounded bg-primary text-white text-sm text-center leading-6">短期</div>
          </div>
          <div class="mt-4 space-y-1">
            <p class="text-base text-gray-500">有效期限90天，预计8个工作日办理完成</p>
            <p class="text-base text-gray-500">推荐人群：短期旅游或居住</p>
          </div>
          <p class="mt-6 text-2xl text-primary">￥<span class="text-[2rem]">54121.50</span></p>
          <div class="mt-5 flex items-center space-x-5">
            <button class="w-60 h-[3.38rem] bg-primary text-white text-lg rounded-md">立即办理</button>
            <button class="w-60 h-[3.38rem] border border-primary text-primary text-lg rounded-md">咨询客服</button>
          </div>
        </div>
      </div>
      <!-- main -->
      <main class="mt-10 space-y-10">
        <!-- 1`签证信息 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">签证信息</h2>
          </div>
          <div class="mt-7 ml-6 text-base text-gray-500 flex space-x-10">
            <p>签证类型：短期旅居签证</p>
            <p>入境次数：单次</p>
            <p>有效期限：3年</p>
            <p>最早可预定时间：2023-10-01</p>
            <p>最长停留时间：90天</p>
            <p>办理时常：8个工作日</p>
          </div>
        </section>
        <!-- 2`办理流程 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">办理流程</h2>
          </div>
          <div class="mt-10 ml-6">
            <div class="px-10 w-96">
              <el-steps :active="4">
                <el-step title="上传资料" />
                <el-step title="提交订单" />
                <el-step title="审核办理" />
                <el-step title="出签配送" />
              </el-steps>
            </div>
            <div class="mt-10 leading-6 text-gray-500 space-y-1">
              <p class="font-bold mb-2 text-gray-900">请注意：</p>
              <p>1、归国后，请及时销签，在归国一周内给 到以下材料。销签所需材料：1.护照签证页+海关章 +入境章清晰拍照2.归国报告书清晰拍照件（在日本 归国时，请务必在办理登机牌时，让柜台人员盖 章)，请务必保管好您的归国报告书</p>
              <p>2、拒签险同一国家一年内只理赔一次，二次投保皆 为无效投保无法二次理赔无效，请知悉</p>
              <p>3、客人的实际出游行程与递交办理签证的是需要</p>
            </div>
          </div>
        </section>
        <!-- 3`所需材料 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">所需材料</h2>
          </div>
          <div class="mt-8 ml-6 flex space-x-10 text-gray-500">
            <p>*2寸照片1张</p>
            <p>*户口簿复印件</p>
            <p>*签证申请表</p>
          </div>
        </section>
        <!-- 4`注意事项 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">注意事项</h2>
          </div>
          <div class="mt-8 ml-6 text-gray-500 space-y-1">
            <p>1、如需撤签，提供护照原件及亲笔签名的撤签说明复印件， 撤签说明需包含申请人姓名、护照号码、撤签原因、办签时预订的出行日期，撤签后需要8个工作日才可以取回</p>
            <p>2、为了方便领馆审核您的护照和贴签证页，在您递交材料前 请将护照保护套取下并自行保管，以避免在领馆审核时有所遗失，敬请配合</p>
            <p>3、签证有效期自使领馆签发日起计算</p>
          </div>
        </section>
      </main>
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
        { title: '签证办理', path: '/visa' },
        { title: '套餐详情', path: '' }
      ],
    }
  }
}
</script>

<style>

</style>
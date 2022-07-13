<template>
  <div>
    <!-- 面包屑 -->
    <BaseBreadcrumb :list="breadcrumbList" :border="false" class="border-b" />
    <!-- content -->
    <div class="w-[1200px] mx-auto pt-10 pb-12">
      <!-- top -->
      <div class="flex items-end space-x-10">
        <img src="https://api.lorem.space/image/house?w=520&h=253" alt="身元保证书办理" width="520" height="253" class="flex-shrink-0 rounded-md">
        <div class="flex-grow w-full space-y-7">
          <h2 class="text-[1.63rem] font-normal">身元保证书办理</h2>
          <div class="flex space-x-3.5">
            <div class="w-[3.75rem] h-6 rounded bg-primary text-white text-sm text-center leading-6">推荐</div>
            <div class="w-[3.75rem] h-6 rounded bg-primary text-white text-sm text-center leading-6">医疗</div>
          </div>
          <div class="space-y-1">
            <p class="text-base text-gray-500">有效期限90天，预计8个工作日办理完成</p>
            <p class="text-base text-gray-500">推荐人群：赴日体检、医疗等</p>
          </div>
          <div class="flex items-center space-x-5">
            <button class="w-60 h-[3.38rem] bg-primary text-white text-lg rounded-md">立即办理</button>
            <button class="w-60 h-[3.38rem] border border-primary text-primary text-lg rounded-md">咨询客服</button>
          </div>
        </div>
      </div>
      <!-- main -->
      <main class="mt-10 space-y-10">
        <!-- 1`为什么需要身元保证 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">为什么需要身元保证</h2>
          </div>
          <div class="mt-7 ml-6 text-base text-gray-500">
            按日本政府要求在日进行疾病治疗以及体检和健康检查的外国患者和同伴者需要办理医疗签证。只有通过了国际医疗协调认证的公司才能协助办理医疗签证。
          </div>
        </section>
        <!-- 2`我们的优势 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">我们的优势</h2>
          </div>
          <div class="mt-10 ml-6 space-y-7">
            <!-- 1、公司获得了身元保证机构的认证 -->
            <div>
              <h3 class="font-bold">1、公司获得了身元保证机构的认证</h3>
              <p class="text-base text-gray-500 mt-2">全资子公司拥有日本外务省 和日本经济产业省颁发的身元保证资质， 免服务费为用户办理赴日医疗签证。</p>
            </div>
            <!-- 2、协助申请医疗签证 -->
            <div>
              <h3 class="font-bold">2、协助申请医疗签证</h3>
              <p class="text-base text-gray-500 mt-2">如果您希望在日本进行治疗，我们可以协助您办理签证，医疗签证类型和逗留时间根据患者的病情而定。</p>
            </div>
            <!-- 3、取得就诊证明 -->
            <div>
              <h3 class="font-bold">3、取得就诊证明</h3>
              <p class="text-base text-gray-500 mt-2">
                如果您正在考虑取得医疗签证进行治疗，需要由医疗机关和身元保证机构开具“就诊等计划证明及身元保证书”。如果您就诊的医疗机构没有决定，我们可以介绍医疗机构。我们将一站式服务为您提供医疗签证相关的申请文件
              </p>
            </div>
          </div>
        </section>
        <!-- 3`办理方式 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">办理方式</h2>
          </div>
          <div class="mt-10 ml-6 space-y-7">
            <!-- 1、公司获得了身元保证机构的认证 -->
            <div>
              <h3 class="font-bold">1、全权交由光大健康专业客服办理</h3>
              <p class="text-base text-gray-500 mt-2">您只需提供欲办理身元保证函的客户本人相关信息，联系日本医院及相关事宜，全权由客服人员代为处理，更省心、更快捷。</p>
            </div>
            <!-- 2、协助申请医疗签证 -->
            <div>
              <h3 class="font-bold">2、自行联系日本医院</h3>
              <p class="text-base text-gray-500 mt-2">
                您可以在本网站下载身元保证函模版，自行联系日本当地医院并加盖医院签章，完成后将身元保证函原件邮寄到本公司，待客服人员办齐后以邮寄方式将身元保证函原件回寄给您。
              </p>
            </div>
          </div>
        </section>
        <!-- 4`身元保证样板 -->
        <section>
          <div class="flex items-center space-x-4">
            <div class="w-1.5 h-[1.63rem] bg-primary rounded" />
            <h2 class="text-2xl font-normal">身元保证样板</h2>
          </div>
          <img src="https://api.lorem.space/image?w=400&h=560" alt="身元保证样板" width="400" height="560" class="mt-8 rounded-md">
        </section>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbList: [
        { title: '首页', path: '/' },
        { title: '身元保证', path: '' }
      ]
    }
  }
}
</script>

<style>

</style>
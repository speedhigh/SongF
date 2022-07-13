<template>
  <div 
    v-if="screenHeight"
    class="bg-login-bg bg-no-repeat bg-cover pt-[130px] px-[360px]" 
    :style="{'height': screenHeight + 'px'}"
  >
    <div class="ml-auto w-[400px] h-[460px] bg-[rgba(255,255,255,0.9)] rounded-xl pt-10 pb-11">
      <div class="flex items-end px-[30px]">
        <p class="text-[2rem] font-bold">欢迎登录</p>
        <p class="ml-auto text-gray-400">没有账号？<span class="text-primary cursor-pointer">去注册</span></p>
      </div>
      <!-- 表单 -->
      <el-form
         ref="ruleForm"
        :model="form" 
        :rules="rules" 
        label-width="65px"
        class="mt-20 pl-4 pr-[30px]"
      >
        <!-- 手机号 -->
        <el-form-item label="手机号" prop="phone">
          <el-input type="tel" v-model.number="form.phone" placeholder="请输入您的手机号" maxlength="11" />
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off" placeholder="请输入您的密码" />
        </el-form-item>
      </el-form>
      <div class="mt-20 px-[30px]">
        <button class="w-full h-11 bg-primary text-white rounded-3xl hover:opacity-85">注册</button>
        <div class="mt-4 flex justify-between text-sm text-gray-500">
          <div class="cursor-pointer hover:text-gray-900" @click="changeActive(active)">{{ active }}</div>
          <div class="cursor-pointer hover:text-gray-900">忘记密码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenHeight: 0,
      active: '验证码登录',
      form: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { pattern: 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/, message: '手机号格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur'},
        ],
      }
    }
  },
  mounted() {
    this.screenHeight = window.innerHeight-60-176
  },
  methods: {
    changeActive(active) {
      active === '验证码登录' ? this.active = '账号密码登录' : this.active = '验证码登录'
    }
  }
}
</script>
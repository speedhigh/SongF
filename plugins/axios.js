import { Message, Alert } from 'element-ui'
export default function ({ $axios, store }) {
  $axios.onError(error => {
    console.log('----error----',error)
  })

  $axios.setToken(store.state.token)

  $axios.onRequest((config) => {
    $axios.setHeader('Authorization', store.state.token)
  })

  $axios.onResponse((res) => {
    if(res.data.code === 20002) {
      if(store.state.token && store.state.user.id) {
        store.commit('updateState', {name: 'token', payload: ''})
        store.commit('clearUser')
        Message({ type: 'warning', message: '登录时效已过期，请重新登录' })
        $nuxt.$router.push('/login')
      } else {
        Alert('请先登录',{
          confirmButtonText: '确定',
          callback: () => {
            $nuxt.$router.push('/login')
          }
        })
      }
    }
  })
}
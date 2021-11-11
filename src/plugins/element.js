import Vue from 'vue'
// import Element from 'element-ui'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Element)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 导入弹框提示组件需要挂载到vue的原型组件上
Vue.prototype.$message = Message

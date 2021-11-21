import Vue from 'vue'
// import Element from 'element-ui'
import { Button,
         Form, 
         FormItem, 
         Input, 
         Message, 
         Container, 
         Header, 
         Aside, 
         Main,
         Menu,
         Submenu,
         MenuItem,
         Breadcrumb,
         BreadcrumbItem,
         Card,
         Row,
         Col,
         Table,
         TableColumn,
         Switch,
         Tooltip,
         Pagination,
         Select,
         Option,
         Checkbox,
         CheckboxGroup,
         Radio,
         RadioGroup,
         Dialog,
         MessageBox
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Vue.use(Element)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Dialog)
// 导入弹框提示组件需要挂载到vue的原型组件上
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
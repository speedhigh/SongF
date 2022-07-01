import Vue from 'vue'

import { 
  Select, 
  Option, 
  Button,
  Form, 
  FormItem, 
  Input, 
  Pagination, 
  Icon,
  Carousel,
  CarouselItem,
  Checkbox,
  Divider,
  Upload,
  Dialog,
  DatePicker,
  MessageBox,
  Message
} from 'element-ui'

Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Icon)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Checkbox)
Vue.use(Divider)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(DatePicker)


Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
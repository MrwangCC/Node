// 1. 对进入的数据进行校验  ----- 引入模式对象
let Schema = mongoose.Schema;

// 2.制定规则 ----- 创建约束对象
let studentsSchema = new Schema({
  stu_id: {
    type: String, // 限制学号必须为：字符串
    required: true, // 限制学号为必填项
    unique: true // 限制学号是唯一的
  },
  name: {
    type: String, // 限制姓名必须为：字符串
    required: true, // 限制姓名为必填项
  },
  age: {
    type: Number, // 限制年龄必须为：数字
    required: true, // 限制年龄为必填项
  },
  sex: {
    type: String, // 限制性别必须为：字符串
    required: true, // 限制性别为必填项
  },
  hobby: [String], // 限制爱好只能为数组，数组中的每一项必须为字符串
  info: Schema.Types.Mixed, // 接收所有类型
  date: {
    type: Date,
    default: Date.now()
  },
  enable_flag: {
    type: String,
    default: 'Y'
  }
})

// 3. 告诉规则  ----- 创建模型对象
module.exports = stuModel = mongoose.model('students', studentsSchema); // 用于生成某个集合所对应的模型对象

let mongoose = require('mongoose');

// 1. 对进入的数据进行校验  ----- 引入模式对象
let Schema = mongoose.Schema;

// 2.制定规则 ----- 创建约束对象
let usersSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  nick_name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
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
module.exports = stuModel = mongoose.model('users', usersSchema); // 用于生成某个集合所对应的模型对象
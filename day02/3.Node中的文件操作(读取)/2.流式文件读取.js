/*
 * fs.createReadStream(path[, options])
 *     --path:尧都区的文件路径+文件名+后缀
 *     --options:
 *         --flags
 *         --encoding
 *         --fd
 *         --mode
 *         --autoClose
 *         --emitClose
 *         --start ：起始偏移量
 *         --end : 结束偏移量
 *         --highWaterMark：每次读取数据的大小，默认值是64 * 1024
 * */

let {
  createReadStream,
  createWriteStream
} = require('fs');

let rs = createReadStream(__dirname + '/demo.txt', {
  highWaterMark: 10 * 1024 * 1024,
  start: 2,
  end: 10
});

// 创建一个可写流
let ws = createWriteStream('../demo.txt');

rs.on('open', () => {
  console.log('可读流打开了');
});
rs.on('close', () => {
  console.log('可读流关闭了');
  ws.close();
});
ws.on('open', () => {
  console.log('可写流打开了');
});
ws.on('close', () => {
  console.log('可写流关闭了');
});


// 给可读流绑定一个data事件，就会触发可读流自动读取内容
rs.on('data', (data) => {
  // Buffer实例化的length属性，是表示该Buffer实例占用内存空间的大小
  console.log(data.length);

  ws.write(data);
  // ws.close();  在此处关闭流，会写入一次，后续数据丢失
});
// ws.close();    在此处关闭流，导致无法写入数据
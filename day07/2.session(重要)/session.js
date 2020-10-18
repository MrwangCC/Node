/*
* 关于session：
*     1.是什么？
*         标准来说，session这个单词指的是会话。
*             (1).前端通过浏览器去查看cookie的时候，会发现有些cookie的过期时间是：session，意味着该cookie是会话cookie。
*             (2).后端人员常常把【session会话存储】简称为：session存储，或者更简单的称为：session
*
*     2.特点：
*         1.存在于服务端
*         2.存储的是浏览器和服务器之间沟通产生的一些信息
*
*     3.默认session的存储在服务器的内存中，每当一个新客户端发来请求，服务器都会新开辟出一块空间，供session会话存储使用。
*
*     4.工作流程：
*         --第一次浏览器请求服务器的时候，服务器会开辟出一块内存空间，供session会话存储使用。
*         --返回响应的时候，会自动返回一个cookie（有时候会返回多个，为了安全），cookie里包含着，上一步产生会话存储“容器”的编号（id）
*         --以后请求的时候，会自动携带这个cookie，给服务器。
*         --服务器从该cookie中拿到对应的session的id，去服务器中匹配。
*         --服务器会根据匹配信息，决定下一步逻辑
*
*     5.备注：1.一般来说cookie一定会配合session使用。
*             2.服务端一般会做session的持久化，防止由于服务器重启，造成session的丢失。
*             3.session什么时候销毁？
*                  (1).服务器没有做session的持久化的同时，服务器重启了。
*                  (2).给客户端种下的那个用于保存session编号的cookie销毁了，随之服务器保存的session销毁(不管是否做了session的持久化)。
*                  (3).用户主动在网页上点击了“注销” “退出登录”等等按钮。
* */
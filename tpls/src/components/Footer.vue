<template>
  <div class="footer">
      <div class="container">
          <div class="row footerImg">
              <div class="col-xs-12 col-sm-4">
                  <div>
                    <img src="../assets/img/footer/1.jpg" class="pull-left" alt="">
                     <div class="pull-left">&nbsp;7天<br>&nbsp;无条件退款</div>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                  <div>
                    <img src="../assets/img/footer/2.jpg" class="pull-left" alt="">
                     <div class="pull-left allsendfree"> &nbsp;全场包邮</div>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-4">
                  <div>
                    <img src="../assets/img/footer/3.jpg" class="pull-left" alt="">
                     <div class="pull-left">&nbsp;全国所有城市<p>&nbsp;快递上门服务</p></div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container footerList">
          <div class="row">
              <div class="col-md-2 col-sm-3 col-xs-4">
                  <ul>
                      <li>新手指南</li>
                      <li><a>用户注册</a></li>
                      <li><a>找回密码</a></li>
                      <li><a>服务条款</a></li>
                  </ul>
              </div>
              <div class="col-md-2 col-sm-3 col-xs-4">
                  <ul>
                      <li>购物指南</li>
                      <li><a>购物流程</a></li>
                      <li><a>订单查询</a></li>
                  </ul>
              </div>
              <div class="col-md-2 col-sm-3 col-xs-4">
                  <ul>
                      <li>配送方式</li>
                      <li><a>商品验货与签收</a></li>
                      <li><a>配送网点查询</a></li>
                  </ul>
              </div>
              <div class="col-md-2 col-sm-3 col-xs-4">
                  <ul>
                      <li>支付方式</li>
                      <li><a>中国银联</a></li>
                      <li><a>支付宝</a></li>
                      <li><a>发票制度</a></li>
                  </ul>
              </div>
              <div class="col-md-2 col-sm-3 col-xs-4">
                  <ul>
                      <li>售后服务</li>
                      <li><a>退换货政策</a></li>
                      <li><a>退换货流程</a></li>
                      <li><a>退款方式</a></li>
                      <li><a>隐私声明</a></li>
                  </ul>
              </div>
              <div class="col-md-2 col-sm-3 col-xs-4 lastfooterlist">
                  <ul>
                      <li class="footerCall">客户服务热线<br>000-000-0000</li>
                      <li>地址：浙江省温州市梧田工业区</li>
                      <li>电话：0000-00000000</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>
<style  scpoed>
    .footer{
        background:#343434;
        color:white;
        padding-top:1%;
    }
   
    .footerImg>div>div{
        width:50%;
        margin:0 auto;
    }
    .footerImg:after{
        content:'';
        display:block;
        width:100%;
        border-bottom:1px dashed white;
        margin-top:5%;
    }
    .allsendfree{
        font-size:1.6em;
        margin-top:5%;
    }
    .footerList{
        width:70%;
        margin-top:2%;
    }
    .footerList ul{
         list-style:none;
    }
    .footerList a{
        color:#888888;
        font-size:0.5em;
        cursor:pointer;
    }
    .footerList a:hover{
        color:#FFFF99;
    }
    .footerCall{
        font-size:1.2em;
        font-weight:600;
    }
    .footerCall~li{
        font-size:0.5em;
    }
    .lastfooterlist{
        border-left:1px solid #555555;
    }
</style>

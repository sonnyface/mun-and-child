/**
 * Created by Administrator on 2017/6/30 0030.
 */
$(function(){

    var count=0;
    autoPly();


//自动播放事件
    function autoPly(){
   timer=setInterval(function(){
        count++;
           if(count==4){
            $('.banner1').css({left:'0'})
               count=1
            }

        $('.banner1').stop().animate({
            left:-1090*count+'px'
        });

        pageShow(count)
    },3000)
}


//////小圆点对应滑动图片
    function pageShow(count) {
        if(count==3){
            count=0;
        }
        $('.banner2 li').removeClass('active').eq(count).addClass('active')
    }

//////滑动事件
    $('.banner2 li').stop().hover(function(){
        clearInterval(timer);
        var num=$(this).index();
        $('.banner1').css({left:-1090*num});
        count=num;
        pageShow(count);
     },function(){
        autoPly();
   })


  $('.banner1').stop().hover(function(){
      clearInterval(timer);
  },function(){
      autoPly();
  })




    //////////右侧导航条事件

    ///////登录和注册
    $('.navRgt1').on('mouseenter',function(){
        $('.navRgtDiv1').css({display:'block'}).stop().animate({left:'-288px'},300)
    })

    $('.navRgt1').on('mouseleave',function(){
        $('.navRgtDiv1').css({display:'none',left:'-298px'})
       // console.log(8888);
    })

    $('.navRgtImg1').on('click',function(){
        $('.navRgtDiv1').css({display:'none'})
    })


    //////////购物车

    $('.shopCar').on('click',function(){

        $('.shopCarDiv').css({display:'block'}).stop().animate({left:'-288px'},300)
    })

    $('.shopCar').on('mouseleave',function(){
        $('.shopCarDiv').css({display:'none',left:'-298px'})

    });

    $('.shopCarImg1').on('click',function(){
        $('.shopCarDiv').css({display:'none'})
    })


///////登录
    $('.navRgt3').on('mouseenter',function(){

        $('.navRgtDiv3').css({display:'block'}).stop().animate({left:'-288px'},300)
    })

    $('.navRgt3').on('mouseleave',function(){
        $('.navRgtDiv3').css({display:'none',left:'-298px'})
       // console.log(8888);
    })

    $('.navRgtImg11').on('click',function(){
        $('.navRgtDiv3').css({display:'none'})
    })


///////客服


    $('.shopOnline').on('mouseenter',function(){
        $('.shopOnlineDiv').css({display:'block'}).stop().animate({left:'-78px'},300)
    })
    $('.shopOnline').on('mouseleave',function(){
        $('.shopOnlineDiv').css({display:'none'})
      ///  console.log(1111)
    })
  ///  console.log(5555)

      $('.shopOnline').on('click',function(){
        $('.talkTxt').css({display:'block'})
    })

    $('.BtnG').on('click',function(){
        $('.talkTxt').css({display:'none'})
        //console.log(3322222)
        return false;//事件冒泡
    })

    $('.talkTop3').on('click',function(){
        $('.talkTxt').css({display:'none'})
        //console.log(1111)
        return false;//事件冒泡
    })


    ///////回到顶层

    $('.navRgt4').on('mouseenter',function(){
        $('.navRgt4Div').css({display:'block'}).stop().animate({left:'-78px'},300)
    })
    $('.navRgt4').on('mouseleave',function(){
        $('.navRgt4Div').css({display:'none'})

    })

    $('.navRgt4').on('click',function(){
        $(document.body).scrollTop(5000)
    })







////////////////商品列表

    var url="../shoplist.json";
    $.getJSON(url,function(result){

        for(var j=0;j<result.shopList.length;j++){

            var listObj=result.shopList[j];
            //console.log(listObj);

            var $list=$('<li class="shopList"></li>');

            $('.shopMain').append($list);

            var $ListImg=$('<img class="ListImg1" data-url="../html/index5.html"/>')
            $ListImg.attr('src',listObj.ImgUrl);
            $list.append($ListImg);

            var $listDiv1=$('<div class="listDiv1"><span>'+listObj.shopDel+'</span><a href="index5.html?pid='+listObj.pid+'">'+listObj.shopPrice+'</a></div>');
            $list.append($listDiv1);

            var $listDiv2=$('<div class="listDiv2"><span>'+listObj.PriceUrl+'</span><a href="index5.html?pid='+listObj.pid+'">立即抢购 &gt;</a></div>')
            $list.append($listDiv2);


            $list.on('mouseenter',function(){
                $(this).stop().animate({top:'-15px'})
            })
            $list.on('mouseleave',function(){
                $(this).stop().animate({top:'0'})
            })

        }



///////////商品详情页面

        //console.log(location.search)
        var pid=location.search.split('=')[1];

        for(var k=0;k<result.shopList.length;k++){

            var oneShop=result.shopList[k];
           // console.log(oneShop);
            if(oneShop.pid==pid){
                console.log(oneShop.pid==pid)

               var $fdgTopSpan=$('<span></span>')
                $('.fdgTop').append($fdgTopSpan);
                $fdgTopSpan.html(oneShop.shopDel);

                var $bigImg=$('<img class="bigImg" src="'+oneShop.ImgUrl+'"/>')
                $('.big').append($bigImg);

                var $fdgImg1=$('<img class="fdgImg1" src="'+oneShop.ImgUrl+'"/>')
                $('.small').append($fdgImg1);

                var $fdgImg2=$('<img class="fdgImg2" src="'+oneShop.ImgUrl+'"/>')
                $('.fdgBtn').append($fdgImg2);

                var $fdgh2=$('<h2>'+oneShop.shopDel+'</h2>');
                $('.div1').append($fdgh2);

                var $fdgA=$('<a href="#">'+oneShop.shopPrice+'</a>')
                $('.div1').append($fdgA);

                var $fdgSpan=$('<span>'+oneShop.address+'</span>');
                $('.div1').append($fdgSpan);

                var $fdgP1=$('<p class="p2">'+oneShop.PriceUrl+'</p>');
                $('.div1').append($fdgP1);

                var $fdgA2=$('<a>'+oneShop.specification+'</a>');
                $('.div2A').append($fdgA2);

                var $fdgI1=$('<i>'+oneShop.colorUrl+'</i>');
                $('.div3A').append($fdgI1);

                var $fdgP3=$('<input type="text" class="Number"/>');
                $fdgP3.val(oneShop.lowNum)
                $('.div3List').prepend($fdgP3);





                //////购物车事件

                $('.div3Li').on('click',function(){

                    $('.div3List2').css({display:'block'});

                    var strCars= getCookie('shopCars');
                    if(strCars==undefined){
                        console.log(0);
                        //oneShop.num=1;                      //购物车没有商品
                       // $('.sellCarIpt').val(1)
                        var arr=[oneShop];
                        var objCars=JSON.stringify(arr);
                        setCookie('shopCars',objCars); /////把数据保存到cookie中

                    }else{

                        console.log(1);             //购物车有商品 要添加的商品 是否在购物车内

                        console.log(oneShop.num)
                        var arr=JSON.parse(strCars);
                        var falg=false;               //假设没有
                        var index=0;

                        for(var l=0;l<arr.length;l++){
                            var tmp=arr[l];
                            console.log(tmp)
                            if(tmp.pid==oneShop.pid){
                                falg=true;
                                index=l;
                            }
                        }


                    if(falg==true){
                        //购物车中存在相同的商品
                        arr[index].num++;
                    }else{
                        //购物车中不存在相同的商品
                        oneShop.num=1;
                        arr.push(oneShop);
                    }
                    var number=0;
                    for(var i=0;i<arr.length;i++){
                        number=number+arr[i].num
                    }

                    var objCars=JSON.stringify(arr);
                    setCookie('shopCars',objCars)
                        $('.sellCarIpt').val(number)
                    }


                });


                $('.div3Top1').on('click',function(){
                    $('.div3List2').css({display:'none'});
                    //console.log(11111);
                    return false;
                });
                $('.div3Btn1').on('click',function(){
                    $('.div3List2').css({display:'none'});
                    //console.log(22222);
                    return false;
                });


            }

        }




//////////////////获取数据

////////////////放大镜事件

        var $big=$('.big');
        var $smallBox=$('.smallBox');
        var $fagBox=$('.fagBox');
        var $bigImg=$('.bigImg');

    var $bigWidth=parseInt($big.width())/parseInt($smallBox.width())*$fagBox.width();

        $bigImg.css('width',$bigWidth)
       // console.log( $('.bigImg').width());

        $fagBox.on('mouseenter',function(event){
            $smallBox.css({display:'block'});
            $big.css({display:'block'});

        })
        $fagBox.on('mouseleave',function(event){
            $smallBox.css({display:'none'});
            $big.css({display:'none'});

        })



        //////鼠标移动事件
        $smallBox.on('mousemove',function(event){
            var evt=event || window.event;
            var smallX=evt.pageX-$fagBox.offset().left-$smallBox.width()/2;
            var smallY=evt.pageY-$fagBox.offset().top-$smallBox.height()/2
           // console.log(smallX,smallY);

            //判断边界

            if(smallX<0){
                smallX=0;
            }else if(smallX>$fagBox.width()-$smallBox.width()){
                smallX=$fagBox.width()-$smallBox.width()
            }
            if(smallY<0){
                smallY=0;
            }else if(smallY>$fagBox.height()-$smallBox.height()){
                smallY=$fagBox.height()-$smallBox.height()
            }

            $smallBox.css({left:smallX+'px',top:smallY+'px'})

            var bigImgX=$bigWidth/$fagBox.width()*smallX;
            var bigImgY=$bigWidth/$fagBox.width()*smallY;

            $bigImg.css({left:-bigImgX+'px',top:-bigImgY+'px'});

        })

console.log(11111)

    });

    console.log(22222)

})










/**
 * Created by Administrator on 2017/6/30 0030.
 */

//商品部分 特惠专场
    var url = "../photo.json";
    $.getJSON(url, function (res) {
        //console.log(res)
        for (var i = 0; i < res.data.length; i++) {
            var obj = res.data[i];

            var $shopLi = $('<li class="shopLi"></li>');
            $('.shopping1').append($shopLi)

            var $shopImg = $('<img class="shop-img" src="' + obj.picUrl + '"/>');
            $shopLi.append($shopImg);

            var $shopDiv = $('<div class="shop-right"></div>');
            $shopLi.append($shopDiv);

            var $shopA1 = $('<a class="shop-title" href="index4.html">' + obj.productName + '</a>')
            $shopDiv.append($shopA1);

            var $shopOp1 = $('<p class="shopOp1">' +obj.introduce+'</p>');
            $shopDiv.append($shopOp1);

            var $shopOp2 = $('<p class="shopOp2">￥ <span>'+obj.PriceUrl+'</span> 起</p>');
            $shopDiv.append($shopOp2);

            var $shopOp3 = $('<p class="shopOp3"><a href="index4.html">' + obj.clickEnter + '</a></p>');
            $shopDiv.append($shopOp3);

        }
    })

//商品部分 今日精选
    var url = "../photo.json";
    $.getJSON(url, function (objShop) {
       // console.log(objShop)
        for (var i = 0; i < objShop.selection.length; i++) {
            var objShopping = objShop.selection[i];

            var $shopLi = $('<li class="shopLi"></li>');
            $('.shopping2').append($shopLi)

            var $shopImg = $('<img class="shop-img" data-url="index4.html" src="' + objShopping.picUrl + '"/>');
            $shopLi.append($shopImg);

            var $shopDiv = $('<div class="shop-right"></div>');
            $shopLi.append($shopDiv);

            var $shopOdiv=$('<div class="shopOdiv"></div>')
            $shopDiv.append($shopOdiv);

            var $shopSpan1=$('<span class="shopSpan">'+objShopping.bargainPrice+'</span>');
            $shopOdiv.append($shopSpan1);

            var $shopSpan2=$('<span class="shopSpan">'+objShopping.donation+'</span>');
            $shopOdiv.append($shopSpan2);
            if(objShopping.bargainPrice==""){
                $shopSpan1.removeClass('shopSpan')
            }
            if(objShopping.donation==""){
                $shopSpan2.removeClass('shopSpan')
            }
            var $shopA1 = $('<a class="shop-title"></a>');
            $shopDiv.append($shopA1);

            var $shopA2 = $('<a href="index4.html">' + objShopping.productName + '</a>');
            $shopA1.append($shopA2);

            var $shopOp1 = $('<p class="shopOp1">' +objShopping.introduce+'</p>');
            $shopDiv.append($shopOp1);

            var $shopOp2 = $('<p class="shopOp2">￥ <span>'+objShopping.Price+'</span> 起</p>');
            $shopDiv.append($shopOp2);

            var $shopOp3 = $('<p class="shopOp3"><a href="index4.html">' + objShopping.clickEnter + '</a></p>');
            $shopDiv.append($shopOp3);

        }
    })






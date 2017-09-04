/**
 * Created by Administrator on 2017/7/5 0005.
 */

$(function(){

    var jsonStr=getCookie('shopCars');

    if(jsonStr==undefined){
                            //购物车没有商品
        console.log(1111)
    }else {
        console.log(99999999999)

        var arrTwo = JSON.parse(jsonStr);

        console.log(arrTwo)
        for (var a = 0; a < arrTwo.length; a++) {
            var objj = arrTwo[a];
            var $shopDeta2 = $('.shopDeta2');

            var $ShopBox = $('<div class="shopBox"></div>')
            $shopDeta2.append($ShopBox);
            //console.log($ShopBox);

            var $carImg = $('<img class="carImg" src="' + objj.ImgUrl + '"/>');
            $ShopBox.append($carImg);

            var $carSpan = $('<span class="carSpan">' + objj.shopDel + '</span>');
            $ShopBox.append($carSpan);
			//console.log(33333);
	        var $shopul=$('<ul class="box11"><li class="carli1">'+objj.PriceUrl+'</li><li class="carli2"></li><li class="carli3">'+objj.PriceUrl+'</li><li class="carli4"></li></ul>')
	        $ShopBox.append($shopul);

            var price=objj.PriceUrl.split('￥')[1]
            console.log(price);
            $('.carli3').html(price*objj.num)

	        var $carBtn=$('<button class="btnL">-</button><input class="carInput" type="text" value="'+objj.num+'"/><button class="btnR">+</button>')
			$('.carli2').append($carBtn)

			var $carA5=$('<a href="javascript:;">删除</a>');
            $('.carli4').append($carA5)


        }

    }

    $carA5.click(function(){
        removeCookie('shopCars');
    })
})



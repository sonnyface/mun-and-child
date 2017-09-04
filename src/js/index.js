
$(function(){


    var url="http://goods.api.muyingzhijia.com//json/reply/QueryIndexCategorys?callback=?&ParentIds=%5B%7B+%22CategoryId%22%3A+11%7D%2C%7B+%22CategoryId%22%3A+2%7D%2C%7B+%22CategoryId%22%3A+441%7D%2C%7B+%22CategoryId%22%3A+442%7D%2C%7B+%22CategoryId%22%3A+6%7D%2C%7B+%22CategoryId%22%3A+3%7D%2C%7B+%22CategoryId%22%3A+7%7D%2C%7B+%22CategoryId%22%3A+9%7D%2C%7B+%22CategoryId%22%3A+443%7D%5D&_=1498720870466";

    $.getJSON(url,function(res){
        //console.log(res);
            //二级导航
          for(var i=0;i<res.QueryIndexCategorysDtos.length;i++){
            var tmp=res.QueryIndexCategorysDtos[i];
            //console.log(tmp);
            var $li=$('<li class="list1"></li>');
            $('.port').append($li);
            var $a=$('<a class="list1-a" href="index4.html"></a>')
            $li.append($a);
            $a.html(tmp.VchCateName);
           // console.log(tmp.VchCateName)
              var $span=$('<span class="tips1"></span>');
              $li.append($span);
              var $b=$('<b class="tips11"></b>')
              $li.append($b);


              //创建生成盒子能够包含三级导航内容
              var $odiv=$('<div class="navBox"></div>');
              $li.append($odiv);

              var  $odiv1=$('<div class="navBox1"></div>');
              $odiv.append($odiv1);

              var  $odiv2=$('<div class="navBox2"></div>');
              $odiv.append($odiv2);


          //三级导航内容

            for(var k=0;k<tmp.GetTwoCategory.length;k++){
                var odt=tmp.GetTwoCategory[k];
                //console.log(odt)
                var $dt=$('<dt></dt>');
                $odiv1.append($dt);
                $dt.html(odt.TwoCatetory.VchCateName)

                for(var m=0;m<odt.TwoCatetory.ThreeCategory.length;m++){
                    var oDD=odt.TwoCatetory.ThreeCategory[m];
                   // console.log(oDD);

                       var $dd=$('<dd></dd>');
                       $odiv1.append($dd);
                       $dd.html(oDD.VchCateName)
                       var $strong=$('<strong> | </strong>')
                       $dd.append($strong);
                  }

            }


              //最右侧图片  三级导航

              for(var j=0;j<tmp.GetTwoBrand.length;j++){
                  var ttp=tmp.GetTwoBrand[j];
                 // console.log(ttp);
                  var $oaa=$('<img class="img1" src="'+ttp.PictureUrl+'"/>')
                  $odiv2.append($oaa);

              }
        }
    })

})



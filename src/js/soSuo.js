/**
 * Created by Administrator on 2017/7/5 0005.
 */



$(function(){

    var $soSuoIpt=$('.soSuoIpt');
    var $soSuo=$('.soSuo');

    $soSuoIpt.keyup(function(){

        if($soSuoIpt.val()){
            $soSuo.css({display:'block'})
        }else{
            $soSuo.css({display:'none'})
        }

        var url='https://suggest.taobao.com/sug?code=utf-8&q='+$soSuoIpt.val()+'&_ksTS=1497502106521_309&callback=?&k=1&area=c2c&bucketid=9';

        $.getJSON(url,function(res){


            $soSuo.html('');
                //判断是否有值
               if(res.magic) {

                   for(var i=0;i<res.result.length;i++) {
                       var resArr = res.result[i];
                       var title = resArr[0];
                       console.log(title)


                       var $oli=$('<li class="soSuoLi"><span>' + title + '</span></li>')
                       $soSuo.append($oli);



                   }



               }
        })
    })

})


/**
 * Created by Administrator on 2017/7/6 0006.
 */


$(function(){

   var $box2=$('.box');
   var $ul2=$('.ul2 ');
   var $gooda=$('.gooda');

console.log(888)
    var url='https://sclub.jd.com/comment/productPageComments.action?callback=?&productId=3311987&score=0&sortType=5&page=0&pageSize=10&isShadowSku=0&fold=1'
    $.getJSON(url,function(ott){
      console.log(ott) ;

        for (let i = 0; i < ott.hotCommentTagStatistics.length; i++){
            var hot1 = ott.hotCommentTagStatistics[i].name;
            var hot2 = ott.hotCommentTagStatistics[i].count;
            var  $OLias=$('<li class="list"></li>')
            $OLias.html(hot1+hot2);
            $ul2.append($OLias);

        }

        var  $goodrate=ott.productCommentSummary.goodRateShow;
        var $goodR=$('<div class="goodR">'+$goodrate+'</div>')
        $gooda.append($goodR);
        var $oSpans=$('<span>%</span>');
        $gooda.append($oSpans);

        var $pdm=$('.pdm');
        var $oLis=$('.pdm li')

        // $('.list1').html( $('.list1').html()+'('+ott.productCommentSummary.commentCountStr+')');
        //
        // $('.list2').html( $('.list2').html()+'('+ott.imageListCount+')');
        //
        // $('.list3').html( $('.list3').html()+'('+ott.productCommentSummary.afterCountStr+')');
        // $('.list4').html( $('.list4').html()+'('+ott.productCommentSummary.commentCountStr+')');
        // $('.list5').html( $('.list5').html()+'('+ott.productCommentSummary.generalCountStr+')');
        // $('.list6').html( $('.list6').html()+'('+ott.productCommentSummary.poorCountStr+')');


        var $ul3=$('.ptm');
        for(var l=0;l<ott.comments.length;l++){
            var lia=ott.comments[l];
            var $olia=$('<li class="ptmLi"></li>')
            $ul3.append($olia);

            var $odiv1=$('<div class="odiv1"></div>')
            $olia.append($odiv1);

            var $name=$('<div class="name"><img src="http://'+lia.userImageUrl+'"/>'+lia.nickname+'<span>'+lia.userLevelName+'</span></div>')
            $odiv1.append($name);

            //左边的内容
            var $odiv2=$('<div class="odiv2"></div>')
            $olia.append($odiv2);

            //评价星星

            var $rightDiv=$('<div class="rightDiv"><span style="background-position-x:'+16*(lia.score-5)+'px;"></span></div>')
            $odiv2.append($rightDiv);

            //评价文字内容
            var $rightP=$('<div class="rightP">'+lia.content+'</div>')
            $odiv2.append($rightP);

            //购买内容详情

            var $btn=$('<div class="btn"></div>')
            $odiv2.append($btn);

            var $leftdiv=$('<div class="leftdiv"><span>'+lia.productColor+'</span><span>'+lia.referenceTime+'</span></div>')
            $btn.append($leftdiv);

            //购买评论数

            var $rgtdiv=$('<div class="rgtdiv"><a href="javascript:;">举报</a><a class="iconfont" href="javascript:;">&#xe63b;&nbsp;'+lia.usefulVoteCount+'</a><a class="iconfont" href="javascript:;">&#xe60a;&nbsp;'+lia.replyCount+'</a></div>')
            $btn.append($rgtdiv);


        }

    })


})
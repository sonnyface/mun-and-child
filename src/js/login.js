/**
 * Created by Administrator on 2017/7/6 0006.
 */
/**
 * Created by Administrator on 2017/7/6 0006.
 */

$(function(){
    console.log(1111)
    var $lis=$('.option');

    var isUserName = false;
    var isMail = false;
    var isFirstPassword = false;

    ////得到验证码

    $('.formImgA').click(function(){
        $('.formImg').remove();

        var number=0;
        for(var i=0;i<=9;i++){
            var numer=parseInt(Math.random()*10);
            number=numer+number
        }
        console.log(number);
        var url='http://www.muyingzhijia.com/validate/imageRegisterCode.aspx?id='+number;
        var $formImg=$('<img class="formImg" />');
        $formImg.attr('src',url);
        $('.pic1').prepend($formImg);

    })
console.log(2222);

    for(var i=0;i<$lis.length;i++){
        if(i==0){
            $lis[i].onkeyup = function () {
                if(checkisUserName($(this).val()) ||checkIsEmail($(this).val()) ){
                    $(this).next().html('√')
                    isUserName = true;
                    isMail = true;
                }else{
                    $(this).next().html('输入有误')
                    isUserName = false;
                    isMail = false;
                }

            }
        }else if(i==1){

            $lis[i].onkeyup = function () {
                if(checkIsPassword($(this).val())){
                    $(this).next().html('√')
                    ischeckIsPassword = true;
                }else{
                    $(this).next().html('输入有误')
                    ischeckIsPassword = false;
                }

            }


        } else if(i == 4){
            $lis[i].onclick = function () {
                //检查必填项
                if($('.option1').val().length && $('.option2').val().length&&$('.option3').val().length){
                    if(isUserName || isMail  && isFirstPassword){
                        alert('可以注册了')

                        if($('.option4').value()){
                            if(isUserName == false){
                                alert(' 请核对信息')
                            }else{
                                alert('可以注册了')
                            }
                        }else{
                            alert('可以注册了')
                        }

                    }else {
                        alert('必填项格式不对')
                    }
                }else{

                    alert('必填项 没有填写')
                }

            }
        }

    }


})


function checkPasswordIsEqul(pd1,pd2) {
    return pd1 == pd2;
}

function checkPasswordStrong(pd) {
    console.log(2)
    //显示的内容  弱 中等

    if(pd.length == 0){
        $('.level1').css({background:''});
        $('.level2').css({background:''})
        $('.level3').css({background:''})
        return;
    }

    var str = pd;
    //console.log(str)
    //设定三个标准，表示是否包含数字、字母、特殊符号
    var hasNum = false;
    var hasChar = false;
    var hasSign = false;

    for(var i=0;i<str.length;i++){

        var char = str[i];//拿到每一个字符
        if(char >= '0' && char <= '9'){//说明出现了数字
            hasNum = true;
        }else if( char >= 'a' && char <='z'){
            hasChar = true;
        }else if( char >= 'A' && char <='Z'){
            hasChar = true;
        }else {
            hasSign = true;
        }

    }
    console.log(hasChar)


    if(hasSign ){

        $('.level1').css({background:'red'});
        $('.level2').css({background:'orange'})
        $('.level3').css({background:'green'})

    }else if(hasNum && hasChar){
        //中等
        $('.level1').css({background:'red'});
        $('.level2').css({background:'orange'})
        $('.level3').css({background:'silver'})


    }else {
        $('.level1').css({background:'red'});
        $('.level2').css({background:'silver'})
        $('.level3').css({background:'silver'})

    }
}


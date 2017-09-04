/**
 * Created by Administrator on 2017/7/6 0006.
 */

    $(function(){
        console.log(1111)
        var $lis=$('.iptOne');

        //var isUserName = false;
        //var isMail = false;
        var isFirstPassword = false;
        var isPasswordEqul = false;
        var ischeckFileIPhone = false;
        var ischeckPasswordIsEqul=false;

        $('.formImgA').click(function(){
            $('.formImg').remove();

            var num=0;
            for(var i=0;i<=9;i++){
                var numer=parseInt(Math.random()*10);
                num=numer+num
            }
            console.log(num);
            var url='http://www.muyingzhijia.com/validate/imageRegisterCode.aspx?id='+num;
             var $formImg=$('<img class="formImg" />');
            $formImg.attr('src',url);
            $('.pic1').prepend($formImg);

        })

        for(var i=0;i<$lis.length;i++){
            if(i==0){
                $lis[i].onkeyup = function () {
                    if(checkFileIPhone($(this).val())){
                        $(this).next().html('√')
                        ischeckFileIPhone = true;
                    }else{
                        $(this).next().html('输入有误')
                        ischeckFileIPhone = false;
                    }

                }
            }else if(i==1){

                $lis[i].onkeyup = function () {
                    if(checkIsPassword(($(this).val()))){
                        isFirstPassword = true;
                        $(this).next().html('√')
                        //密码强度判断
                        console.log(this.value)

                    }else{
                        isFirstPassword = false;
                        $(this).next().html('密码不能为空')

                    }
                    checkPasswordStrong(($(this).val()));
                }

            }else  if(i ==2){
                $lis[i].onkeyup = function () {

                    if(checkPasswordIsEqul(($('.iptOne1').val()),$('.iptOne2').val())){
                        ischeckPasswordIsEqul= true;
                        $(this).next().html('√');

                    }else{
                        ischeckPasswordIsEqul = false;
                        $(this).next().html('输入有误')
                    }
                }
            } else if(i == 6){
                $lis[i].onclick = function () {
                    //检查必填项
                    if($('.iptOne0').val().length && $('.iptOne1').val().length&&$('.iptOne2').val().length&& $('.iptOne3').val().length&& $('.iptOne4').val().length&& $('.iptOne5').val().length&& $('.iptOne6').val().length){
                        if(ischeckFileIPhone && isPasswordEqul && isFirstPassword){
                            alert('可以注册了')

                            if($('.iptOne5').value()){
                                if(ischeckFileIPhone == false){
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

        $('.level1').css({display:'block',background:'red'});
        $('.level2').css({display:'block',background:'orange'})
        $('.level3').css({display:'block',background:'green'})

    }else if(hasNum && hasChar){
        //中等
        $('.level1').css({display:'block',background:'red'});
        $('.level2').css({display:'block',background:'orange'})
        $('.level3').css({background:''})


    }else {
        $('.level1').css({display:'block',background:'red'});
        $('.level2').css({background:''})
        $('.level3').css({background:''})

    }
}


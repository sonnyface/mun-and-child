/**
 * Created by Administrator on 2017/7/6 0006.
 */

window.onload=function(){
    var talkTop=document.getElementsByClassName('talkTop')[0];
    var btng=document.getElementsByClassName('btng')[0];
    var talkTxt=document.getElementsByClassName('talkTxt')[0];
    var talkIpt =document.getElementsByClassName('talkIpt')[0];
    var btnf=document.getElementsByClassName('btnf')[0];
    var btng=document.getElementsByClassName('btng')[0];
    var talkTop3 =document.getElementsByClassName('talkTop3')[0];
    var shopOnline=document.getElementsByClassName('shopOnline')[0];



    //鼠标事件
    talkTop.onmousedown = function(event){
        var evt=event || window.event;

        var box = Base.getByClassName("talkTxt");
        console.log(talkTxt);

        //计算鼠标当前和窗口左上角的距离
        var disX = evt.offsetX;
        var disY = evt.offsetY;

        document.onmousemove = function(ev){
            var e=ev || window.event;

            box.style.left = e.clientX - disX+"px";
            box.style.top = e.clientY - disY+"px";
        };

        document.onmouseup = function(){
            document.onmousemove = "";
        }
    };

    btnf.onclick=function () {
        sendMsg();
    }


    //快捷键 发送
    document.onkeypress = function (event) {
        var e = event || window.event;
        var keycode = e.keyCode || e.which;
        console.log(e)
        if( keycode==10){//判断同时按下ctrl 和enter
            sendMsg()
        }
    }

    function sendMsg() {
        var input = document.getElementsByClassName('talkIpt')[0];//查找缓存
        var ul = document.getElementById('content');

        var newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        newLi.className = 'msgContent right';
        ul.appendChild(newLi);

        var div = document.createElement('div');
        div.style = 'clear:both';
        ul.appendChild(div);


        ajax({
            url:'http://jisuznwd.market.alicloudapi.com/iqa/query?question='+input.value,
            success:function (res) {
//                console.log(res)
                var obj = JSON.parse(res);
                console.log(obj.result.content)
                var tmp = obj.result.content;

                var newLi = document.createElement('li');
                newLi.innerHTML = tmp;
                newLi.className = 'msgContent left';
                ul.appendChild(newLi);

                var div = document.createElement('div');
                div.style = 'clear:both';
                ul.appendChild(div);
                input.value = '';
                newLi.scrollIntoView();//将元素滚动到可见位置
            }
        })

        input.value = '';
        newLi.scrollIntoView();//将元素滚动到可见位置
    }

}

function ajax(obj) {

    var xhr = null;
    if(window.ActiveXObject){
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }else{
        xhr = new XMLHttpRequest();
    }
    //打开与服务器的连接
    if(obj.method){
        xhr.open(obj.method,obj.url,true);
    }else{
        xhr.open('get',obj.url,true);
    }
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization","APPCODE b56ceeed6e2449fc8985d4fe85769899")

    // 发送请求
    //console.log(res);
    //回调函数
    xhr.onreadystatechange = function () {
//                console.log(xhr.readyState)
        if(xhr.readyState == 4){
            //数据接收完毕
            if(xhr.status == 200){
//                        console.log('请求成功',xhr.responseText)
                if(obj.success){
                    obj.success(xhr.responseText)
                }

            }else{
//                        console.log(xhr.status,'请求出错')
                if(obj.failure){
                    obj.failure('请求失败')
                }
            }
        }
    }
//            var sendData = 'username=zhangsan&password=123456';
    if( obj.method == undefined ||obj.method.toLowerCase() =='get'){
        xhr.send(null);//
    }else{
        xhr.send(obj.params);//

    }
}


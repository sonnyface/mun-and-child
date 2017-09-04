/**
 * Created by Administrator on 2017/7/5 0005.
 */

function callback(box){

    var ipt=document.getElementsByClassName('ipt1')[0];
    var oul=document.getElementsByClassName('search')[0];

    oul.innerHTML='';
    for(var i=0;i<box.result.length;i++) {
        var resArr = box.result[i];

        var title = resArr[0];
        //str+="<li>"+title+"</li>";
        var oli = document.createElement('li');

        oli.innerHTML = '<span>' + title + '</span>';
        oli.className = 'searchitem';
        oul.appendChild(oli);



        var index=i+1;
        for(var j=0;j<box.magic.length;j++){
            var obj=box.magic[j];


            if(index==obj.index){
                var odiv=document.createElement('div');
                oli.appendChild(odiv);
                odiv.className='box2';

                var h2=document.createElement('h2');
                h2.innerHTML=title;
                odiv.appendChild(h2);
                h2.className='h2';


                for(var l=0;l<obj.data.length;l++){
                    var tmp=obj.data[l];
                    var tmpDiv=document.createElement('div');
                    odiv.appendChild(tmpDiv);
                    tmpDiv.className='tmpdiv';


                    for(var k=0;k<tmp.length;k++){
                        var titer=tmp[k].title;
                        console.log(titer)
                        var titDiv=document.createElement('div');
                        titDiv.className='box5';
                        tmpDiv.appendChild(titDiv);
                        titDiv.innerHTML=titer;


                        if(tmp[k].type || tmp[k].type=='hot'){
                            titDiv.style.color='red';

                        }

                    }

                }

            }


        }

    }


    if(oul.innerHTML!=''){
        oul.style.display='block';
    }else{
        oul.style.display='none';
    }

}


window.onload=function(){
    var ul1=document.getElementsByClassName('search')[0];
    var ipt=document.getElementsByClassName('ipt1')[0];
    ipt.addEventListener('keyup',function(){


        var url='https://suggest.taobao.com/sug?code=utf-8&q='+ipt.value+'&_ksTS=1497502106521_309&callback=callback&k=1&area=c2c&bucketid=9';
        var sc=document.createElement('script');
        sc.src=url;

        document.body.appendChild(sc);
        document.body.removeChild(sc);

    })

}



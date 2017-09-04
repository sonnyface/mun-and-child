/**
 * Created by jameswatt2008 on 2017/2/15.
 */


var Base = {
    name:'aaa',
    age:18,
    getByClassName:function (className) {
        return this.getELesByClassName(className)[0];
    },
    getELesByClassName:function (name) {
        if(document.getElementsByClassName == undefined){//判断浏览器支不支持 getElementsByClassName
            //遍历所有dom节点，找出类名是name
            var res = [];
            var domlist = document.getElementsByTagName('*');//* 通配符
            for(var i=0;i<domlist.length;i++){
                var dom = domlist[i];
                //dom的类名是否 name

                //获取对象属性 obj.name   obj[name]

                //dom.class 不能使用 class 关键字
                //dom.className  dom['class']
                // console.log(dom.class,dom.className,dom['class'])
                if(dom.className == name){
                    res.push(dom);
                }

            }

            return res;

        }else {
            return  document.getElementsByClassName(name);
        }
    },
    getStyle:function(obj) {
        if(obj.currentStyle){//说明current对象 存在  ie
            //ie
            return obj.currentStyle;
        }else{
            //fei ie
            return getComputedStyle(obj);

        }
}


};
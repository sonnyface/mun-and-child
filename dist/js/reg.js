/**
 * Created by jameswatt2008 on 2017/2/17.
 */

//验证用户名的
function checkisUserName (name) {
    var re =  /^[0-9a-z]{1,16}$/;
    return re.test(name);
}
//
function checkIsEmail(email) {
    var re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    return re.test(email)
}

function checkIsPassword(pw) {
    if(pw.length >0){
        var re = /[\u2E80-\u9FFF]+/;
        return !re.test(pw);
    }else{
        return false;
    }
}
function checkFileIsPhoto(file) {

    var re = /^.+\.(jpg|jpeg|png)$/i;
    return re.test(file);

}

function checkFileIPhone(file) {

    var re = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    return re.test(file);

}
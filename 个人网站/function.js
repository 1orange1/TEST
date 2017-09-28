/**
 * Created by wuzhi on 2017/9/27.
 */

//让byClassName兼容
function getById(classname,context,tag){
    context = context || document;
    var result = [];
    var arr = context.getElementsByTagName("*");
    if(document.getElementsByClassName && !tag){
        return context.getElementsByClassName(classname);
    }
    tag = tag || "*";
    var aElem = context.getElementsByTagName(tag);
    for(var i=0; i<arr.length; i++){
        var re = new RegExp("\\b" + className + "\\b");
        if(re.test(aElem[i].className)){
            result.push(aElem[i]);
        }
    }
    return result;
}
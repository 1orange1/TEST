/**
 * Created by wuzhi on 2017/10/31.
 */
require.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require(["jquery","requirejs/弹出层/js/dialog1"],function($, dialog){
    $('#open').on("click",function () {
        var setting = {
            width:400,
            height:300,
            title:"登陆",
            content : "login.html"
        };
       dialog.open();
    });
});
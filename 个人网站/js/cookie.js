var Cookie = {
    setCookie: function(key, val, time) { //设置cookie方法 ，过期日期的时间
        var strsec = getsec(time);
        var exp = new Date();//获取当前时间  
        exp.setTime(exp.getTime() + strsec * 1);
        document.cookie = key + "=" + val + ";expires=" + exp.toGMTString(); //设置cookie 
    },
    getCookie: function(key) { //获取cookie方法  
        /*获取cookie参数*/
        var cookies = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符  
        var arrCookie = cookies.split(";") //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中  
        var tips; //声明变量tips  
        for(var i = 0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量  
            var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组  
            if(key == arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作  
                tips = arr[1]; //将cookie的值赋给变量tips  
                break; //终止for循环遍历  
            }
        }
        return tips;
    },
    deleteCookie: function(key) { //删除cookie方法  
        var date = new Date(); //获取当前时间  
        date.setTime(date.getTime() - 10000); //将date设置为过去的时间  
        document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie  
    }
};

function getsec(str) {
var str1 = str.substring(1, str.length) * 1;
var str2 = str.substring(0, 1);
if(str2 == "s") {
    return str1 * 1000;
} else if(str2 == "h") {
    return str1 * 60 * 60 * 1000;
} else if(str2 == "d") {
    return str1 * 24 * 60 * 60 * 1000;
}
}

// 获取哈希值
        var asa = Cookie.getCookie('zhu');
        console.log(Cookie.getCookie('zhu'));
        // 获取当前时间
        setInterval(function(){
            var time = new Date();
            var mytime = time.toLocaleString( );
            $('.time').html(mytime);
        },1000)

        // 判断是否是登录状态
            if(asa){
                $('#user').html(asa);
            }else{
                window.open('../login.html','_self');
            }
        // 退出登录
        $('#btn_tui').on('click',function(){
            window.location.replace('../index.html')
            Cookie.deleteCookie('zhu');
        })
        var o = 0;
        $('.user_lie').on('click',function(){
            $('.Sec_ul li').removeClass('dis_b');
            $('.user_mo').addClass('dis_b');
            // $('#studentTable').html('');
            // 数据获取函数
            $.post('../php/getOne.php',function(zong){
                // 获取总条数
                var con = zong-5;
                $('#pp').html(con);
                // 渲染数据
                lan();
                // 向下翻页
                $('#xia_btn').on('click',function(){
                    o++;
                    len(con);
                    console.log(o);
                    lan();
                })
                // 向上翻页
                $('#shang_btn').on('click',function(){
                    o--;
                    len(con);
                    console.log(o);
                    lan();
                })
            })
        })
        
        function lan(){
            $('#tbody').html('');
            $.post('../php/getAll.php',{o:o},function(data){
                var dataObj = typeof data == 'object' ? data : eval('('+data+')');
                var list = dataObj.data;
                console.log(list);
                $.each(list,function (index,item) {
                    var tr = $('<tr><th>'+item.ID+'</th><th>'+item.username+'</th><th>'+item.psw+'</th><th>'+item.sex+'</th><th>'+item.phone+'</th><th>'+item.msn+'</th><th><a href="javascript:" class="delete">删除</a></th></tr>');
                    tr.appendTo($('#tbody'));
                })
                $('.delete').click(function(){
                    var nb = $(this).parent().parent().children().eq(0).html();
                    var de = $(this).parent().parent();
                    console.log(nb);
                    $.post('../php/delete.php',{nb:nb},function(data){
                        if(parseInt(data)){
                            de.remove();
                            alert('成功删除一条数据。');
                        }else{
                            alert('服务器异常，删除失败');
                        }
                    })
                })
            })
        }
        function len(con){
            if(o > con){
                o = con;
            }
            if(o < 0){
                o = 0;
            }
        }
        var lock = true;
        $('.user_get').on('click',function(){
            $('.Sec_ul li').removeClass('dis_b');
            $('.user_chuang').addClass('dis_b');
            $.post('../php/check.php',function(data){
                $('#id').val(data);
            })
            var myreg=/^[a-zA-Z0-9_-]{4,16}$/;//用户名验证
            $('#username').on('change',function(){
                if(!myreg.test($('#username').val())){
                    alert('请输入用户名，4到16位（字母，数字，下划线，减号）');
                    $('#username').val('');
                    return;
                }
                $.get('../php/get.php',{user:$('#username').val()},function(data){
                    console.log(data);
                    if (parseInt(data)) {
                        lock = true;
                        $('#ups').html('该账号已注册 ，请重新输入');
                    }else{
                        lock = false;
                        $('#ups').html('可以注册');
                    }
                })
            })
            $('#btn').on('click',function(){
                var op = {
                    username:$('#username').val(),
                    psw:$('#psw').val(),
                    phone:$('#phone').val(),
                    sex:$('.sex:checked').val(),
                    msn:$('#msn').val(),
                }
                if(op.username == ''||op.psw == ''||op.phone == ''||op.msn == ''||lock){
                    alert('内容不能为空');
                    return;
                }
                
                $.post('../php/add.php',op,function(data){
                    if(parseInt(data)){
                        alert('添加成功！！！');
                        $('#username').val('');
                        $('#psw').val('');
                        $('#phone').val('');
                        $('#msn').val('');
                    }else{
                        alert('服务器异常，添加失败');
                    }
                })
            })
        })
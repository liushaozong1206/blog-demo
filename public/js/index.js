/**
 * 作者：刘少宗
 * 时间：2017/3/3
 * 描述：当前文件描述
 */

$(function(){



    $('.login_tab .zhuce').find('span').on('click',function(){

        $(this).parent().parent().parent().removeClass('on')
        $('.zhuce_tab').addClass('on');

    });
    $('.zhuce_tab .zhuce').find('span').on('click',function(){

        $(this).parent().parent().parent().removeClass('on')
        $('.login_tab').addClass('on');

    })
    $('.zhuce_tab .zhuce_btn').on('click',function(){
        alert($('.inputB').find('[name=username]').val())
        $.ajax({
            type:'post',
            usr:'api/user/register',
            data:{
                username:$('.inputB').find('[name=username]').val(),
                password:$('.inputB').find('[name=password]').val(),
                repassword:$('.inputB').find('[name=repassword]').val(),
            },
            dataType:'json',
            success:function(result){
                console.log(result)
            }
        })

    })


})
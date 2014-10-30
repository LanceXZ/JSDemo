/**
 * Created by Administrator on 2014/10/28.
 */
$(function(){
    $.each($('[valType]'),function(i,n){
        $(n).poshytip({
            className: 'tip-yellowsimple',
            content: $(n).attr('msg'),
            showOn: 'none',
            alignTo: 'target',
            alignX: 'right',
            alignY: 'center',
            offsetX: 5,
            offsetY: 10
        });
        $(n).bind('blur',validateBefore)
    })

    function validateBefore(){
        var flag = true;
        var valType = $(this).attr('valType');
        var msg = $(this).attr('msg');

        if(valType == 'required'){
            if($(this).val()==''){
                flag = false;
            }
        }else{
            flag = $(this).val()!=''&& Validator({rule:valType,data:$(this).val()})
        }

        $(this).poshytip('hide');
        if(!flag){
            $(this).poshytip('show');
        }

    }
    $.extend({
        Validator:function(){

        }
    })
    /*验证核心*/
    var Validator = function(param){
        var defaultVal = {
            NUMBER : "^[0-9]*$",
            TEL : "^0(10|2[0-5789]|\\d{3})-\\d{7,8}$",
            IP : "^((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]|[*])$",
            MOBILE : "^1(3[0-9]|5[0-35-9]|8[0235-9])\\d{8}$",
            MAIL : "^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$",
            IDENTITY : "((11|12|13|14|15|21|22|23|31|32|33|34|35|36|37|41|42|43|44|45|46|50|51|52|53|54|61|62|63|64|65|71|81|82|91)\\d{4})((((19|20)(([02468][048])|([13579][26]))0229))|((20[0-9][0-9])|(19[0-9][0-9]))((((0[1-9])|(1[0-2]))((0[1-9])|(1\\d)|(2[0-8])))|((((0[1,3-9])|(1[0-2]))(29|30))|(((0[13578])|(1[02]))31))))((\\d{3}(x|X))|(\\d{4}))",
            CHINESE : "^([\u4E00-\uFA29]|[\uE7C7-\uE7F3])*$",
            URL : "^http[s]?://[\\w\\.\\-]+$"
        }
        var flag = false;
        if(param.rule in defaultVal){
            flag = new RegExp(defaultVal[param.rule]).test(param.data);
        }
        return flag;
    }
    /*验证核心 End*/
})
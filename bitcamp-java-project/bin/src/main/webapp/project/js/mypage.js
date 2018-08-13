$(document).ready(function(){
    $(".ib-mp-st").mouseover(function(){
        $("#black-fade").css("display", "flex");
    });
    $(".ib-mp-st").mouseout(function(){
        $("#black-fade").css("display", "none");
    });
});
var flag = false;

$(".mainDiv").click(function() {
    if(!flag) {
        $(this).css("background", "yellow");
        flag = true;
    } else {
        $(this).css("background", "red");
        flag = false;
    }
});
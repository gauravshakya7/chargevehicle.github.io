$(".p1 span").each(function (){
    $(this).animate(
        {
            width: $(this).attr("dp") + "%",
        },
        1000
    );
    $(this).text($(this).attr("dp")+"%");
});
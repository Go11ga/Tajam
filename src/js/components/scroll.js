/* Smooth scroll */
(function(){

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data("scroll");
        let blockOffset = $(blockId).offset().top - $("#header").outerHeight();

        $("html,body").animate({
            scrollTop: blockOffset
        },1000);

        $(".nav__item").removeClass("nav__item--active");
        $this.addClass("nav__item--active");

    });

    $("#nav-toggle").on("click", function(){
        $("#nav").toggleClass("nav--active");
        $(".intro").toggleClass("intro--active");
    });

}());

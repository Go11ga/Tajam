/* Header block */
(function(){

    let header = document.querySelector("#header");

    window.addEventListener("scroll", showHeader);

    function showHeader() {
        if (window.pageYOffset > 200) {
            header.classList.add("header--fixed");
        }else{
            header.classList.remove("header--fixed");
        }
    }

}());

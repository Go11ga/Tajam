/* Links shutdown */
(function(){

    let allLinks = document.querySelectorAll("a");

    allLinks[8].addEventListener("click", function(event){
        event.preventDefault();
    });

    for (let i = 16; i <= 33; i++) {
        allLinks[i].addEventListener("click", function(event){
            event.preventDefault();
        });
    }

}());

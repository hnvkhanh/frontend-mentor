const items =document.getElementsByClassName("item-header");
const length = items.length;

for (var i = 0; i < length; i++){
    items[i].addEventListener("mouseover", function(event){
        this.style.color = "hsl(14, 88%, 65%)";
        this.addEventListener('mouseout', function(event){
            this.style.color = "hsl(238, 29%, 16%)";
        });
    });
    items[i].addEventListener("click", function(){
        this.classList.toggle("heavy-font");
        this.getElementsByTagName("I")[0].classList.toggle("fa-chevron-up").toggle("fa-chevron-down");
    });
    
}



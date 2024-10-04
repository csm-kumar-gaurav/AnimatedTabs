/*
Return following object references
    1. create 'menu' object using '.menu-item' CSS class reference (i.e., CSS stylings for .menu-item class selector)
    2. create 'firstactive' object using '.item-is-active' CSS class reference (i.e., CSS stylings for .item-is-active class selector)
         i. retrieve color from object- firstactive and store into object- activecolor
*/

let menu = document.querySelectorAll(".menu-item");

let firstactive = document.querySelector(".item-is-active");
let activecolor = getComputedStyle(firstactive).color;

document.body.style.backgroundColor = activecolor;

/*
    create an interactive menu where clicking on an item changes its appearance and the background color, 
    providing visual feedback to the user.
        1. The code sets up a click event listener for each item in the menu.
        2. When an item is clicked, it retrieves the computed color of the clicked item and uses it to update 
           the border color of the first child of the clicked item.
        3. If the clicked item is not already active, it changes the background color of the document body 
           to the item’s color.
        4. Finally, it ensures that only the clicked item has the item-is-active class, making it the active item.
*/

menu.forEach((item) => {
    item.addEventListener("click", function() {

        let accentColor = getComputedStyle(this).color;
        this.children[0].style.borderColor = accentColor;
        if(!this.classList.contains("item-is-active")){
            document.body.style.background = accentColor;
        }

        menu.forEach((item) => {
            item.classList.remove("item-is-active");
            this.classList.add("item-is-active");
        });
    });
});


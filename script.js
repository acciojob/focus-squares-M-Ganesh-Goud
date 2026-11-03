const boxs = document.querySelectorAll(".square");

boxs.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
        colorchange(e.target.id);
    });
 box.addEventListener("mouseout",(e)=>{
 boxs.forEach((box)=>{
	 box.style.backgroundColor = "#E6E6FA";
 })
 })
});

function colorchange(anotherbox) {
    boxs.forEach((box) => {
        if (box.id != anotherbox) {
            box.style.backgroundColor = "#6F4E37";
        }
    });
}

function changeFocus(box) {
    var selectedBox = document.getElementById(box)
    console.log(selectedBox.style.zIndex === "1")
    if(selectedBox.style.zIndex === "1"){
        selectedBox.style.zIndex = 0
        console.log("here")
    }else{
        selectedBox.style.zIndex = 1
    }

}
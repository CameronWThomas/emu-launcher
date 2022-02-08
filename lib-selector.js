
var ipcRenderer = require("electron").ipcRenderer

let fs = require('fs');
let filename = 'emulation-library-path.txt'



var submitr = document.getElementById("submit-button");
var path = document.getElementById("emu-path");

fs.readFile(filename, (err,data) => {

    if(data){
        path.value = data;
    }
});
submitr.addEventListener("click", function(e){
    console.log(path.value);

    fs.writeFileSync(filename, path.value);
    //ipcRenderer.send("asynchronus-message", "change-path");
})
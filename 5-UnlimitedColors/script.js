//genrate a random color

const randomColour = function(){

    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0 ;i < 6 ;i++ ){
        color += hex[Math.floor(Math.random()*16)];

    }
    return color;
}
let intervalId;
const startChangingColor =  function(){
if(!intervalId){
    intervalId  =  setInterval(changeBgcolor,250)
}


   function changeBgcolor (){
    document.body.style.backgroundColor = randomColour();
   }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    console.log("stopped")
    intervalId =null;
};

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)
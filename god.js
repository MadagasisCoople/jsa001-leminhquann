var i = 0;
var aicapp = document.querySelector(".aicap")
var aicap1 = document.querySelector(".aicap1")
var nha1 = document.querySelector(".nha1")
var nha2 = document.querySelector(".nha2")
nha1.style.display="none"
nha2.style.display = "none"
nha1.addEventListener("click",nhao1)
aicap1.addEventListener("click",aicap);
function aicap(){
    i++
    if (i==1){
    aicap1.innerHTML ="After Setham has been banished to the desert,RAz gives all the power to Osirisus and start a new life in Greek"
    aicap1.style.fontSize = "750%"
    aicapp.style.backgroundImage = "url('https://bookhunterclub.com/wp-content/uploads/2017/11/maxresdefault-810x456.jpg')"
    aicapp.style.backgroundSize = "100%"
    aicap1.style.color = "red"
    aicap1.style.fontFamily = "he"
    aicap1.style.fontWeight = "700"}
    if (i==2){
    aicap1.style.fontSize="1000%"
    aicap1.style.fontWeight="100"
    aicapp.style.backgroundImage = "none"
    aicapp.style.backgroundColor = "black"
    aicap1.innerHTML ="Everything is gonna be a good ending if Raz didn't disappear mysteriously in Greek"    
    aicap1.style.fontFamily = "hehe"
    }
    if (i==3){
    aicap1.style.fontSize="730%"
    aicap1.innerHTML = "In order to find out what happened,Osirisus decided to meet Hadesya cause he is reaper of Greek.But Osirisus knows there are 12 gods of Olympus rude Greek so..."
    aicapp.addEventListener("click",aicap)    
}
    if (i==4){
    aicap1.innerHTML = "Osirisus comes and asks for help from his brother,Setham"
    aicapp.style.backgroundImage = "url('https://i.pinimg.com/originals/da/12/9d/da129d5534aca15da9ef4f2b31d62102.png')"
    aicapp.style.backgroundSize = "100%"
    aicap1.style.color = "red"
    aicap1.style.fontFamily = "he"
    aicap1.style.fontWeight = "700"
}
   if (i==5){
       aicapp.style.backgroundImage = "none"
       aicap1.innerHTML = "They quickly start their journey to Greek...";
       aicap1.style.color = "red";
       aicap1.style.fontSize =  "1200%";
       aicap1.style.fontFamily= "hehe";
       aicap1.style.fontWeight= "100";
       aicapp.removeEventListener("click",aicap)
   }
   if(i==6){
       aicapp.style.backgroundImage = "url('https://wallpapercave.com/wp/Qd4BvZD.jpg')"
       aicapp.style.backgroundSize= "100%"
       aicap1.style.fontFamily= "hehehe"
       aicap1.style.fontWeight= "500"
       aicap1.style.fontSize= "1000%"
       aicap1.innerHTML = "Chapter 1. The wierd Tornado"
       aicap1.style.color = "white"
 
   }
   if (i==7){
       aicap1.style.display = "nones"
       aicapp.style.backgroundImage = "url('./picture/01.png')"
             nha1.style.display = "block"
       nha2.style.display = "block"
      aicap1.innerHTML = ""
   }
}
function nhao1(){

}
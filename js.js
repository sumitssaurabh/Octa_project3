console.log("welcome");

let songIndex = 0;


let songs= [
    {songName: "NCS - High ", filePath :"spotifyclone/1.mp3",coverPath: "cover/1.jpg"},
    {songName: "NCS - On&On", filePath :"spotifyclone/2.mp3",coverPath: "cover/1.jpg"},

    {songName: "NCS -Miracle", filePath :"spotifyclone/3.mp3",coverPath: "cover/1.jpg"},

    {songName: "NCS - Superhero ", filePath :"spotifyclone/4.mp3",coverPath: "cover/1.jpg"},
]
 
let audioElement = new Audio ('1.mp3');
audioElement.play();
 console.log(audioElement);

 let masterPlay = document.getElementById("masterPlay");
console.log("masterPlay" , masterPlay );


let myProgessBar = document.getElementById("myProgessBar");
let gif = document.getElementById('gif');
 let songItems= Array.from(document.getElementsByClassName('songItem'));


 
songItems.forEach((Element , i)=>{
    console.log(Element , i);
  Element.getElementByclassName("img")[0].src = songs[i].coverPath;
})



// addevent
// timeupdate
// handle play pouse 


function o(){
    
}
masterPlay.addEventListener('click', () =>{
     if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
     }
     else{
        audioElement.pause();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-play-pause');
        gif.style.opacity = 0;
     }
})



// lisiten event 

myProgessBar.addEventListener('timeupdate',() => {
    console.log('timeupdate');
    // update seebar6
    progress = parseInt((audioElement.currentTime / audioElement.duration)* 100);
    console.log(progress);
    myProgessBar.value = progess;
})

myProgessBar.addEventListener('change',() => {
    audioElement.currentTime = myProgessBar.value * audioElement.duration/100;
})

Array.from(
document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e) =>{
       makeAllPlays();
       songIndex = parseInt(e.target.id);
       e.target.classList.remove('fa-play');
       e.target.classList.add('fa-circle-pause');
       audioElement.src=`song/${songIndex + 1}.mp3`;
       audioElement.currentTime = 0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-circle-pause')


    })
})

document.getElementById('next').addEventListener('click' , () => {
    if(songIndex<0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-circle-pause');
    


})


document.getElementById('next').addEventListener('click' , () => {
    if(songIndex>9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-circle-pause');
    


})
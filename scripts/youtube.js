import {videos} from '../data/videos.js'


const navButtons = document.querySelectorAll('.navButton')
navButtons.forEach((buttonElement)=>{
    buttonElement.addEventListener('click',()=>{
        if(buttonElement.classList.contains("selected")){
            
            buttonElement.classList.remove("selected");
            buttonElement.classList.add("unselected");
        }else{
            turnOffPreviousButton()
            buttonElement.classList.add("selected");
            buttonElement.classList.remove("unselected");
        }
    })
})
function turnOffPreviousButton(){
    const previousButton =document.querySelector(`.selected`);
    if(previousButton ){
        previousButton .classList.remove("selected");
    }
}


videos.forEach((video)=>{
    
    const videosHTML =`
        <div class="video-card" data-id="${video.id}" >
        <a href="video.html" class="js-video-card">
            <div class="time-re">
                <img class="videos-image" src="${video.image}" alt="">
                <p class="video-time" data-duration="${video.duration}">${video.duration}</p>
            </div>
                <div class="video-desc">
                    <img class="video-logo" src="${video.profilePicture}" alt="">
                    <div class="video-info">
                    <a href="video.html" class="video-title  limit-text-to-2-lines" data-title="${video.title} ">${video.title}</a>
                    <a href="video.html" class="channel-name" data-channel-name="${video.channelName}">${video.channelName}</a>
                        <p class="video-stats" >${video.stats.views} · ${video.stats.postTime}</p>
                    </div>
                </div>
        </a>
        </div>
        
    `
    if (document.querySelector('.js-videos') !== null){
        document.querySelector('.js-videos').innerHTML += videosHTML ;
    }
    
    let v = document.querySelectorAll('.video-card') 
    
    v.forEach((v)=>{
        v.addEventListener('click',()=>{
            videos.forEach((video)=>{
            if(v.dataset.id === video.id){
                localStorage.removeItem('videoCart')
                let videoCart = (video);
                localStorage.setItem('videoCart',JSON.stringify(videoCart));  
            }
        })  }) 
});});
const videoCarts = document.querySelectorAll('.video-card')
const sidebarBut = document.querySelector('.js-sidebar-but')
sidebarBut.addEventListener('click',()=>{
    moveContent()    
})
function moveContent(){
    const nav = document.querySelector('.js-nav');
    const body = document.body;
    const sideBar = document.querySelector('.js-side-bar-on');
    if(body.classList.contains("padding-left")&&nav.classList.contains("translatx")){
        body.classList.remove("padding-left")
        nav.classList.remove("translatx")
        sideBar.classList.remove("side-bar-on")
        sideBar.classList.add("hide")
    }else{
        body.classList.add("padding-left")
        nav.classList.add("translatx")
        sideBar.classList.add("side-bar-on")
        sideBar.classList.remove("hide")
    }
}

const body = document.body;
if(window.innerWidth <= 1092){ 
    const side = document.querySelector('.js-side-bar-f');
    const sideHeader = document.querySelector('.js-sidebar-f-header');
    document.querySelector('.js-sidebar-but').addEventListener('click',()=>{
        side.classList.add('translatxb','shadow')
        document.body.classList.add('overflow')
        side.classList.remove('translat-xb')
        sideHeader.classList.add('translatxb')
        sideHeader.classList.remove('translat-xb')
    });
    document.querySelector('.js-sidebar-f-but').addEventListener('click',()=>{
        side.classList.remove('translatxb','shadow')
        document.body.classList.remove('overflow')
        side.classList.add('translat-xb')
        sideHeader.classList.remove('translatxb')
        sideHeader.classList.add('translat-xb')
    });
}



import {videos} from '../data/videos.js'
//import {videoCart } from './youtube.js';
videos.forEach((video)=>{
    if(video.id !== JSON.parse(localStorage.getItem('videoCart')).id){
        const videoHtml =`
    <div class="side-video-card js-side-video-card" data-id="${video.id}">
        <div class="side-video-img-container">
            <img src="${video.image}" class="side-video-img">
        </div>
        <div class="side-video-info">
            <div class="side-video-title limit-text-to-2-lines">${video.title}</div>
            <div class="side-channel-name">${video.channelName}</div>
            <div class="side-video-stats">
                <span class="side-video-views">${video.stats.views}</span>
                <span class="side-video-post-time">${video.stats.postTime}</span>
            </div>
        </div>
    </div>`
    document.querySelector('.js-video-container')
        .innerHTML += videoHtml
    
    let v = document.querySelectorAll('.js-side-video-card') 
    v.forEach((v)=>{
        v.addEventListener('click',()=>{
            videos.forEach((video)=>{
            if(v.dataset.id === video.id){
                localStorage.removeItem('videoCart')
                let videoCart = (video);
                localStorage.setItem('videoCart',JSON.stringify(videoCart));  
                location.reload() 
            }
        })  })    
});
    }
    });

let videoCart = JSON.parse(localStorage.getItem('videoCart'));

const videoHTML = `
    <iframe 
        src="https://www.youtube.com/embed/${videoCart.url}">
    </iframe>
    <div class="video-title">${videoCart.title}</div>
    </div>
    <div class="top-row">
        <div class="owner-section">
            <div class="video-owner">
                <div class="profile-pictur-container " >
                    <img src="${videoCart.profilePicture}" class="profile-pictur">
                </div>
                <div class="channel-info">
                    <div class="channel-name">${videoCart.channelName}</div>
                    <div class="channel-subscribers">${videoCart.subscribers}</div>
                </div>
            </div>
            <button class="js-SubButton subButton" >Subscribe</button>
        </div>
        <div class="top-row-lift-section">
            <div class="like-section">
                <button class="like-button js-like-button">
                    <img src="images/icons/like.png" alt="" class="like-icon js-like">
                    <div class="like-number">${videoCart.likes}</div>
                </button>
                <button class="dislike-button js-like-disbutton">
                    <img src="images/icons/dislike.png" alt="" class="like-icon js-dislike">
                </button>
                <button class="share-button">
                        <img src="images/icons/share.png" alt="" class="like-icon">
                        <div class="share">Share</div>
                </button>
            </div>
            <div class="like-section">
                <button class="download-button">
                    <img src="images/icons/download.svg" alt="" class="like-icon">
                    <div class="download">Download </div>
                </button>
                <button class="clip-button">
                    <img src="images/icons/clip.png" alt="" class="like-icon">
                    <div class="clip">Clip </div>
                </button>
                <button class="save-button">
                    <img src="images/icons/save.svg" alt="" class="like-icon">
                    <div class="save">Save </div>
                </button>
            </div>
            <div>
                <button class="more-button">
                    <img src="images/icons/more.svg" alt="" class="like-icon">
                </button>
            </div>
        </div>
    </div>
    <div class="description-container">
        <div class="info-container">
            <div class="views">${videoCart.stats.views}</div>
            <div class="date">${videoCart.stats.postTime}</div>
        </div>
        <div class="description limit-text-to-4-lines">
            ${videoCart.description}
        </div>
    </div>`
    
document.title = videoCart.title
document.querySelector('.left-section')
    .innerHTML = videoHTML ;  

document.querySelector('.js-create')
    .addEventListener('click',()=>{
        if(create.src !== `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/upload.svg`){
            create.src = `images/icons/upload-darke.svg`
        }else{
            create.src = `images/icons/upload.svg`
        }
    });

    let dislike = document.querySelector('.js-dislike')
    dislike.addEventListener('click',()=>{
        if(like.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/like-darke.png`){
            like.src = `images/icons/like.png`
        }
        if(dislike.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/dislike.png`){
            dislike.src = `images/icons/dislike-darke.png`
        }else{
            dislike.src = `images/icons/dislike.png`
        }
    })

    let like = document.querySelector('.js-like')
    like.addEventListener('click',()=>{
        if(dislike.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/dislike-darke.png`){
            dislike.src = `images/icons/dislike.png`
        }
        if(like.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/like.png`){
            like.src = `images/icons/like-darke.png`
        }else{
            like.src = `images/icons/like.png`
        }
    })

const navRightButton  = document.querySelector('.js-nav-right-button');
const navLeftButton  = document.querySelector('.js-nav-left-button');
const nav = document.querySelector('.js-nav');

navRightButton.addEventListener('click',()=>{
        if(!nav.classList.contains('mid-transform')){
            firstRight();
        }else{
            secondRight();
        }     
});

navLeftButton.addEventListener('click',()=>{
        if(!nav.classList.contains('mid-transform')){
            firstLeft();
        }else{
            secondLeft();
        };
}); 


function firstRight() {
    nav.classList.add('mid-transform')
    nav.classList.remove('right-transform','origin-transform')
    navLeftButton.classList.add('display-block','mid-transformB')
    navRightButton.classList.add('mid-transformB')
    navRightButton.classList.remove('right-transformB')
    navLeftButton.classList.remove('right-transformB')
}

function secondRight() {  
    nav.classList.add('right-transform')
    nav.classList.remove('mid-transform','origin-transform')
    navRightButton.classList.add('display-none','right-transformB')
    navLeftButton.classList.add('display-block','right-transformB')
    navRightButton.classList.remove('mid-transformB')
    navLeftButton.classList.remove('mid-transformB')
}

function firstLeft() {
    nav.classList.add('mid-transform')
    nav.classList.remove('right-transform','origin-transform')
    navRightButton.classList.replace('display-none','display-block')
    navLeftButton.classList.replace('display-none','display-block') 
    navLeftButton.classList.add('mid-transformB')
    navRightButton.classList.add('mid-transformB')  
    navRightButton.classList.remove('right-transformB')
    navLeftButton.classList.remove('right-transformB') 
}

function secondLeft() {
    nav.classList.add('origin-transform')
    nav.classList.remove('right-transform','mid-transform')
    navLeftButton.classList.replace('display-block','display-none')
    navRightButton.classList.remove('right-transformB','mid-transformB')
    navLeftButton.classList.remove('right-transformB','mid-transformB') 
}
const side = document.querySelector('.js-side-bar-on');
const sideHeader = document.querySelector('.js-sidebar-on-header');
document.querySelector('.js-sidebar-but').addEventListener('click',()=>{
    side.classList.add('translatx','shadow')
    document.body.classList.add('overflow')
    side.classList.remove('translat-x')
    sideHeader.classList.add('translatx')
    sideHeader.classList.remove('translat-x')
});
document.querySelector('.js-sidebar-on-but').addEventListener('click',()=>{
    side.classList.remove('translatx','shadow')
    document.body.classList.remove('overflow')
    side.classList.add('translat-x')
    sideHeader.classList.remove('translatx')
    sideHeader.classList.add('translat-x')
});

const SubBut = document.querySelector('.js-SubButton');
SubBut.addEventListener('click',()=>{
    if(SubBut.innerText=== 'Subscribe'){
        SubBut.innerHTML = 'Subscribed';
        SubBut.classList.add('SubscribedBut');
    }else{
        SubBut.innerHTML = 'Subscribe';
        SubBut.classList.remove('SubscribedBut');
    }
})

 







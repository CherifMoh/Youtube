

const create = document.querySelector('.js-create')
const createDropdawn = document.querySelector('.js-create-dropdawn');
create.addEventListener('click',()=>{
    if(create.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/upload.svg`){
        create.src = `images/icons/upload-darke.svg`
        if(notification.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/notifications-darke.svg`){
            notification.src = `images/icons/notifications.svg`
        }   
    }else{
        create.src = `images/icons/upload.svg`
    }
    console.log(create.src)
    changeDisplay(createDropdawn)
    notificationDropdawn.classList.remove('display-block');
    profileDropdawn.classList.remove('display-block');
});


const notification = document.querySelector('.js-notification');
const notificationDropdawn = document.querySelector('.js-notification-dropdawn');
notification.addEventListener('click',()=>{
    if(notification.src === `https://cherifmoh.github.io/Youtube/Youtube.html/icons/notifications.svg`){
        notification.src = `images/icons/notifications-darke.svg`
        if(create.src === `https://cherifmoh.github.io/Youtube/Youtube.html/icons/upload-darke.svg`){
            create.src = `images/icons/upload.svg`
        }
        }else{
            notification.src = `images/icons/notifications.svg`
        }
    changeDisplay(notificationDropdawn)
    createDropdawn.classList.remove('display-block');
    profileDropdawn.classList.remove('display-block');
});

const profile = document.querySelector('.js-profile');
const profileDropdawn = document.querySelector('.js-profile-dropdawn');
profile.addEventListener('click',()=>{
    
    if(create.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/upload-darke.svg`){
        create.src = `images/icons/upload.svg`
    }
    if(notification.src === `https://cherifmoh.github.io/images/icons/notifications-darke.svg`){
        notification.src = `images/icons/notifications.svg`
    }
        
    changeDisplay(profileDropdawn)
    createDropdawn.classList.remove('display-block');
    notificationDropdawn.classList.remove('display-block');
});

document.querySelector('nav').addEventListener('click',()=>{
    removeAllDropdawn()
});
if(document.querySelector('.js-videos')){ 
    document.querySelector('.js-videos').addEventListener('click',()=>{
        removeAllDropdawn()
    });
}
function changeDisplay(item){
    if(item.classList.contains('display-block')){
        item.classList.remove('display-block');
    }else(
        item.classList.add('display-block')
    )
};

function removeAllDropdawn(){
    if(create.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/upload-darke.svg`){
        create.src = `images/icons/upload.svg`
    }
    if(notification.src === `https://cherifmoh.github.io/Youtube/Youtube.html/images/icons/notifications-darke.svg`){
        notification.src = `images/icons/notifications.svg`
    } 
    createDropdawn.classList.remove('display-block');
    searchDropdown.classList.remove('display-block');
    profileDropdawn.classList.remove('display-block');
    notificationDropdawn.classList.remove('display-block');
}
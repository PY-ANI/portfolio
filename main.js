const avatar = document.getElementById("avatar")


function animate_socials(){
    const ele = document.getElementsByClassName("socials")

    avatar.classList.toggle("avatar-effect")
    
    for (let i = 0; i < ele.length; i++) {
        const cls1 = "social-in" + (i+1)
        const cls2 = "social-out" + (i+1)

        ele[i].parentElement.classList.toggle(cls1)        
        ele[i].parentElement.classList.toggle(cls2)        
    }
}



avatar.addEventListener("click", animate_socials)
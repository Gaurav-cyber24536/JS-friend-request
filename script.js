
let liveStatus = document.querySelector("h5")
let addFriend = document.querySelector("#add")
let check = 0

addFriend.addEventListener("click",function(){
   
     if(check == 0) {
        liveStatus.innerHTML = "Request sent"
        liveStatus.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        check = 1
     } else {
        liveStatus.innerHTML = "Request removed"
        liveStatus.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        check = 0
     }
})



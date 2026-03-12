function createHeart(){

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";
heart.style.left = Math.random() * window.innerWidth + "px";
heart.style.top = "-20px";
heart.style.fontSize = "30px";

document.body.appendChild(heart);

setInterval(()=>{
heart.style.top = heart.offsetTop + 3 + "px";
},30);

}

setInterval(createHeart,500);

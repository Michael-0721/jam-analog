let clock=document.getElementById("clock")

for(let i=1;i<=12;i++){

let number=document.createElement("div")
number.className="number"
number.innerText=i

let angle=i*30
let radius=130

let x=150+radius*Math.sin(angle*Math.PI/180)
let y=150-radius*Math.cos(angle*Math.PI/180)

number.style.left=x+"px"
number.style.top=y+"px"

clock.appendChild(number)

}

function updateClock(){

let now=new Date()

let sec=now.getSeconds()
let min=now.getMinutes()
let hr=now.getHours()

let secDeg=sec*6
let minDeg=min*6
let hrDeg=hr*30+min*0.5

document.getElementById("second").style.transform=
"translateX(-50%) rotate("+secDeg+"deg)"

document.getElementById("minute").style.transform=
"translateX(-50%) rotate("+minDeg+"deg)"

document.getElementById("hour").style.transform=
"translateX(-50%) rotate("+hrDeg+"deg)"

document.getElementById("digital").innerHTML=
now.toLocaleTimeString()

document.getElementById("date").innerHTML=
now.toDateString()

}

setInterval(updateClock,1000)

updateClock()

/* background partikel */

let canvas=document.getElementById("bg")
let ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let particles=[]

for(let i=0;i<80;i++){

particles.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
dx:(Math.random()-0.5),
dy:(Math.random()-0.5)
})

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height)

particles.forEach(p=>{

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fillStyle="white"
ctx.fill()

p.x+=p.dx
p.y+=p.dy

})

requestAnimationFrame(animate)

}

animate()
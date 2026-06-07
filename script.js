let score = 0;

const quotes = [

"Happiness depends upon ourselves.",

"The purpose of life is to be happy.",

"Smile, it's free therapy.",

"Choose joy every day.",

"Happiness grows when shared.",

"Be the reason someone smiles today.",

"Small moments create big happiness."
];

function newQuote(){

let random =
Math.floor(Math.random()*quotes.length);

document.getElementById("randomQuote")
.innerHTML = quotes[random];
}

function showAdvice(){

let mood =
document.getElementById("mood").value;

let advice = "";

if(mood=="Sad")
advice="Talk to a friend, listen to uplifting music and take a short walk.";

else if(mood=="Angry")
advice="Try deep breathing and physical activity.";

else if(mood=="Confused")
advice="Write your thoughts and break the problem into smaller parts.";

else if(mood=="Stressed")
advice="Take a 5-minute meditation break.";

else if(mood=="Happy")
advice="Share your happiness with someone.";

else
advice="Channel your energy into something creative.";

document.getElementById("result")
.innerHTML = advice;
}
function calculateQuiz(){

let q1 = Number(document.getElementById("quiz1").value);
let q2 = Number(document.getElementById("quiz2").value);

let score = q1 + q2;

if(score >= 8)
{
document.getElementById("quizResult").innerHTML =
"🌟 Excellent! You have positive happiness habits.";
}
else if(score >=5)
{
document.getElementById("quizResult").innerHTML =
"😊 Good! Keep building joyful routines.";
}
else
{
document.getElementById("quizResult").innerHTML =
"💙 Small daily habits can increase happiness.";
}
}
let moods=[];

function saveMood(){

let mood =
document.getElementById("dailyMood").value;

moods.push(mood);

document.getElementById("moodHistory")
.innerHTML =
"Recent Moods: " + moods.join(" ➜ ");
}
function changeColor(color){

document.body.style.background =
color;
}
function saveMessage(){

let msg =
document.getElementById("futureMessage").value;

localStorage.setItem(
"futureMessage",
msg
);

document.getElementById("savedMessage")
.innerHTML =
"✅ Message Saved!";
}

window.onload = function(){

let saved =
localStorage.getItem("futureMessage");

if(saved)
{
document.getElementById("savedMessage")
.innerHTML =
saved;
}
}
const challenges=[

"Compliment someone today",

"Help a family member",

"Share a smile",

"Send a thank you message",

"Donate something useful",

"Hold a door open for someone",

"Write a positive note"
];

function kindnessChallenge(){

let random =
Math.floor(
Math.random()*challenges.length
);

document.getElementById("challenge")
.innerHTML =
challenges[random];
}
let badgeCount=0;

function earnBadge(){

badgeCount++;

document.getElementById("badges")
.innerHTML +=

`<span class="badge">
🏅 Badge ${badgeCount}
</span>`;
}
setInterval(()=>{

let text =
document.getElementById("breathText");

if(text.innerHTML=="Breathe In...")
{
text.innerHTML="Breathe Out...";
}
else
{
text.innerHTML="Breathe In...";
}

},4000);
let gameScore=0;

function createSmile(){

let smile =
document.createElement("div");

smile.className="smile";

smile.innerHTML="😊";

smile.style.left=
Math.random()*90+"%";

smile.style.top=
Math.random()*80+"%";

smile.onclick=function(){

gameScore++;

document.getElementById("gameScore")
.innerHTML=
"Score: "+gameScore;

smile.remove();
};

document.getElementById("gameArea")
.appendChild(smile);

setTimeout(()=>{
smile.remove();
},2000);
}

setInterval(createSmile,1500);


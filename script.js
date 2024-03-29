let rating=5;
let ratingCard=document.querySelector(".rating-card");
let successCard=document.querySelector(".success-card");
let result=document.querySelector(".success-card .result");
let ratingButtons=document.querySelectorAll(".rating-btn");
ratingButtons.forEach(btn=>{
  btn.addEventListener("click",(event)=>{
    ratingButtons.forEach(button=>{
      button.classList.remove("selected");
    });
    btn.classList.add("selected");
    rating=event.target.innerHTML;
  });
});

function submit(){
  ratingCard.classList.add("hide");
  result.innerHTML=`You selected ${rating} out of 5`;
  successCard.classList.remove("hide");
}
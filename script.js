const cards = document.querySelectorAll(".card");

let matchedCards =0;
let cardOne,cardTwo;
let disableDeck = false;

function flipCard(e){
    let clickedCard =e.target; //getting user clicked card
    
    if(clickedCard !==cardOne && !disableDeck){
    clickedCard.classList.add('flip');
    
    if(!cardOne){
        return cardOne =clickedCard; //return the cardOne valueto clickCard
    }
    cardTwo = clickedCard;
    disableDeck =true;
    let cardOneImg=cardOne.querySelector('img').src,
     cardTwoImg=cardTwo.querySelector('img').src;
     matchCards(cardOneImg,cardTwoImg);
    
}   
}
function matchCards(img1,img2){
   if(img1===img2){
    matchedCards++;
    if(matchedCards==8){
        setTimeout(() => {
            return shuffleCard();
        }, 1000); // calling shuffle function after 1 sec
    }
    cardOne.removeEventListener("click",flipCard);
    cardTwo.removeEventListener("click",flipCard);
    cardOne = cardTwo = "";
    return disableDeck =false;
   }
   setTimeout(() => {
    //add shake class to both the card after 400s
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
   }, 400);

   setTimeout(() => {
    //remove both shake and flip class from the both the card after 1.2 sec
    cardOne.classList.remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
    cardOne =  cardTwo ='';// setting both value empty
    disableDeck =false;
   },1200);
   
}
 function shuffleCard(){
    matchCards =0;

    cardOne = cardTwo = "";
    
    cards.forEach((card) => {
        card.classList.remove('flip');
        card.addEventListener('click',flipCard);
    (function shuffled()
    {
    cards.forEach(card =>{
        let randomPas = Math.floor(Math.random()*16);
        card.style.order=randomPas;
    });
    })();
    });
 }
 
//  shuffleCard();
cards.forEach(card => {
    // card.classList.add('flip');
    card.addEventListener("click",flipCard); // adding click event to all cards
});
const card_board = document.querySelector(".card_board");
const boxes = document.querySelectorAll(".box");
const successMsg = document.querySelector(".success");
const numberOfTries = document.querySelector(".number_of_tries h3");
const shuffleBtn = document.querySelector(".shuffle");

// Shuffle cards

const imagesArray = [
  "../images/facebook-svgrepo-com.svg",
  "../images/file-sharing-drive-google-svgrepo-com.svg",
  "../images/google-svgrepo-com.svg",
  "../images/windows-applications-svgrepo-com.svg",
  "../images/pay-pal-paypal-payments-platform-svgrepo-com.svg",
  "../images/snapchat-snap-chat-svgrepo-com.svg",
  "../images/twitter-svgrepo-com.svg",
  "../images/viber-chat-app-svgrepo-com.svg",
  "../images/youtube-you-tube-video-svgrepo-com.svg",
  "../images/whatsapp-whats-app-svgrepo-com.svg",
  "../images/facebook-svgrepo-com.svg",
  "../images/file-sharing-drive-google-svgrepo-com.svg",
  "../images/google-svgrepo-com.svg",
  "../images/windows-applications-svgrepo-com.svg",
  "../images/pay-pal-paypal-payments-platform-svgrepo-com.svg",
  "../images/snapchat-snap-chat-svgrepo-com.svg",
  "../images/twitter-svgrepo-com.svg",
  "../images/viber-chat-app-svgrepo-com.svg",
  "../images/youtube-you-tube-video-svgrepo-com.svg",
  "../images/whatsapp-whats-app-svgrepo-com.svg",
];

let canUserClick = false;

shuffleBtn.addEventListener("click", () => {
  let uniqueIndex = [];
  while (true) {
    let randomCardIndex = Math.floor(Math.random() * 20);
    if (uniqueIndex.length === 0) {
      uniqueIndex.push(randomCardIndex);
    } else if (uniqueIndex.length === 20) {
      break;
    } else if (uniqueIndex.length > 0) {
      if (!uniqueIndex.includes(randomCardIndex)) {
        uniqueIndex.push(randomCardIndex);
      }
    }
  }

  for (let i = 0; i < 20; i++) {
    boxes[uniqueIndex[i]].querySelector(".face.back > img").src =
      imagesArray[i];
  }

  boxes.forEach((box) => {
    box.classList.add("active");
  });

  boxes.forEach((box) => {
    setTimeout(() => {
      box.classList.remove("active");
    }, 2000);
  });
  canUserClick = true;
  console.log(canUserClick);
  // Initiate an empty array & then store a max of 2 cards in it and start comparing them to each other.
  let twoCardsArray = [];

  // This variable stores the number of YES occurrences.
  let yes = 0;
  let no = 0;

  if (canUserClick) {
    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        // When a card is clicked give it an "active" class.
        box.classList.add("active");
        twoCardsArray.push(box);
        if (twoCardsArray.length === 2) {
          if (
            twoCardsArray[0].querySelector(".face.back > img").src ==
            twoCardsArray[1].querySelector(".face.back > img").src
          ) {
            // Add 1 to the "yes" variable.
            yes += 1;

            // If the "yes" variable == 10 then the game is over.
            console.log("yes value is ", yes);
            console.log("yes length is ", yes.length);

            if (yes === 10) {
              console.log("Good job! game over.");
              successMsg.innerText = "Good job!";
            }
            // if the two cards match then keep them active and empty the array.
            twoCardsArray = [];
          } else {
            // If the cards don't match subtract one from number of tries left.
            // Number of tries left
            if (numberOfTries.innerText != 0) {
              numberOfTries.innerText -= 1;
            } else if (numberOfTries.innerText == 0) {
              successMsg.innerText = "You lost! Start a new game...";
              canUserClick = false;
            }
            // If the cards don't match remove the "active" class after 1 seconds.
            setTimeout(() => {
              twoCardsArray[0].classList.remove("active");
              twoCardsArray[1].classList.remove("active");
              twoCardsArray = [];
            }, 1000);
          }
        }
      });
    });
  }
});

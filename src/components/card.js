import {openZoomPopup} from "./popup.js";
import {cardsTemplate} from "./utils/constants.js";

//=========================================================================================================

// Создание новой карточки
function createNewCard(cardName, imageLink, likes, cardUserId, cardId, checkLikes, userId, toggleLike, removeCard) {

  const card = cardsTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const likesNumber = card.querySelector('.card__likes-number');
  const cardDelete = card.querySelector('.card__delete');
  const cardLike = card.querySelector('.card__like');

  // Присваивоение карточке введённых переменных
  cardImage.src = imageLink;
  card.querySelector('.card__title').textContent = cardName;
  cardImage.alt = cardName;
  likesNumber.textContent = likes;

  if(userId.id !== cardUserId) {
    cardDelete.classList.add('card__delete_none');
  }

  if (checkLikes !== undefined) {
    for (let i = 0; i < checkLikes.length; i++) {
      if (checkLikes[i]._id === userId.id) {
        cardLike.classList.add('card__like_active');
      }
    }
  }

  toggleLike(likesNumber, likes, cardId, cardLike);

  cardDelete.addEventListener('click', function () {removeCard(cardId)});
  cardDelete.addEventListener('click', (evt) => evt.target.closest('.card').remove());
  cardImage.addEventListener('click', openZoomPopup);
  
  return card;
};

//=========================================================================================================

export {createNewCard};

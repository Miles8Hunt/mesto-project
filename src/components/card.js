import {closePopup, openZoomPopup} from "./popup.js";
import {popupAdd, cardsList, cardsTemplate, formAdd, cardNameInput, cardLinkInput} from "./utils/utils.js";
import {pushAddCard, deleteCard, deleteLike, addLike} from "./api.js";

//=========================================================================================================

const userId = '786454dcbca3e3107e11033c';
const cardLoad = document.querySelector('.popup__submit-add');

// Инициализация заготовленных карточек
function initializeList(list) {
  list.forEach(function (item) {
    const card = createNewCard(item.name, item.link, item.likes.length, item.owner._id, item._id);
    cardsList.append(card);
  });
};

// Создание новой карточки
function createNewCard(cardName, imageLink, likes, cardUserId, cardId) {

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
  
  if(userId !== cardUserId) {
    cardDelete.classList.add('card__delete_none');
  }

  cardLike.addEventListener('click', () => {
    if(cardLike.classList.contains('card__like_active')) {
      deleteLike(cardId)
      .then(() => {
        cardLike.classList.remove('card__like_active');
        likesNumber.textContent = --likes;
      })
    } 
      else {
        addLike(cardId)
        .then(() => {
          cardLike.classList.add('card__like_active');
          likesNumber.textContent = ++likes;
        })
      };
  })

  //deleteCard(cardId);
  //cardLike.addEventListener('click', (evt) => evt.target.classList.toggle('card__like_active'));
  cardDelete.addEventListener('click', function () {deleteCard(cardId)});
  cardDelete.addEventListener('click', (evt) => evt.target.closest('.card').remove());
  cardImage.addEventListener('click', openZoomPopup);
  
  return card;
};

// Форма добавления карточки
function handleAddFormSubmit(evt) { 
  evt.preventDefault();
  const newCard = createNewCard(cardNameInput.value, cardLinkInput.value);
  cardsList.prepend(newCard);

  cardLoad.textContent = "Создание...";
  pushAddCard(cardNameInput.value, cardLinkInput.value);
  cardLoad.textContent = "Создать";
  closePopup(popupAdd);
  evt.target.reset() // Очистка формы
};

formAdd.addEventListener('submit', handleAddFormSubmit);

//=========================================================================================================

export {handleAddFormSubmit, createNewCard, initializeList};

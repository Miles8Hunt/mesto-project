import {openPopup, closePopup, closePopupEsc, openZoomPopup} from "./popup.js";
import {popupAdd, cardsList, cardsTemplate, formAdd, cardNameInput, cardLinkInput} from "./utils/utils.js";

//=========================================================================================================

// Инициализация заготовленных карточек
function initializeList(list) {
  list.forEach(function (item) {
      const card = createNewCard(item.name, item.image);
      cardsList.prepend(card);
  });
};

// Создание новой карточки
function createNewCard(cardName, imageLink) {

  const card = cardsTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');

  // Присваивоение карточке введённых переменных
  cardImage.src = imageLink;
  card.querySelector('.card__title').textContent = cardName;
  cardImage.alt = cardName;

  // Удаление, лайк, зум изображения
  card.querySelector('.card__like').addEventListener('click', (evt) => evt.target.classList.toggle('card__like_active'));
  card.querySelector('.card__delete').addEventListener('click', (evt) => evt.target.closest('.card').remove());
  cardImage.addEventListener('click', openZoomPopup);
  
  return card;
};

// Форма добавления карточки
function handleAddFormSubmit(evt) { 
  evt.preventDefault();
  const newCard = createNewCard(cardNameInput.value, cardLinkInput.value);
  cardsList.prepend(newCard);
  closePopup(popupAdd);
  evt.target.reset() // Очистка формы
};

formAdd.addEventListener('submit', handleAddFormSubmit);

//=========================================================================================================

export {handleAddFormSubmit, createNewCard, initializeList};
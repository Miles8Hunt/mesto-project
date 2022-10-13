import './index.css';
import {popup, cardsList, popups, editOpen, addOpen, buttonEdit, buttonAdd, avatarOpen, 
        buttonAvatar, formAvatar, formEdit, formAddCard, profileAvatar, profileName, profileAbout, 
        editNameInput, editAboutInput, avatarInput, cardNameInput, cardLinkInput, userId, cardId,
        avatarLoad, editLoad, cardLoad, } from "../components/utils/constants.js";
import {renderFormLoading} from "../components/utils/utils.js";
import {enableValidation, disableSubmitButton, resetValidationErrors} from "../components/validate.js";
import {createNewCard} from "../components/card.js"; 
import {openPopup, closePopup} from "../components/popup.js";
import {updateAvatar, getUserInfo, updateUserInfo, getInitialCards, createCard, deleteLike, addLike, 
        deleteCard} from "../components/api.js";

//===================================================================================================================

Promise.all([getUserInfo(), getInitialCards()])
  .then(([data, cards]) => {
    profileAvatar.src = data.avatar;
    profileName.textContent = data.name;
    profileAbout.textContent = data.about;
    userId.id = data._id;
    cardId.id = cards._id;
    initializeList(cards)
    console.log(cards)
  })
  .catch(err => {
    console.log(err);
  });

//===================================================================================================================

// Добавление события на кнопки 
editOpen.addEventListener('click', function () {
  resetValidationErrors(popup.profile);
  editNameInput.value = profileName.textContent;
  editAboutInput.value = profileAbout.textContent;
  disableSubmitButton(buttonEdit);
  openPopup(popup.profile); // открываем попап редактирования
});
addOpen.addEventListener('click', function () {
  resetValidationErrors(popup.card);
  disableSubmitButton(buttonAdd);
  openPopup(popup.card); // открываем попап добавления
});
avatarOpen.addEventListener('click', function () {
  resetValidationErrors(popup.avatar);
  disableSubmitButton(buttonAvatar);
  openPopup(popup.avatar); // открываем попап аватара
});

//===================================================================================================================

// обработчики оверлея и крестиков
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_active')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

//===================================================================================================================

// Форма редактирования Аватара
function handleAvatarFormSubmit(evt) {   
  evt.preventDefault();
  profileAvatar.src = avatarInput.value;
  renderFormLoading(true, avatarLoad);
  updateAvatar(avatarInput.value)
  .then ( 
    closePopup(popup.avatar)
  )
  renderFormLoading(false, avatarLoad);
};
formAvatar.addEventListener('submit', handleAvatarFormSubmit);

//===================================================================================================================

// Форма редактирования имени и информации о себе
function handleProfileFormSubmit(evt) {   
  evt.preventDefault();
  profileName.textContent = editNameInput.value;
  profileAbout.textContent = editAboutInput.value;
  renderFormLoading(true, editLoad);
  updateUserInfo(editNameInput.value, editAboutInput.value)
  .then ( 
    closePopup(popup.profile)
  ) 
  renderFormLoading(false, editLoad);
};
formEdit.addEventListener('submit', handleProfileFormSubmit);

//===================================================================================================================

// Форма добавления карточки
function handleAddFormSubmit(evt) { 
  console.log(1);
  evt.preventDefault();
  renderFormLoading(true, cardLoad);
  createCard(cardNameInput.value, cardLinkInput.value)
  .then ((res) => {
    cardsList.prepend(createNewCard(res.name, res.link, res.likes.length, res.owner._id, res._id, res.likes, userId, toggleLike, removeCard))
  })
  .then ( 
    closePopup(popup.profile)
  )
  renderFormLoading(false, cardLoad);
  closePopup(popup.card);
  evt.target.reset() // Очистка формы
};
formAddCard.addEventListener('submit', handleAddFormSubmit);

//===================================================================================================================

// Инициализация заготовленных карточек
function initializeList(item) {
  item.forEach(function (item) {
    const card = createNewCard(item.name, item.link, item.likes.length, item.owner._id, item._id, item.likes, userId, toggleLike, removeCard);
    cardsList.append(card);
  });
};

//===================================================================================================================

// Поставить/убрать лайк
function toggleLike (likesNumber, likes, cardId, cardLike) {
  cardLike.addEventListener('click', () => {
    if(cardLike.classList.contains('card__like_active')) {
      deleteLike(cardId)
      .then(() => {
        cardLike.classList.remove('card__like_active');
        likesNumber.textContent = --likes;
      })
      .catch(err => {
        console.log(err);
      });
    } 
      else {
        addLike(cardId)
        .then(() => {
          cardLike.classList.add('card__like_active');
          likesNumber.textContent = ++likes;
        })
        .catch(err => {
          console.log(err);
        });
      };
  })
}

//===================================================================================================================

function removeCard (cardId) {
  deleteCard(cardId);
}

//===================================================================================================================

enableValidation ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
});
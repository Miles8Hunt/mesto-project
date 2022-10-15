const content = document.querySelector('.content');
const profile = content.querySelector('.profile');

//===================================================================================================================

// Поиск попапов
const popup = {
  profile: document.querySelector('.popup__edit'),
  card: document.querySelector('.popup__add'),
  avatar: document.querySelector('.popup__avatar')
}

//===================================================================================================================

// Поиск кнопок 
const editOpen = profile.querySelector('.profile__edit-button');
const addOpen = profile.querySelector('.profile__add-button');
const avatarOpen = profile.querySelector('.profile__avatar-btn');
const popups = document.querySelectorAll('.popup');

const buttonEdit = document.querySelector('.popup__submit-edit');
const buttonAdd = document.querySelector('.popup__submit-add');
const buttonAvatar = document.querySelector('.popup__submit-avatar');

//===================================================================================================================

// Поиск формы редактирования в DOM
const formAvatar = document.querySelector('.popup__form-avatar');
const formEdit = document.querySelector('.popup__form-edit');

// Поиск полей для редактирования в DOM
const profileAvatar = document.querySelector('.profile__avatar');
const profileName = profile.querySelector('.profile__title');
const profileAbout = profile.querySelector('.profile__description');

// Поиск инпутов для редактирования профиля
const avatarInput = document.querySelector('#avatar-input');
const editNameInput = document.querySelector('#userName-input');
const editAboutInput = document.querySelector('#about-input');

//===================================================================================================================

// Куда добавлять карточки 
const cardsList = document.querySelector('.cards__container');
const cardsTemplate = document.querySelector('.cards-template').content;

// Поиск формы добавления карточки в DOM
const formAddCard = document.querySelector('.popup__form-add');

// Поиск инпутов для создания карточки
const cardNameInput = document.querySelector('#title-input');
const cardLinkInput = document.querySelector('#url-input');

//===================================================================================================================

// Поиск элементов для зума изображения
const popupZoom = document.querySelector('.popup__zoom');
const imageZoom = document.querySelector('.popup__image');
const captionZoom = document.querySelector('.popup__caption');

//===================================================================================================================

// Все необходимые элементы формы 
const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__input');

//===================================================================================================================

// Кнопки отправки формы
const avatarLoad = document.querySelector('.popup__submit-avatar');
const editLoad = document.querySelector('.popup__submit-edit');
const cardLoad = document.querySelector('.popup__submit-add');

//===================================================================================================================

const userId = {id: '',};
const cardId = {id: '',};

//===================================================================================================================

// const UpHellyAa = new URL('../../images/Up-Helly-Aa.jpg', import.meta.url);
// const DayZero = new URL('../../images/northern-lights.jpg', import.meta.url);
// const ScarletSails = new URL('../../images/Scarlet-sails.jpg', import.meta.url);
// const BurningMan1 = new URL('../../images/Burning-man-2.jpg', import.meta.url);
// const Venice = new URL('../../images/Venice.jpg', import.meta.url);
// const BurningMan2 = new URL('../../images/Burning-man-1.jpg', import.meta.url);

// // Массив с заготовленными карточками
// const initialCards = [
//   { name: 'Up Helly Aa', image: UpHellyAa },
//   { name: 'Day Zero', image: DayZero },
//   { name: 'Scarlet sails', image: ScarletSails },
//   { name: 'Burning man', image: BurningMan1 },
//   { name: 'Venice', image: Venice },
//   { name: 'Burning man', image: BurningMan2 }
// ];

//===================================================================================================================

export {content, profile, popup, editOpen, addOpen, popups, buttonEdit, buttonAdd, avatarOpen, buttonAvatar,
        formAvatar, formEdit, profileAvatar, profileName, profileAbout, avatarInput, editNameInput, editAboutInput,
        cardsList, cardsTemplate, formAddCard, cardNameInput, cardLinkInput, popupZoom, imageZoom, captionZoom,
        formElement, formInput, cardLoad, avatarLoad, editLoad, userId, cardId};
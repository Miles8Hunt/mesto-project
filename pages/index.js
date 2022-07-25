const content = document.querySelector('.content');
const profile = content.querySelector('.profile');

// Поиск попапов
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupZoom = document.querySelector('.popup__zoom');

// Поиск кнопок 
const editOpen = profile.querySelector('.profile__edit-button');
const editClose = document.querySelector('.popup__edit-close');
const addOpen = profile.querySelector('.profile__add-button');
const addClose = document.querySelector('.popup__add-close');
const zoomClose = document.querySelector('.popup__zoom-close');

// Добавление события на кнопки 
editOpen.addEventListener('click', () => popupEdit.classList.add('popup_active'));
editClose.addEventListener('click', () => popupEdit.classList.remove('popup_active'));
addOpen.addEventListener('click', () => popupAdd.classList.add('popup_active'));
addClose.addEventListener('click', () => popupAdd.classList.remove('popup_active'));
zoomClose.addEventListener('click', () => popupZoom.classList.remove('popup_active'));

function openPopup(popup) {
  popup.classList.add('popup_active');
}
function closePopup(popup) {
  popup.classList.remove('popup_active');
}

// Поиск формы редактирования в DOM
const formEdit = document.querySelector('.popup__form-edit');

// Поиск полей для редактирования в DOM
const profileName = profile.querySelector('.profile__title');
const profileAbout = profile.querySelector('.profile__description');

// Поиск инпутов для редактирования профиля
const editNameInput = document.querySelector('.popup__input_type-userName');
const editAboutInput = document.querySelector('.popup__input_type-about');

// Форма редактирования имени и информации о себе
function formSubmitEditHandler(evt) {
  evt.preventDefault();
  profileName.textContent = editNameInput.value;
  profileAbout.textContent = editAboutInput.value;
  closePopup(popupEdit);
};
formEdit.addEventListener('submit', formSubmitEditHandler);

// Куда добавлять карточки 
const cardsList = document.querySelector('.cards__container');
const cardsTemplate = document.querySelector('.cards-template').content;

// Массив с заготовленными карточками
const initialCards = [
  {
    name: 'Up Helly Aa',
    src: './images/Up-Helly-Aa.jpg'
  },
  {
    name: 'Day Zero',
    src: './images/northern-lights.jpg'
  },
  {
    name: 'Scarlet sails',
    src: './images/Scarlet-sails.jpg'
  },
  {
    name: 'Burning man',
    src: './images/Burning-man-2.jpg'
  },
  {
    name: 'Venice',
    src: './images/Venice.jpg'
  },
  {
    name: 'Burning man',
    src: './images/Burning-man-1.jpg'
  }
];

// Инициализация заготовленных карточек
function initializeList(list) {
  list.forEach(function (item) {
      const card = createNewCard(item.name, item.src);
      cardsList.prepend(card);
  });
};
initializeList(initialCards);

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

// Поиск формы добавления карточки в DOM
const formAdd = document.querySelector('.popup__form-add');

// Поиск инпутов для создания карточки
const cardNameInput = document.querySelector('.popup__input_type-name');
const cardLinkInput = document.querySelector('.popup__input_type-image');

// Форма добавления карточки
function formSubmitAddHandler(evt) {
  evt.preventDefault();
  const newCard = createNewCard(cardNameInput.value, cardLinkInput.value);
  cardsList.prepend(newCard);
  closePopup(popupAdd);
};
formAdd.addEventListener('submit', formSubmitAddHandler);

// Поиск элементов для зума изображения
const imageZoom = document.querySelector('.popup__image');
const captionZoom = document.querySelector('.popup__caption');

// Открытие попапа с картинкой
function openZoomPopup(evt) {
  imageZoom.src = evt.target.src;
  imageZoom.alt = evt.target.alt;
  captionZoom.textContent = evt.target.alt;
  openPopup(popupZoom);
};
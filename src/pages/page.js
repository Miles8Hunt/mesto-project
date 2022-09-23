const content = document.querySelector('.content');
const profile = content.querySelector('.profile');

// Поиск попапов
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupZoom = document.querySelector('.popup__zoom');

// Поиск кнопок 
const editOpen = profile.querySelector('.profile__edit-button');
const addOpen = profile.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');

// Добавление события на кнопки 
editOpen.addEventListener('click', function () {
  editNameInput.value = profileName.textContent;
  editAboutInput.value = profileAbout.textContent;
  openPopup(popupEdit); // открываем попап редактирования
});
addOpen.addEventListener('click', function () {
  openPopup(popupAdd); // открываем попап добавления
});
closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап 
  const popup = button.closest('.popup');
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener('click', () => closePopup(popup));
});

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
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editNameInput.value;
  profileAbout.textContent = editAboutInput.value;
  closePopup(popupEdit);
};
formEdit.addEventListener('submit', handleProfileFormSubmit);

// Куда добавлять карточки 
const cardsList = document.querySelector('.cards__container');
const cardsTemplate = document.querySelector('.cards-template').content;

// Массив с заготовленными карточками
const initialCards = [
  {
    name: 'Up Helly Aa',
    src: './src/images/Up-Helly-Aa.jpg'
  },
  {
    name: 'Day Zero',
    src: './src/images/northern-lights.jpg'
  },
  {
    name: 'Scarlet sails',
    src: './src/images/Scarlet-sails.jpg'
  },
  {
    name: 'Burning man',
    src: './src/images/Burning-man-2.jpg'
  },
  {
    name: 'Venice',
    src: './src/images/Venice.jpg'
  },
  {
    name: 'Burning man',
    src: './src/images/Burning-man-1.jpg'
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
function handleAddFormSubmit(evt) { 
  evt.preventDefault();
  const newCard = createNewCard(cardNameInput.value, cardLinkInput.value);
  cardsList.prepend(newCard);
  closePopup(popupAdd);
  evt.target.reset() // Очистка формы
};

formAdd.addEventListener('submit', handleAddFormSubmit);

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
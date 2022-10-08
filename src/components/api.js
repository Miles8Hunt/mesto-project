import {editNameInput, editAboutInput, cardNameInput, cardLinkInput,} from "./utils/utils.js";

//=========================================================================================================

const api = {
  "url": "https://nomoreparties.co/v1",
  "cohort": "plus-cohort-15",
  "method": {
    "get": "GET",
    "post": "POST",
    "put": "PUT",
    "delete": "DELETE",
    "patch": "PATCH"
  },
  "headers": {
    "authorization": 'a39c6085-aa57-4d27-b985-a15c2e44735c',
    'Content-Type': 'application/json'
  }
};

//=========================================================================================================

const pushAvatar = (data) => {
  return fetch(`${api.url}/${api.cohort}/users/me/avatar`, {
    method: api.method.patch,
    headers: api.headers,
    body: JSON.stringify(
      {avatar: data}
    )
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })
    .catch(err => {
      console.error(err)
    })
}

//=========================================================================================================

const getEdit = () => {
  return fetch(`${api.url}/${api.cohort}/users/me`, {
    method: api.method.get,
    headers: api.headers
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })    
    .catch(err => {
      console.error(err)
    })
}

//=========================================================================================================

const pushEdit = () => {
  return fetch(`${api.url}/${api.cohort}/users/me`, {
    method: api.method.patch,
    headers: api.headers,
    body: JSON.stringify({
      name: editNameInput.value,
      about: editAboutInput.value
    })
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })
    .catch(err => {
      console.error(err)
    })
}

//=========================================================================================================

const getInitialCards = () => {
  return fetch(`${api.url}/${api.cohort}/cards`, {
    method: api.method.get,
    headers: api.headers
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })
    .catch(err => {
      console.error(err)
    }) 
}

//=========================================================================================================

const pushAddCard = () => {
  return fetch(`${api.url}/${api.cohort}/cards`, {
    method: api.method.post,
    headers: api.headers,
    body: JSON.stringify({
      name: cardNameInput.value,
      link: cardLinkInput.value
    })
  })
    .then(res => {
    if (res.ok){
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
    })
    .catch(err => {
      console.error(err)
    })
}

//=========================================================================================================

const deleteCard = (id) => {
  fetch(`${api.url}/${api.cohort}/cards/${id}`, {
    method: api.method.delete,
    headers: api.headers
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })
    .catch(err => {
      console.error(err)
    })
}

//=========================================================================================================

const addLike = (id) => {
  return fetch(`${api.url}/${api.cohort}/cards/likes/${id}`, {
    method: api.method.put,
    headers: api.headers
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })
    .catch(err => {
      console.error(err)
    })
}

//=========================================================================================================

const deleteLike = (id) => {
  return fetch(`${api.url}/${api.cohort}/cards/likes/${id}`, {
    method: api.method.delete,
    headers: api.headers
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })
    .catch(err => {
      console.error(err)
    })
}

//=========================================================================================================

export {pushAvatar, getEdit, pushEdit, getInitialCards, pushAddCard, deleteCard, deleteLike, addLike};



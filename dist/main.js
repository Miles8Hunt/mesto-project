(()=>{"use strict";var e={d:(t,r)=>{for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{cL:()=>X,VO:()=>W,xS:()=>Q});var t=document.querySelector(".content").querySelector(".profile"),r={profile:document.querySelector(".popup__edit"),card:document.querySelector(".popup__add"),avatar:document.querySelector(".popup__avatar")},o=t.querySelector(".profile__edit-button"),n=t.querySelector(".profile__add-button"),c=t.querySelector(".profile__avatar-btn"),a=document.querySelectorAll(".popup"),u=document.querySelector(".popup__submit-edit"),i=document.querySelector(".popup__submit-add"),l=document.querySelector(".popup__submit-avatar"),s=document.querySelector(".popup__form-edit"),d=t.querySelector(".profile__title"),p=t.querySelector(".profile__description"),m=document.querySelector("#userName-input"),_=document.querySelector("#about-input"),f=document.querySelector(".cards__container"),v=document.querySelector(".cards-template").content,y=document.querySelector(".popup__form-add"),h=document.querySelector("#title-input"),S=document.querySelector("#url-input"),C=document.querySelector(".popup__zoom"),q=document.querySelector(".popup__image"),b=document.querySelector(".popup__caption"),E=(document.querySelector(".popup__form").querySelector(".popup__input"),document.querySelector(".popup__submit-add")),g=function(e,t){e?(t.textContent="Coхранение...",console.log("сохраняю...")):(t.textContent="Сохранить",console.log("сохранил!"))},L=function(e,t,r){var o=r.inactiveButtonClass;!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(o)):(t.disabled=!0,t.classList.add(o))};function k(e){e.disabled=!0,e.classList.add("popup__submit_inactive")}function x(e){e.classList.add("popup_active"),document.addEventListener("keydown",A)}function B(e){e.classList.remove("popup_active"),document.removeEventListener("keydown",A)}function A(e){"Escape"===e.key&&B(document.querySelector(".popup_active"))}function w(e){e.querySelectorAll(".popup__input").forEach((function(e){e.value=null,e.classList.remove("popup__input_type_error"),document.querySelector(".avatar-input-error").textContent=" "}))}function O(e){q.src=e.target.src,q.alt=e.target.alt,b.textContent=e.target.alt,x(C)}function j(e,t,r,o,n,c){var a=v.cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__likes-number"),l=a.querySelector(".card__delete"),s=a.querySelector(".card__like");if(u.src=t,a.querySelector(".card__title").textContent=e,u.alt=e,i.textContent=r,Q.id!==o&&l.classList.add("card__delete_none"),void 0!==c)for(var d=0;d<c.length;d++)c[d]._id===Q.id&&s.classList.add("card__like_active");return W(i,r,n,s),l.addEventListener("click",(function(){X(n)})),l.addEventListener("click",(function(e){return e.target.closest(".card").remove()})),u.addEventListener("click",O),a}var I={url:"https://nomoreparties.co/v1",cohort:"plus-cohort-15",method:{get:"GET",post:"POST",put:"PUT",delete:"DELETE",patch:"PATCH"},headers:{authorization:"a39c6085-aa57-4d27-b985-a15c2e44735c","Content-Type":"application/json"}};function N(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var T,D,M,J,V,z,U,G=document.querySelector(".profile__avatar"),H=document.querySelector(".popup__form-avatar"),$=document.querySelector("#avatar-input"),F=document.querySelector(".popup__submit-avatar"),K=document.querySelector(".popup__submit-edit"),Q={id:""},R={id:""};function W(e,t,r,o){o.addEventListener("click",(function(){var n;o.classList.contains("card__like_active")?(n=r,fetch("".concat(I.url,"/").concat(I.cohort,"/cards/likes/").concat(n),{method:I.method.delete,headers:I.headers}).then((function(e){return N(e)}))).then((function(){o.classList.remove("card__like_active"),e.textContent=--t})).catch((function(e){console.log(e)})):function(e){return fetch("".concat(I.url,"/").concat(I.cohort,"/cards/likes/").concat(e),{method:I.method.put,headers:I.headers}).then((function(e){return N(e)}))}(r).then((function(){o.classList.add("card__like_active"),e.textContent=++t})).catch((function(e){console.log(e)}))}))}function X(e){var t;t=e,fetch("".concat(I.url,"/").concat(I.cohort,"/cards/").concat(t),{method:I.method.delete,headers:I.headers}).then((function(e){return N(e)}))}Promise.all([fetch("".concat(I.url,"/").concat(I.cohort,"/users/me"),{method:I.method.get,headers:I.headers}).then((function(e){return N(e)})),fetch("".concat(I.url,"/").concat(I.cohort,"/cards"),{method:I.method.get,headers:I.headers}).then((function(e){return N(e)}))]).then((function(e){var t,r,o=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,c=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){u=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw n}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=o[0],c=o[1];G.src=n.avatar,d.textContent=n.name,p.textContent=n.about,Q.id=n._id,R.id=c._id,c.forEach((function(e){var t=j(e.name,e.link,e.likes.length,e.owner._id,e._id,e.likes);f.append(t)})),console.log(c)})).catch((function(e){console.log(e)})),o.addEventListener("click",(function(){m.value=d.textContent,_.value=p.textContent,k(u),document.getElementById("userName-input").classList.remove("popup__input_type_error"),document.getElementById("about-input").classList.remove("popup__input_type_error"),document.querySelector(".userName-input-error").textContent=" ",document.querySelector(".about-input-error").textContent=" ",x(r.profile)})),n.addEventListener("click",(function(){k(i),w(r.card),document.getElementById("title-input").classList.remove("popup__input_type_error"),document.getElementById("url-input").classList.remove("popup__input_type_error"),document.querySelector(".title-input-error").textContent=" ",document.querySelector(".url-input-error").textContent=" ",x(r.card)})),c.addEventListener("click",(function(){k(l),w(r.avatar),x(r.avatar)})),a.forEach((function(e){e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_active")&&B(e),t.target.classList.contains("popup__close")&&B(e)}))})),H.addEventListener("submit",(function(e){var t;e.preventDefault(),G.src=$.value,g(!0,F),(t=$.value,fetch("".concat(I.url,"/").concat(I.cohort,"/users/me/avatar"),{method:I.method.patch,headers:I.headers,body:JSON.stringify({avatar:t})}).then((function(e){return N(e)}))).then(B(r.avatar)),g(!1,F)})),s.addEventListener("submit",(function(e){e.preventDefault(),d.textContent=m.value,p.textContent=_.value,g(!0,K),(m.value,_.value,fetch("".concat(I.url,"/").concat(I.cohort,"/users/me"),{method:I.method.patch,headers:I.headers,body:JSON.stringify({name:m.value,about:_.value})}).then((function(e){return N(e)}))).then(B(r.profile)),g(!1,K)})),y.addEventListener("submit",(function(e){console.log(1),e.preventDefault(),g(!0,E),(h.value,S.value,fetch("".concat(I.url,"/").concat(I.cohort,"/cards"),{method:I.method.post,headers:I.headers,body:JSON.stringify({name:h.value,link:S.value})}).then((function(e){return N(e)}))).then((function(e){f.prepend(j(e.name,e.link,e.likes.length,e.owner._id,e._id))})).then(B(r.profile)),g(!1,E),B(r.card),e.target.reset()})),D=(T={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"}).formSelector,M=T.inputSelector,J=T.submitButtonSelector,V=T.inactiveButtonClass,z=T.inputErrorClass,U=T.errorClass,Array.from(document.querySelectorAll(D)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var r=t.inputSelector,o=t.submitButtonSelector,n=t.inactiveButtonClass,c=t.inputErrorClass,a=t.errorClass,u=Array.from(e.querySelectorAll(r)),i=e.querySelector(o);L(u,i,{inactiveButtonClass:n}),document.querySelector(".popup__form").reset(),u.forEach((function(t){t.addEventListener("input",(function(){!function(e,t,r){var o=r.inputErrorClass,n=r.errorClass;t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,r){var o=r.inputErrorClass,n=r.errorClass,c=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(o),c.classList.remove(n),c.textContent=""}(e,t,{inputErrorClass:o,errorClass:n}):function(e,t,r,o){var n=o.inputErrorClass,c=o.errorClass,a=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n),a.classList.add(c),a.textContent=r}(e,t,t.validationMessage,{inputErrorClass:o,errorClass:n})}(e,t,{inputErrorClass:c,errorClass:a}),L(u,i,{inactiveButtonClass:n})}))}))}(e,{formSelector:D,inputSelector:M,submitButtonSelector:J,inactiveButtonClass:V,inputErrorClass:z,errorClass:U})}))})();
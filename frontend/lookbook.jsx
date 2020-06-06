import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExclamationCircle, faBell, faHome, faSortDown, faTv, faPlay, 
  faStoreAlt, faUsers, faVideo, faImages, faLaugh, faEdit, faBookOpen, faAward, 
  faCalendarPlus, faShoppingBag, faCommentAlt, faExclamation, faCog, 
  faQuestionCircle, faMoon, faArrowCircleLeft, faSignOutAlt, faGlobe, faCamera, 
  faPencilAlt, faEye, faSearch, faEllipsisH, faTimes, faUserTag, faMapMarkerAlt, 
  faUserFriends, faSlidersH, faList, faThLarge, faFilm, faBriefcase, faGraduationCap, faHeartbeat} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faShareSquare, faThumbsUp, faComment, faBookmark, faEdit as farEdit, faUserCircle, faTrashAlt, faBellSlash, faCalendarAlt, faTimesCircle, faSmile, faImage} from '@fortawesome/free-regular-svg-icons';

library.add(fab, faExclamationCircle, faBell, faHome, faSortDown, faTv, faPlay, 
  faStoreAlt, faUsers, faVideo, faImages, faLaugh, faEdit, faBookOpen, faAward, 
  faCalendarPlus, faShoppingBag, faCommentAlt, faExclamation, faCog, 
  faQuestionCircle, faMoon, faArrowCircleLeft, faSignOutAlt, faGlobe, 
  faNewspaper, faShareSquare, faCamera, faPencilAlt, faEye, faSearch, 
  faEllipsisH, faTimes, faUserTag, faMapMarkerAlt, faUserFriends, faSlidersH, faList, faThLarge, faThumbsUp, faComment, faBookmark, farEdit, faUserCircle, faTrashAlt, faBellSlash, faCalendarAlt, faTimesCircle, faSmile, faImage, faFilm, faBriefcase, faGraduationCap, faHeartbeat);


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = {};
  if (window.currentUser) {
    // console.log(window.currentUser);

    preloadedState = {
      session: {
        id: window.currentUser.id
      },
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      }
    };
  }

  const store = configureStore(preloadedState);

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});
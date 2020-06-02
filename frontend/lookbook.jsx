import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell, faSortDown, faTv, faPlay, faStoreAlt, faUsers, faVideo, faImages, faLaugh, faEdit, faBookOpen, faAward, faCalendarPlus, faShoppingBag, faCommentAlt, faExclamation, faCog, faQuestionCircle, faMoon, faArrowCircleLeft, faSignOutAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faShareSquare } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faBell, faSortDown, faTv, faPlay, faStoreAlt, faUsers, faVideo, faImages, faLaugh, faEdit, faBookOpen, faAward, faCalendarPlus, faShoppingBag, faCommentAlt, faExclamation, faCog, faQuestionCircle, faMoon, faArrowCircleLeft, faSignOutAlt, faGlobe, faNewspaper, faShareSquare);


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  const store = configureStore();

  // // TESTING START
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // // TESTING END

  ReactDOM.render(<Root store={store} />, root);
});
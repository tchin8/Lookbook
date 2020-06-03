import React from 'react';
import PostFormContainer from '../posts/post_form_container';

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'post':
      component = <PostFormContainer />;
      break;
    // case 'signup':
    //   component = <SignupFormContainer />;
    //   break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
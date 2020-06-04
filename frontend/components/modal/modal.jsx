import React from 'react';
import CreatePostFormContainer from '../posts/create_post_form_container';

function Modal({ currentUser, user, modal, closeModal }) {
  // const { currentUser, user, modal, closeModal } = this.props;

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'create post':
      component = <CreatePostFormContainer 
        currentUser={currentUser}
        user={user}/>;
      break;
    // case 'edit post':
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
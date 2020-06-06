import React from 'react';
import CreatePostFormContainer from '../posts/create_post_form_container';
import EditPostFormContainer from '../posts/edit_post_form_container';
import DownDropdown from '../navbar/down_dropdown';
import EditProfileFormContainer from '../profile/edit_profile_form_container';

function Modal({ currentUser, user, modal, closeModal }) {
  // const { currentUser, user, modal, closeModal } = this.props;

  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Create Post':
      component = <CreatePostFormContainer 
        currentUser={currentUser}
        user={user}/>;
      break;
    case 'Edit Post':
      component = <EditPostFormContainer />;
      break;
    case 'Edit Profile':
      // debugger;
      component = <EditProfileFormContainer />;
      // debugger;
      break;

    // case 'nav down dropdown':
    //   component = <DownDropdown />;
    //   break;
    default:
      return null;
  }

  // debugger;
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
};

export default Modal;
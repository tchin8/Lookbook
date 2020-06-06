import { connect } from 'react-redux';

import PostIndexItem from './post_index_item';

const mSTP = (state) => ({
  users: state.entities.users,
});

export default connect(mSTP)(PostIndexItem);
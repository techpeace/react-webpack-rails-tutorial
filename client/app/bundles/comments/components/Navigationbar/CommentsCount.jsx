import React, {PropTypes} from 'react';

const CommentsCount = (props) => (
  <li>
    <a id='js-comment-count'
       href='https://github.com/shakacode/react_on_rails/blob/master/README.md#multiple-react-components-on-a-page-with-one-store'>
      Comments: {props.commentsCount}
    </a>
  </li>
);

CommentsCount.propTypes = {
  commentsCount: PropTypes.number.isRequired,
};

export default CommentsCount;

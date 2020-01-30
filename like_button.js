'use strict';

const e = React.createElement;

//in html heet de class 'like_button_container' en hier 'LikeButton' ???? 
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked ' + this.props.commentID;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like me'
    );
  }
}


// zoekt element in html met id 'like button container'
//als er maar 1 button is:
/*
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
*/

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    //als comment-id een nummer is/moet zijn =
    //const commentID = parseInt(domContainer.dataset.commentid, 10);
    //als comment-id een string is:
    const commentID = String(domContainer.dataset.commentid);
    ReactDOM.render(
      e(LikeButton, { commentID: commentID }),
      domContainer
    );
  });


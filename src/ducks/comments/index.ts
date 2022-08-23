import commentsReducer from './commentsSlice';

export { addComment, changeText, deleteComment } from './commentsSlice';
export { selectAttachedComments } from './selectors';

export default commentsReducer;

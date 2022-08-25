import cardReducer from './cardsSlice';
export { addCard, removeCard, updateCard } from './cardsSlice';
export { selectAttachedCards, selectCurrentCardDescription } from './selectors';

export default cardReducer;

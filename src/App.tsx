import { Header, Deck, ModalLogin } from './components';
import { selectUserName } from './ducks/user';
import { GlobalStyles } from './GlobalStyles';
import { useAppSelector } from './hooks/redux';

function App() {
  const userName = useAppSelector(selectUserName);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Deck />
      {!userName && <ModalLogin />}
    </>
  );
}

export default App;

import Header from "./Header/Header";
import Deck from "./Deck/Deck";
import GlobalFonts from "../Fonts/fonts";
import { createGlobalStyle } from "styled-components";
import ModalLogin from "../Modal/ModalLogin";
import { Context } from "../utils/Context";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [state, setState] = useLocalStorage(
    {
      columns: [
        { id: "1", title: "TODO" },
        { id: "2", title: "In Progress" },
        { id: "3", title: "Testing" },
        { id: "4", title: "Done" },
      ],
      cards: [],
      commentaries: [],
    },
    "state" // key for localstorage
  );

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <Context.Provider value={{ state, setState }}>
        <Header />
        <Deck />
        {!state.userName && <ModalLogin/>}
      </Context.Provider>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: rgb(0,121,191);
}
`;

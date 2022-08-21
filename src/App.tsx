import { Header, Deck, ModalLogin } from "./components";
import { GlobalStyles } from "./GlobalStyles";
import { Context } from "./redux/store/Context";
import { useLocalStorage } from "./hooks/useLocalStorage";

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
      userName: "",
    },
    "state" // key for localstorage
  );

  return (
    <>
      <GlobalStyles />
      <Context.Provider value={{ state, setState }}>
        <Header />
        <Deck />
        {!state.userName && <ModalLogin />}
      </Context.Provider>
    </>
  );
}

export default App;

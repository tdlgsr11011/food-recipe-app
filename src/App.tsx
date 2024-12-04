import { Provider } from "react-redux";
import store from "./redux/store";

import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />;
    </>
  );
}

const ProvidedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ProvidedApp;

import { Provider } from "react-redux";
import store from "./redux/store";

import RouteDefinitions from "./router/RouteDefinitions/RouteDefinitions";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <RouteDefinitions />
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

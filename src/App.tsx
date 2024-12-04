import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return <h2>Hi There</h2>;
}

const ProvidedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ProvidedApp;

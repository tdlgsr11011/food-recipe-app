import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return <div>Hi There</div>;
}

const ProvidedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default ProvidedApp;

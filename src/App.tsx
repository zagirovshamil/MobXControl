import "./App.css";
import { observer } from "mobx-react-lite";
import { Wrapper } from "./pages/wrapper";

export const App = observer(() => {
  return (
    <>
      <div className="App">
        <Wrapper />
      </div>
    </>
  );
});

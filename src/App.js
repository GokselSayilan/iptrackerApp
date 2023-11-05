import IpTracker from "./Components/IpTracker/IpTracker";
//context
import { IpContextProvider } from "./Context/IpContext";

function App() {
  return (
    <IpContextProvider>
      <IpTracker />
    </IpContextProvider>
  );
}

export default App;

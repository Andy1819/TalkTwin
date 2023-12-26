import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";
import Accountprovider from "./context/AccountProvider";

function App() {

  const clientId = '497566497653-8pje9meu5q10ch9vro2nuept9bdacgu5.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId= {clientId}>
    <Accountprovider>
      <Messenger />
    </Accountprovider>
    </GoogleOAuthProvider>
  );
}

export default App;

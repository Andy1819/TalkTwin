import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/Messenger";

function App() {

  const clientId = '497566497653-8pje9meu5q10ch9vro2nuept9bdacgu5.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId= {clientId}>
    <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;

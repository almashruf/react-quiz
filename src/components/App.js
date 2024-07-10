
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Layout>
      {/* <Home/> */}
      {/* <Signup/> */}
      <Quiz/>
    </Layout>
  );
}

export default App;

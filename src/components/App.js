
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  return (
    <Layout>
      {/* <Home/> */}
      {/* <Signup/> */}
      {/* <Quiz/> */}
      <Result/>
    </Layout>
  );
}

export default App;

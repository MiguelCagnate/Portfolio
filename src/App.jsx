import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Background from "./components/Background";



function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Background />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App max-w-7xl mx-auto p-4 lg:p-0">
      <Header />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;

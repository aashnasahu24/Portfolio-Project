/**
 * @copyright 2025 aashnasahu
 * @license Apache-2.0 
 */

/* Components */
  import { Header } from "./components/Header";
  import Hero from "./components/Hero";
  import About from "./components/About";
  import Skills from "./components/Skills";
  import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header/>

      <main>
        <Hero/>
        <About/>
        <Skills/>
        <Contact/>
      </main>

    </>
   
  )
}


export default App;

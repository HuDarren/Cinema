import logo from './logo.svg';
import './App.css';
import Header from "./Header/header"
import Footer from "./Footer/footer"
import Route from "./routes"

function App() {
  return (
    <div className="App">
      <Header/>
      <Route/>
      <Footer/>
    </div>
  );
}

export default App;



import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const handleOnClick = (name) => {
    console.log(name);
  }
  return (
    <div className="App">
      <Header />
      <Content />
      <button onClick={() => handleOnClick("Dave")}>Click</button>
      <Footer />
    </div>
  );
}

export default App;

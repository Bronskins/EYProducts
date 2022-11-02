import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Header/Welcome'


function App() {
  const main = [
    {
      title: "Products"
    }
  ]
  return (
    <div>
      <Header title={main[0].title}></Header>
      <Welcome/>
    </div>
)}

export default App;

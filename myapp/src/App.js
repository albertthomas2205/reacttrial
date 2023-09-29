
import './App.css';
import './components/Header'
import Header from './components/Header'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  const states = [
    {name:'kerala',language: 'malayalam'},
    {name: 'Tamilnadu',language: 'tamil'}
  ]
  return (

    <div className="App">
      <Header />

      <Home states = {states}/>
    
    </div>
  );
}

export default App;

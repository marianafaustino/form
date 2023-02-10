
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       Formulários em React
      </header>
      <MyForm user={{name: 'Mari', email: 'mari@gmail.com'}}/>
    </div>
  );
}

export default App;

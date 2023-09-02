
import './App.css';
import { CurrencyFormat } from 'currency-format-symbol'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CurrencyFormat amount="1234567.89" locale="tr-TR" currency="TRY" currencyDisplay="code"/>
      </header>
    </div>
  );
}

export default App;

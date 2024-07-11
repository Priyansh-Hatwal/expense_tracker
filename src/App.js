import './App.css';
import Header  from './components/Header';
import Balance from './components/Balance';
import Tracker from './components/Tracker';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider className="App">
    <Header></Header>
    <div className='container '>
    <Balance></Balance>
    <Tracker></Tracker>
    <TransactionsList></TransactionsList>
    <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;

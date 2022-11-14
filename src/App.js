import ApiCall from './ApiCall/ApiCall';
import './App.css';
import BankBalance from './BankBalances/BankBalance';
import Images from './ImageSlider/Images';
// import jyoti,{fruit1,fruit2,fruit3,sum} from './Day 2/ImportAndExpost';
// import Counter from './usestate/Counter';
// import Properties from './propes/Properties';
// import ProductList from './product/ProductList';
import ToDoList from './ToDoList/ToDoList';


function App() {

  let arr = [1,2,3,4];
  let obj = {
    school : "rpvv",
    rollNo : 2,
  }

  return (
    <div className="App" id='ram'>

    {/* <Counter/> */}

    {/* <Properties name="Abhishek" lname = "Jyoti" arr={[...arr,4,5,7]}  obb ={{...obj,class:12}} /> */}

    {/* <Counter/> */}

    {/* <ProductList/> */}

    {/* <ToDoList/> */}

    {/* <ApiCall/> */}
    {/* <Images/> */}

    <BankBalance/>

    </div> 
  );
}

export default App;





{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
</header> */}
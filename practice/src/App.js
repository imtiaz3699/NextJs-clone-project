import { useContext } from 'react';
import './App.css';
import Pagination from './NewsWebsite/Pagination';
import Search from './NewsWebsite/Search';
import Stories from './NewsWebsite/Stories';
import Portfolio from './Portfolio/Portfolio';
import { AppContext } from './Context/context';
import { useGlobalContext } from './Context/context';


function App() {
  const data = useGlobalContext(); 
  return (
    <div className="">
      {/* <Portfolio/> */}
      {data}
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  );
}

export default App;

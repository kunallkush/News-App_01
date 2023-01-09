import "./App.css";
import Paginations from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
//** use this is we do not create a custome hook */
// import { useContext } from 'react';
// import { AppContext } from './Context';

//** if we create a custome hooks then use this */
// import { useGlobalContext } from "./Context";

function App() {
  //** this data is the value which we pass in the AppProvider */
  // const data = useContext(AppContext)

  //** this data is coming from the custome hook which has been created in the context.js file */
  // const data = useGlobalContext();
  return (
    <>
      <div>
        {/* <h1>welcome {data}</h1> */}
        <Search />
        <Paginations />
        <Stories />
      </div>
    </>
  );
}

export default App;

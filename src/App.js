import { useEffect, useState } from 'react';
import './App.css';
import {filterData,apiUrl} from './data.js';
import Filter from './components/Filter.js';
import AllCards from './components/AllCards.js';
import Navbar from './components/NavBar.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [courses,setCourse] = useState({});
  const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    const fetchData = async() =>{
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourse(output.data);
      }
      catch(error){
        console.log(error);
      }
      finally{
        setLoading(false);
      }
    }

    fetchData();
  },[])

  
  const liked = () => toast.success("Liked Successfully!");
  const likeRemoved = ()=>toast.warn("Like Removed!")

  const [element,setElement] = useState("All");
  

  return (
    <div className="App bg-[#4a4e69] min-h-screen">
      <Navbar/>
      <Filter courseName={filterData} element={element} setElement={setElement}></Filter>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader text-white">loading</div> {/* Add your loading animation here */}
        </div>
      ) : (
        <AllCards className="flex" courses={courses} liked={liked} likeRemoved={likeRemoved} element={element} />
      )}
      <ToastContainer closeOnClick={true} />
      
    </div>
  );
}

export default App;

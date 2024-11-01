import { FcDribbble } from "react-icons/fc";

function Spinner(){
    return(
        <div>
            <div className="flex justify-center items-center h-full">
            <div className="loader text-white flex flex-col space-y-7">
                <div className='spinner'></div>
                <p className="font-bold">Loading...</p>
            </div> 
            </div>
        </div>
    )
}

export default Spinner;
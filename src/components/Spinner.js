import { FcDribbble } from "react-icons/fc";

function Spinner(){
    return(
        <div>
            <div className="flex justify-center items-center h-full">
          <div className="loader text-white">
            <div className='spinner'></div>
            loading
            </div> {/* Add your loading animation here */}
            </div>
        </div>
    )
}

export default Spinner;
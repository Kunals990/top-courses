import React from 'react';

function Filter(props){

    const myCourse = (event) => {
        // if(props.element != event.target.textContent){
            props.setElement(event.target.textContent);
        // }
        
      };

    return(
        <div className='flex justify-center '>
            <div className="nav-elements m-4 ">
                {
                    props.courseName.map((course) =>{
                        return <button onClick={myCourse} className={`filter-btn font-semibold ml-4 bg-[#2d2d35] text-white p-2 text-[18px] rounded-lg ${
                            props.element === course.title ? 'border-2 border-white' : 'border-2 border-transparent'
                          }`} key={course.id}>{course.title}</button>
                    })
                }
            </div>
        </div>
    )
}

export default Filter;
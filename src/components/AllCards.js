import Card from "./Card";

function AllCards({courses,liked,likeRemoved,element}) {

  let allCourses = []

  const getCourses = () => {
    Object.values(courses).forEach((courseCategory)=>{
      courseCategory.forEach((course) =>{
        allCourses.push(course);
      })
    })

    // console.log(allCourses);
    return allCourses;
  }

  if(element !=="All"){
    return(
      <div className="grid grid-cols-3 mx-[300px] justify-center items-center">
      
      {
       
        courses[element].map((course) =>{
        return <Card  course={course} l1={liked} likeRemoved={likeRemoved} key={course.id}></Card>
       })
      }
    </div>
    )
    
  }
  
  return (
    <div className="grid grid-cols-3 mx-[300px] justify-center items-center ">
      
      {
       
        getCourses().map((course) =>{
        return <Card  course={course} l1={liked} likeRemoved={likeRemoved} key={course.id}></Card>
       })
      }
    </div>
  );
}

export default AllCards;




let Properties = (propes)=>{

    return(
        <>

        <div>Name: {propes.name}</div>
        <div>lName: {propes.lname}</div>
        <div> {propes.arr}</div>
        <div>{propes.obb.school}</div>
        <div> {propes.obb.rollNo}</div>
        <div> {propes.obb.class}</div>

        </>
    )

}

export default Properties;
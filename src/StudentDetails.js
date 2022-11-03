function StudentDetails(props){
    return(
        <div>
            <h3>My name is {props.fullName}</h3>
            <h4>My Student ID is {props.studentID}</h4>
            <h5>{props.college}</h5>
        </div>
    )
}

export default StudentDetails
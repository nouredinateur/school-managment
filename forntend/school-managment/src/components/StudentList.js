import Student  from "./Student";
import React from 'react';



export default class StudentList extends React.Component {
    state = {
        loading: true,
        student: [],
    };
    
  
    async componentDidMount() {
            const url = "/students";
            const res = await fetch(url);
            const data = await res.json();
            this.setState({student: data, })
            console.log(this.state.student);
    }
  
    render() {
        return (
                <div class="grid grid-cols-3 gap-x-0 w-full px-16   " >
                {this.state.student.map((student) => (
                <Student
                    fullName={student.fullName}
                    cin={student.cin}
                    birthday={student.birthday}
                    field={student.field}
                    inscriptionDate={student.inscriptionDate}
                />
              ))}
                </div>
            );
    
    }
  }


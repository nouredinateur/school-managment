import Teacher  from "./Teacher";
import React from 'react';

export default class TeacherList extends React.Component {
    state = {
        loading: true,
        teacher: [],
    };
    
    async componentDidMount() {
            const url = "/teachers";
            const res = await fetch(url);
            const data = await res.json();
            this.setState({teacher: data, })
            console.log(this.state.teacher);
    }
  
    render() {
        return (
                <div class="grid grid-cols-3 gap-x-0 w-full px-16   " >
                {this.state.teacher.map((teacher) => (
                <Teacher
                    matricule={teacher.matricule}
                    fullName={teacher.fullName}
                    inscriptionDate={teacher.inscriptionDate}
                />
              ))}
                </div>
            );
    
    }
  }


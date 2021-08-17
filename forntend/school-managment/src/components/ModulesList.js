import Module  from "./Module";
import React from 'react';

export default class ModulesList extends React.Component {
    state = {
        loading: true,
        module: [],
    };
    
    async componentDidMount() {
            const url = "/modules";
            const res = await fetch(url);
            const data = await res.json();
            this.setState({module: data, })
            console.log(this.state.module);
    }
  
    render() {
        return (
                <div class="grid grid-cols-3 gap-x-0 w-full px-16   " >
                {this.state.module.map((module) => (
                <Module
                    name={module.name}
                    coeff={module.coeff}
                />
              ))}
                </div>
            );
    
    }
  }


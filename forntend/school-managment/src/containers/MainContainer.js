
class App extends react.Component{
    constructor(props){
      super(props);
      this.state={apiResponse:""};  
    }
  
    callAPI(){
      fetch("http://localhost:1337/")
      .then(res => res.json())
      .then(res => this.setState({apiResponse: res}));
    }
  
    componentWillMount(){
      this.callAPI();
    }
  }
  render(){
    {this.state.apiResponse}
  }
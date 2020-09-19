import React  , {Component} from 'react';
import './App.css';
import HeaderComponent from "./component/header";
import IPDetailsComponent from "./component/ip-details";
import MapComponent from "./component/map";


class AppComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
        value_key: "init"
    }
  }

  parentFunction=(data_from_child)=>{
    this.setState({value_key:data_from_child});
  }

  render() {
    return (
      <div className="App">
         <HeaderComponent  passDataToIPDetailsComponent={this.parentFunction.bind(this)}/>
         <IPDetailsComponent valueFromParent={this.state.value_key}/>
         <MapComponent valueFromParent={this.state.value_key}/>
      </div>
    );
  }


}

export default AppComponent;

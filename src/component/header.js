import React, { Component} from 'react';
import IPDetailsComponent from "./ip-details";
import '../index.css';

class HeaderComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
    this.getIPDetails = this.getIPDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  ipdetails

  getIPDetails = (event) => {

    event.preventDefault();

    if ( this.state.value != '') {

      let url;

      if(this.isUrl(this.state.value)){
        url = "https://geo.ipify.org/api/v1?apiKey=at_uWsJgmnZv7zHy0ciAMEnTLMD057wo&domain=" + this.state.value
      }
  
      else {
        url = "https://geo.ipify.org/api/v1?apiKey=at_uWsJgmnZv7zHy0ciAMEnTLMD057wo&ipAddress=" + this.state.value
      }


      fetch(url)
        .then(response => response.json())
        .then(data => {

          this.ipdetails = data

          data.code != 422 ? this.props.passDataToIPDetailsComponent(data) : alert(data.messages)
        });


    } 
    
    else {
      alert("Please enter the IP address")
    }


  }

  isUrl(s) {
   var regexp =  /^(https:\/\/www\.|https:\/\/www\.|www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/
   return regexp.test(s);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render(){
    return (
    <div className="bg">

        <h1 className="pageTitle">IP Address Tracker</h1>
        
       <div className="container inputWrapper">
         <form  onSubmit={this.getIPDetails}>
         <div className="input-group mb-3"> 
          <input type="text" value={this.state.value}   onChange={this.handleChange}  className="form-control" name="ipaddress" placeholder="Search for any IP address or domain"/>
          <div  className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit"></button>
          </div>
        </div>
         </form>
       </div>

    </div>
  );
  }



}

export default HeaderComponent;
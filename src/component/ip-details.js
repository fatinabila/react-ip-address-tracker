import React , {Component} from 'react';
import '../index.css';


class IPDetailsComponent extends Component {

    IPDetails ;

    IPAddress ="-";
    
    DetailPlace ="-";
    DetailCountry ="-";
    DetailPostCode ="-";
    DetailTimeZone ="-";
    DetailISP ="-";



    displayDetails(data){

      this.IPDetails = data;

      if (this.IPDetails != "init"){

        this.DetailPlace = this.IPDetails.location.city
        this.DetailCountry = this.IPDetails.location.country
        this.DetailPostCode = this.IPDetails.location.postalCode

        this.IPAddress =this.IPDetails.ip
        this.DetailISP = this.IPDetails.isp
        this. DetailTimeZone = this.IPDetails.location.timezone
      }


    }

    render(){

      this.displayDetails(this.props.valueFromParent)
      return (
      <div className="ipDetailsWapper container">
       
        <div className="row rowDetails">
          <div className="col-md-3 col-xs-3">
            <div className="detailTitle">IP Address</div>
            <div className="detailContent">{this.IPAddress }</div>
          </div>

          <div className="col-md-3 col-xs-3">
            <div className="detailTitle">Location</div>
            <div className="detailContent">
              {this.DetailPlace} , {this.DetailCountry } { this.DetailPostCode }
            </div>
          </div>

          <div className="col-md-3 col-xs-3">
          <div className="detailTitle">Timezone</div>
          <div className="detailContent">
            { this. DetailTimeZone}
          </div>
            
          </div>

          <div className="col-md-3 col-xs-3">
          <div className="detailTitle">ISP</div>
          <div className="detailContent">
            {this.DetailISP}
          </div>
           
          </div>
        </div>
      </div>
    );
    }
  }
  

export default IPDetailsComponent;

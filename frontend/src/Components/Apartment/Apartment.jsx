import React, { Component } from "react";
import { connect } from "react-redux";

import GoalsContainer from "./Containers/GoalsContainer";

import ApartmentComponent from "./Components/ApartmentComponent";
import Banner from "./Components/Banner";
import { fetchAllApartmentInfo } from "./Actions/ApartmentActions";

const mapStateToProps = state => {
  return {
    apartmentInfo: state.Apartment.apartmentInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllApartmentInfo: aptid => {
      dispatch(fetchAllApartmentInfo(aptid));
    }
  };
};

class Apartment extends Component {
  componentDidMount() {
    this.props.fetchAllApartmentInfo(1);
  }

  render() {
    return (
      <div>
        <Banner info={this.props.apartmentInfo} />
        <GoalsContainer />
        <ApartmentComponent info={this.props.apartmentInfo}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Apartment);

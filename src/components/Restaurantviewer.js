import React, { PureComponent as Component } from 'react';

class Restaurantviewer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      matched: [],
      moreInfo: false,
      animate: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePopUpClick = this.handlePopUpClick.bind(this);
  }

  handleClick(e, f){
    this.setState({animate: `${f}`})
    this.props.button(f)
    setTimeout( () => {this.setState({animate:false})}, 300 )
  }

  handlePopUpClick(){
    this.props.show()
  }

  render () {
    return (
      <div>
        <div className={this.state.animate ? "imageSlider " + this.state.animate : "imageSlider"} style={ {backgroundImage: `url(${this.props.matched.image})`} } >
          <div className={}></div>
        </div>
        <button className="imageHeading" onClick = {this.handlePopUpClick}><i className="fa fa-info fa-1x"></i> {this.props.matched.name}</button>
        <div className="tinderButtons">
          <button id="no" onClick = { (e) => {this.handleClick(e, "no")} }><i className="fa fa-times fa-5x"></i></button>
          <button id="fave" onClick = { (e) => {this.handleClick(e, "fave")} }><i className="fa fa-heart fa-4x"></i></button>
          <button id="yes" onClick = { (e) => {this.handleClick(e, "yes")}  }><i className="fa fa-check fa-5x"></i></button>
             {/* TODO CHANGE TO BUTTONS THAT ON CLICK REVEAL LOGIN POPUP */}


        </div>
      </div>
    );
  }
}

export default Restaurantviewer;
// { matched ? <h1>{matched[0].name}</h1> : "" }

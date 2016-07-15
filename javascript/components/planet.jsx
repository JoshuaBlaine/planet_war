const React = require('react');

const Planet = React.createClass({
  render() {
    let radius = this.props.planet.radius + (this.props.planet.countDown / 60);
    let style = {
      width: radius * 2,
      height: radius * 2,
      borderRadius: radius,
      left: (this.props.planet.xPos - radius) + "px",
      bottom: (this.props.planet.yPos - radius) + "px"
    };
    return <div onClick={this.props.handleClick.bind(null, this.props.planet)}
                className={ "planet " + this.props.planet.owner + " " + this.props.selected }
                style={ style }>
      {this.props.planet.friendlyUnits}
    </div>;
  }
});

module.exports = Planet;
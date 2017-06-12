var React = require('react');

var TimerForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    this.props.onSetTimer('started');

  },
  render: function() {
    return(
      <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
        <button className="button expanded" >Start Timer</button>
      </form>
    )
  }
});

module.exports = TimerForm;

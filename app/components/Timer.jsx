var React = require('react');
var Clock = require('./Clock');
var TimerForm = require('./TimerForm');
var Controls = require('./Controls');

var Timer = React.createClass({
  getInitialState: function() {
    return {
      count: 0,
      status: 'stopped'
    }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.status !== prevState.status) {
      switch (this.state.status) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0,
            status: 'stopped'
          })
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.count +1;
      this.setState({
        count: newCount
      });
    }, 1000)
  },
  handleSetTimer: function (status) {
    this.setState({
      status: status
    })
  },
  render: function() {
    var {count, status} = this.state;
    console.log(status);
    var renderButtons = () => {
      if(status !== 'stopped') {
        return <Controls countdownStatus={status} onStatusChange={this.handleSetTimer} />
      } else {
        return <TimerForm onSetTimer={this.handleSetTimer} />
      }
    }
    return (
      <div>
        <h1 className="page-header">Timer</h1>
        <Clock totalSeconds={count} />
        {renderButtons()}
      </div>
    )
  }
});

module.exports = Timer;

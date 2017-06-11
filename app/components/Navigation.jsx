var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div className="top-bar dark-nav">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            lookat-Timer
          </li>
          <li>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://lookatapp.co" target="_blank">Startup Technologies</a>
          </li>
        </ul>
      </div>
    </div>
  )
};

module.exports = Nav;

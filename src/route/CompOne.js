import React from 'react';
import {subtracter, subject} from '../store';

class CompOne extends React.Component {
  constructor() {
    super();
    this.state = { 
        status: true,
        count: 0
    };
  }

  handleClick = () => {
      subtracter()
  }

  render() {
    return  <div style={{ width: 300, height: 300, border: '1px solid red'}}>
                <button onClick={this.handleClick}>subtracter</button>
                <p>{this.state.status ? 'true' : 'false'}</p>
                <p>{this.state.count}</p>
            </div>;
  }

  componentWillUpdate() {
      console.log('change');
      return true
  }

  componentDidMount() {
    let This = this;
    subject.subscribe({
        next: (count) => {
        This.setState({
            count: count * 4
        })
    }})
  }
}

export default CompOne;

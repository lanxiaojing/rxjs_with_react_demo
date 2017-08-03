import React from 'react';
import { add, subject } from '../store';

class CompTwo extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return  <div style={{ width: 300, height: 300, border: '1px solid blue'}}>
                <button onClick={this.handleClick}> add</button>
                <p>{this.state.count}</p>
            </div>;
  }
  handleClick = () => {
      const {count} = this.state;
      let result = count > 10 ? 0 : count + 1;
      subject.next(result)
  }
  componentDidMount() {
    let This = this;
    subject.subscribe({
        next: (count) => {
        This.setState({
            count: count
        })
    }})
  }
}

export default CompTwo;

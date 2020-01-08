import React from 'react';
import { connect } from 'react-redux';
import {
  DoIncrement,
  DoDecrement,
  DoReset,
  DoStep,
  DOMax
} from '../state/actions';

class Counter extends React.Component {
  render() {
    let { count, step, max, dispatch } = this.props;
    return (
      <div className="wrapper">
        <h1 className="counter">count</h1>
        <div className="counterValue-div">
          <h2 className="counterValue">{count}</h2>
        </div>
        <div className="btn-wrapper1">
          <button className="inc btn" onClick={() => dispatch(DoIncrement())}>
            Increment
          </button>
          <button className="dec btn" onClick={() => dispatch(DoDecrement())}>
            Decrement{' '}
          </button>
          <button className="reset btn" onClick={() => dispatch(DoReset())}>
            Reset
          </button>
        </div>
        <div className="btn-wrapper2">
          {[5, 8, 10, 12, 14, 16].map(e => (
            <button
              onClick={() => dispatch(DoStep(e))}
              className={`btn1 ${step == e ? ' active' : ''}  `}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="btn-wrapper2">
          {[50, 100, 150, 200, 250, 300].map(e => (
            <button
              onClick={() => dispatch(DOMax(e))}
              className={`btn1 ${max == e ? ' active' : ''}  `}
            >
              {e}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count, step: state.step, max: state.max };
}

export default connect(mapStateToProps)(Counter);

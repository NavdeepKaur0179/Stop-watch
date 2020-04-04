import React,{Component} from 'react';

class Timer extends Component{
    componentDidMount()
    {
        this.timer=setInterval(this.ticker,1000);
    }
    constructor(props)
    {
      super(props);
      this.state={
      clock:0
      }
      this.ticker=this.ticker.bind(this);
    }
    ticker()
    {
        this.setState({clock:new Date()-this.props.start})
    }
    render()
    {
       let  newClock=Math.round(this.state.clock/1000);
        return(
            <div>
              <p>You are here Since</p> 
                <span>{newClock}</span> 
              <p>Seconds</p>
            </div>
        );
    }
}
export default Timer;
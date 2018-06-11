import React, { Component } from 'react';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'white',
      bg: 'Transparent'
    }
  }
  link = (e) => {
    window.open(e.target.value, '_blank');
  }
  hover = () => {
    console.log('hover');
    this.setState({
      color: '#95e195',
      bg: 'white'
    })    
  }
  leave = () => {
    this.setState({
      color: 'white',
      bg: 'Transparent'
    })    
  }
  render() {
    const styles = {
      btnContainerStyle: {
        display: 'flex',
        justifyContent: 'space-evenly'
      },
      buttonStyle: {
        backgroundColor: this.state.bg,
        color: this.state.color,
        border: '2px solid ' + this.state.color,
        flex: 1,
        fontFamily: 'sans-serif',
        paddingTop: 15,
        paddingBottom: 15,
        maxWidth: '8vw',
        cursor: 'pointer'
      }
    }
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#95e195',
        color: 'white',
        padding: '40px 40px 40px 40px',
        boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.75)'
      }}>
        <h1>Hello, I'm Oscar.</h1>
        <h3>I'm a software engineering student from Calgary, Canada.</h3>
        <div style={styles.btnContainerStyle}>
          <button style={styles.buttonStyle} onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://www.linkedin.com/in/oscarwong67/">LinkedIn</button>
          <button style={styles.buttonStyle} onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://github.com/oscarwong67">GitHub</button>
          <button style={styles.buttonStyle} onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://onedrive.live.com/?authkey=%21AJHmQcvDdaQQH1k&cid=ECA46CBC458F57B3&id=ECA46CBC458F57B3%211429&parId=ECA46CBC458F57B3%21469&o=OneUp">Resume</button>
          <button style={styles.buttonStyle} onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://twitter.com/call_me_oscar_">Twitter</button>
          <button style={styles.buttonStyle} onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://dev.to/call_me_oscar_">Dev.to (Blog)</button>
        </div>
      </div>
    );
  }
}

export default IndexPage;

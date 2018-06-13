import React, { Component } from 'react';

const styles = {
  btnContainerStyle: {
    display: 'grid',
    gridGap: 5,
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    //gridTemplateRows: 'repeat(3, 100px)',
    columnGap: '1.5em',
    gridAutoRows: 'auto'
  },
  buttonStyle: {
    backgroundColor: 'Transparent',
    color: 'white',
    border: '2px solid white',
    fontFamily: 'Roboto, Helvetica', 
    fontWeight: 300,   
    height: 65,
    //maxWidth: '7vw',
    cursor: 'pointer'
  },
  hoverButtonStyle: {
    backgroundColor: '#7dc87d',
    color: 'white',
    border: '2px solid white',
    fontFamily: 'Roboto, Helvetica',
    paddingTop: 5,
    paddingBottom: 5,
    //maxWidth: '7vw',
    cursor: 'pointer'
  }
}

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LinkedInStyle: styles.buttonStyle,
      GitHubStyle: styles.buttonStyle,
      ResumeStyle: styles.buttonStyle,
      TwitterStyle: styles.buttonStyle,
      DevStyle: styles.buttonStyle
    }
  }
  link = (e) => {
    window.open(e.target.value, '_blank');
  }
  hover = (e) => {
    const type = e.target.name;
    if (type === "LinkedIn") {
      this.setState({
        LinkedInStyle: styles.hoverButtonStyle
      });
    } else if (type === "GitHub") {
      this.setState({
        GitHubStyle: styles.hoverButtonStyle
      });
    } else if (type === "Resume") {
      this.setState({
        ResumeStyle: styles.hoverButtonStyle
      });
    } else if (type === "Twitter") {
      this.setState({
        TwitterStyle: styles.hoverButtonStyle
      });
    } else if (type === "Dev") {
      this.setState({
        DevStyle: styles.hoverButtonStyle
      });
    }
  }
  leave = (e) => {    
    const type = e.target.name;
    if (type === "LinkedIn") {
      this.setState({
        LinkedInStyle: styles.buttonStyle
      }, () => {
        
      });
    } else if (type === "GitHub") {
      this.setState({
        GitHubStyle: styles.buttonStyle
      });
    } else if (type === "Resume") {
      this.setState({
        ResumeStyle: styles.buttonStyle
      });
    } else if (type === "Twitter") {
      this.setState({
        TwitterStyle: styles.buttonStyle
      });
    } else if (type === "Dev") {
      this.setState({
        DevStyle: styles.buttonStyle
      });
    }
  }
  render() {

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        fontFamily: 'sans-serif',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#7dd77d',
        color: 'white',
        padding: '40px 40px 40px 40px',
        boxShadow: '5px 5px 5px 0px rgba(0,0,0,0.75)'
      }}>
        <h1>Hello, I'm Oscar.</h1>
        <h3>I'm a software engineering student from Calgary, Canada.</h3>
        <div style={styles.btnContainerStyle}>
          <button style={this.state.LinkedInStyle} name="LinkedIn" onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://www.linkedin.com/in/oscarwong67/">LinkedIn</button>
          <button style={this.state.GitHubStyle} name="GitHub" onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://github.com/oscarwong67">GitHub</button>
          <button style={this.state.ResumeStyle} name="Resume" onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://onedrive.live.com/?authkey=%21AJHmQcvDdaQQH1k&cid=ECA46CBC458F57B3&id=ECA46CBC458F57B3%211429&parId=ECA46CBC458F57B3%21469&o=OneUp">Resume</button>
          <button style={this.state.TwitterStyle} name="Twitter" onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://twitter.com/call_me_oscar_">Twitter</button>
          <button style={this.state.DevStyle} name="Dev" onClick={this.link} onMouseEnter={this.hover} onMouseLeave={this.leave} value="https://dev.to/call_me_oscar_">Dev.to (Blog)</button>
        </div>
      </div>
    );
  }
}

export default IndexPage;

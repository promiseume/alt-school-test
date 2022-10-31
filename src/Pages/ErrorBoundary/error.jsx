import React, { Component } from 'react'
import './error.css'

export default class Error extends Component {constructor(props) {
    super(props);
    this.state = {hasError : false};
  }
 static getDerivedStateFromError (){
    return {hasError: true}
  }

  componentDidCatch(error,errorInfo){
    console.log("Error Occured: ", error, errorInfo)
  }

  render() {
  const {hasError} = this.state;
  const {children} = this.props;
    if (hasError){
      return (
          <div className={'error-boundary'}><p>Something went wrong</p></div>
      )
    }
    return children;
  }
}

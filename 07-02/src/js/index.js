import React from 'react'
import ReactDom from 'react-dom'
import ComponentHeader from './components/header'

class Index extends React.Component{
  render(){
    return (
      <ComponentHeader/>
    )
  }
}

ReactDom.render(<Index>,document.getElementById('example'))

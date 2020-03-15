import React from 'react'

class GiftList extends React.Component {
  
    render(){
      return (
        <li>
           <img src={this.props.gif.images.original.url} />
        </li>
      )
    }
  }
  
  export default GiftList
  
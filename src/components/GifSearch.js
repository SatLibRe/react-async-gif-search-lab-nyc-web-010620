import React from 'react'

class GifSearch extends React.Component {
  
    render(){
      return (
        <form onSubmit={this.props.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.searchTerm} onChange={this.props.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      )
    }
  }
  
  export default GifSearch
  
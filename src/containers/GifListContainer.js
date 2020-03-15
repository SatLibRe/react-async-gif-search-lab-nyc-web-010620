import React from 'react'
import GifList from "../components/GifList.js"
import GifSearch from "../components/GifSearch.js"

export default class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchTerm: ""
    }

    componentDidMount(){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(response => {
          this.setState({
              gifs: response.data.slice(0,3)
          })
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(response => response.json())
        .then(response => {
          this.setState({
              gifs: response.data.slice(0,3)
          })
        })
      }

      handleChange = (event) => {
          this.setState({
              searchTerm: event.target.value
          })
      }

    

    render(){
        console.log(this.state.gifs)
        return(
            <div>
                <GifSearch searchTerm={this.state.searchTerm} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <ul>
                {this.state.gifs.map( gif => <GifList key={gif.id} gif={gif}/>)}
                </ul>
            </div>
        )
    }
}
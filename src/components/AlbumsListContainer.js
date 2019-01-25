import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
//import { helloWorld } from '../actions/test'
import { addAlbum, setAlbums } from '../actions/albums'

const sleep = time => new Promise(
    resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)
class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {
        sleep(2000)
            .then(message => this.props.setAlbums([
                {
                    id: 1,
                    title: message
                },
                {
                    id: 2,
                    title: 'This is the second album'
                },
                {
                    id: 3,
                    title: 'The last album'
                }
            ]))

        request
            .get('https://jsonplaceholder.typicode.com/albums')
            .then(response => {
                this.setState({ albums: response.body })
            })
    }


    render() {
        if (!this.state.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, { addAlbum, setAlbums })(AlbumsListContainer)
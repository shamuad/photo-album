import * as React from 'react'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
//import { helloWorld } from '../actions/test'
import { addAlbum, setAlbums, getAlbums } from '../actions/albums'

// const sleep = time => new Promise(
//     resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )
class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {

        this.props.getAlbums()

        // sleep(2000)
        //     .then(message => this.props.setAlbums([
        //         {
        //             id: 1,
        //             title: message
        //         },
        //         {
        //             id: 2,
        //             title: 'This is the second album'
        //         },
        //         {
        //             id: 3,
        //             title: 'The last album'
        //         }
        //     ]))

        // request
        //     .get('https://jsonplaceholder.typicode.com/albums')
        //     .then(response => {
        //         this.setState({ albums: response.body })
        //     })

        // How to list items with added items
        // request
        //     .get('https://jsonplaceholder.typicode.com/albums')
        //     .then(response => {
        //         response.body.map(album => this.props.addAlbum(album.id, album.title))
        //     })


    }


    render() {
        // console.log(this.props)
        if (!this.props.albums) return 'Loading...'
        return <AlbumsList albums={this.props.albums} />
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, { addAlbum, setAlbums, getAlbums })(AlbumsListContainer)
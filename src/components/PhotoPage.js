import * as React from 'react'

export default function PhotoPage(props) {
    return (<div>
        <h1>Photos in this album</h1>

        <ul>
            {props.photos.map(photo => (
                <li key={photo.url}>

                    <img src={photo.url} alt={`${photo.title}`} />
                </li>))

            }
        </ul>
    </div>
    )
}
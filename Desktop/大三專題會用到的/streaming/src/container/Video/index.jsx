import React from 'react'
import axios from 'axios'

export default class Video extends React.Component {
	render() {
		return (
			<div style={{marginTop:'62px'}} >
				<iframe  maxWidth="1336" maxHeight="450" src="https://www.youtube.com/embed/_1tAeNkw4Vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		)
	}
}
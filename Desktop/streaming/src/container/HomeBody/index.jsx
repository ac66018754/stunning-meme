import React from 'react'
import Video from '../Video/'
import {Whole} from './style'
import Carousel from '../Carousel/'

export default class HomeBody extends React.Component {
	render() {
		return (
			<Whole style={{height:'800px'}}>
				<Carousel/>
				<Video/>
			</Whole>
		)
	}
}
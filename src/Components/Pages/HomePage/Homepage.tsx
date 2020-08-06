import React from 'react';
import './Homepage.styles.scss';
import Directory from '../../Directories/Directory';

export default class HomePage extends React.Component {

	public render(): JSX.Element {
		return (
			<div className="homepage">
				<Directory />
			</div>
		)
	}
}

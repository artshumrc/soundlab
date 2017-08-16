import React from 'react';
import {Creatable} from 'react-select';
import './TagEditor.css';

export default class TagEditor extends React.Component {
	constructor(props) {
		super(props);
		this.addTag = this.addTag.bind(this);
	}

	addTag(value) {
		this.props.tags.changeValue('tags', value);
	}

	render() {
		const currentTags = this.props.tags.fields.getAll();
		const options = [
      {value: 'example-tag', label: 'Example Tag'},
      {value: 'manuscripts', label: 'Manuscripts'}
		];
		return (
			<div className="tagList">
				<Creatable
					name="tags"
					options={options}
					onChange={this.addTag}
					complete
					value={currentTags}
					multi
					backspaceRemoves={false}
					clearable={false}
					placeholder="Select tags..."
				/>
			</div>
		);
	}
}

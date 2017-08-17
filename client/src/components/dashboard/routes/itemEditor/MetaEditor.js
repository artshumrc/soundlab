import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Field} from 'redux-form';
import './MetaEditor.css';

export default class MetaEditor extends React.Component {
	constructor(props) {
		super(props);
		this.toggleOptions = this.toggleOptions.bind(this);
		this.deleteMeta = this.deleteMeta.bind(this);
		this.addString = this.addString.bind(this);
		this.state = {
      expandOptions: false
    }
	}

	toggleOptions() {
    this.setState({
      expandOptions: !this.state.expandOptions
    })
	}

	addDate() {
    this.setState({

    });
  }
  addString() {
    this.props.meta.fields.push({type: 'string'});
    this.toggleOptions();
  }
  
	deleteMeta(index) {
	  this.props.meta.fields.remove(index);
	}

	render() {
		const currentMetaData = this.props.meta.fields.length ? this.props.meta.fields : [];
		const optionsClass = this.state.expandOptions ? 'options expand' : 'options';
		console.log("this.props.meta.fields.getAll() LOG", this.props.meta.fields.getAll());
		return (
			<div className="metaEditor">
				{
          currentMetaData.map((singleMeta, index) => (
	<div className="itemMetaField" key={singleMeta}>
		<Field
			name={`meta[${index}].label`}
			type="text"
			component="input"
			className="metaLabel"
			placeholder="Label..."
		/>
		<Field
			name={`meta[${index}].value`}
			type="text"
			component="input"
			className="metaValue"
			placeholder="Value..."
		/>
		<a href="#deleteMeta" className="deleteMeta" onClick={() => { this.deleteMeta(index); }}>
			<FontAwesome name="trash-o" />
		</a>
	</div>))
        }
        <div className={optionsClass}>
          <FontAwesome name="font" alt="Add text" onClick={this.addString} />
          <FontAwesome name="calendar-o" alt="Add date" />
          <div className="dateTypePicker">
            <div className=""></div>
          </div>
        </div>
        <div className="addMeta" onClick={this.toggleOptions}>
					<FontAwesome name="plus-circle" /> {!this.state.expandOptions ? 'add meta data' : ''}
        </div>
			</div>
		);
	}
}

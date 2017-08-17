import React from 'react';
import FontAwesome from 'react-fontawesome';
import Datetime from 'react-datetime';
import {Field} from 'redux-form';
import './MetaEditor.css';

export default class MetaEditor extends React.Component {
	constructor(props) {
		super(props);
		this.toggleOptions = this.toggleOptions.bind(this);
		this.deleteMeta = this.deleteMeta.bind(this);
		this.addString = this.addString.bind(this);
		this.toggleDateTypePicker = this.toggleDateTypePicker.bind(this);
		this.addDate = this.addDate.bind(this);
		this.state = {
			expandOptions: false,
			dateTypePicker: false
		};
	}

	toggleOptions() {
		this.setState({
			expandOptions: !this.state.expandOptions
		});
		if (this.state.dateTypePicker) {
			this.toggleDateTypePicker();
		}
	}

	toggleDateTypePicker() {
		this.setState({
			dateTypePicker: !this.state.dateTypePicker
		});
	}

	addString() {
		this.props.meta.fields.push({type: 'text'});
		this.toggleOptions();
		if (this.state.dateTypePicker) {
			this.toggleDateTypePicker();
		}
	}

	addDate(format) {
		this.props.meta.fields.push({type: 'date', format: format});
		this.toggleOptions();
	}

	deleteMeta(index) {
		this.props.meta.fields.remove(index);
	}

	render() {
		const currentMetaData = this.props.meta.fields.length ? this.props.meta.fields : [];
		const optionsClass = this.state.expandOptions ? 'options expand' : 'options';

		const renderDatePicker = props => (<Datetime
			closeOnSelect
			timeFormat={false}
			value={props.input.value}
			onChange={props.input.onChange}
			dateFormat={props.dateForm}
			inputProps={{placeholder: props.placeholder}}
		/>);


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
		{currentMetaData.getAll()[index].type === 'date' ?
			<Field
				name={`meta[${index}].value`}
				type={currentMetaData.getAll()[index].type}
				component={renderDatePicker}
				className="metaValue"
				placeholder="Value..."
				dateForm={currentMetaData.getAll()[index].format}
			/>
                :
			<Field
				name={`meta[${index}].value`}
				type={currentMetaData.getAll()[index].type}
				component="input"
				className="metaValue"
				placeholder="Value..."
			/>
              }
		<a
			href="#deleteMeta"
			className="deleteMeta"
			onClick={() => {
				this.deleteMeta(index);
			}}
		>
			<FontAwesome name="trash-o" />
		</a>
	</div>))
        }
				<div className={optionsClass}>
					<FontAwesome name="font" alt="Add text" onClick={this.addString} />
					<FontAwesome name="calendar-o" alt="Add date" onClick={this.toggleDateTypePicker} />
					{this.state.dateTypePicker ?
						<div className="list-group dateTypePicker">
							<div
								className="list-group-item"
								onClick={() => {
									this.addDate('DD.MM.YYYY');
								}}
							>
                DD.MM.YYYY
              </div>
							<div
								className="list-group-item"
								onClick={() => {
									this.addDate('YYYY');
								}}
							>
                YYYY
              </div>
							<div
								className="list-group-item"
								onClick={() => {
									this.addDate('MM.YYYY');
								}}
							>
                MM.YYYY
              </div>
						</div> : null
          }
				</div>
				<div className="addMeta" onClick={this.toggleOptions}>
					<FontAwesome name="plus-circle" /> {!this.state.expandOptions ? 'add meta data' : ''}
				</div>
			</div>
		);
	}
}

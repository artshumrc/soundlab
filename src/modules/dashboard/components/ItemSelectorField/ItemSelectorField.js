import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Field } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';

import { required, maxLength } from '../../../../lib/formHelpers';


const maxLength2100 = maxLength(2100);

const ItemSelectorField = ({ items, selectedItems, toggleSelectedItem }) => (
	<div className="itemSelector">
		<Grid>
			<Row>
				<Col md={6}>
					<div className="collectionEditorItems">
						<label>
							Project Items <Link to="/items/create">Create a new item</Link>
						</label>
						<div className="collectionItemsTextsearch">
							<Field
								name="collectionItemsTextsearch"
								type="text"
								component="input"
								placeholder="Search..."
								validate={[required, maxLength2100]}
							/>
						</div>
						<div className="collectionEditorItemList">
							{items.map(item => (
								<div className="collectionItem">
									{item.title}
								</div>
							))}
						</div>
					</div>
				</Col>
				<Col md={6}>
					<div className="collectionEditorItems">
						<label>
							Selected
						</label>
						<div className="collectionEditorItemList collectionEditorItemListSelected">
							{selectedItems.map(item => (
								<div className="collectionItem">
									{item.title}
								</div>
							))}
						</div>
					</div>
				</Col>
			</Row>
		</Grid>
	</div>
);

export default ItemSelectorField;

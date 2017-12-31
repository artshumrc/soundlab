import React from 'react';

import './FileDetails.css';


const FileDetails = ({ file, handleTitleChange }) => (
	<div
		className="fileDetails"
	>
		<div className="fileDetailsTitleInput">
			<input
				type="text"
				onChange={handleTitleChange}
				placeholder="Enter file title . . ."
				value={file.title}
			/>
		</div>
	</div>
);

export default FileDetails;

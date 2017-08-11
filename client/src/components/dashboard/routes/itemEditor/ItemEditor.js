import React from 'react';
import ItemEditorUploader from '../../components/fileUploader/ItemEditorUploader';
import PrimaryImage from '../../../items/ItemImageViewer/PrimaryImage';
import _ from 'underscore';


export default class ItemEditor extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
      83, 87, 90, 92, 93, 95, 102, 103];
    const selImage = _.sample(artImages);
    let item = {
      files: [{title: 'Image title', url: `//iiif.orphe.us/orpheus/art/${selImage}.jpg/full/600,/0/default.jpg`}],
    };
    return (
      <div className="content">
        <div className="itemImageViewer">
          <PrimaryImage alt={item.files[0].title} src={item.files[0].url}/>
          <ItemEditorUploader />
        </div>
      </div>
    )
  }
}

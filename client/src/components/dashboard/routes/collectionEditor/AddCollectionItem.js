import React from 'react';
import FontAwesome from 'react-fontawesome';
import Autocomplete from 'react-autocomplete';
import './AddCollectionItem.css';

export default class AddCollectionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: false
    };
    this.shouldItemRender = this.shouldItemRender.bind(this);
    this.toggleInput = this.toggleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  shouldItemRender(item, value) {
    return (
      item.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
    )
  }

  addItem(value) {
    console.log("value addItem LOG", value);
    this.props.addItem(value);
    this.toggleInput();
  }

  toggleInput() {
    this.setState({
      showInput: !this.state.showInput
    });
  }

  render() {
    let items = this.props.items;

    const menuStyle = {
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 0',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      width: '150px',
      maxHeight: '200px',
      zIndex: '1000',
      fontFamily: '"Proxima Nova W08 Reg", sans-serif'
    };

    return (
      <div className="addItem">
        {this.state.showInput ?
          <Autocomplete
            inputProps={{autoFocus: true, placeholder: 'Choose item', onBlur: this.toggleInput}}
            getItemValue={item => item}
            onSelect={(value, item) => this.addItem(item)}
            onChange={(event) => {
              this.setState({autocompleteValue: event.target.value});
            }}
            items={items}
            shouldItemRender={this.shouldItemRender}
            menuStyle={menuStyle}
            renderItem={(item, isHighlighted) =>
              (<div className="autocompleteItem" style={{background: isHighlighted ? '#dfdfdf' : '#fff'}}>
                {item.title}
              </div>)
            }
          /> : <div className="newItem" onClick={this.toggleInput}><FontAwesome name="plus" size="2x" /></div>
        }
      </div>
    );
  }
}

import React, { ChangeEvent } from 'react';

class Page extends React.Component {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    console.log(inputValue);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputChange}
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default Page;

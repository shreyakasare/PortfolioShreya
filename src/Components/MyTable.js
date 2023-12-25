import React, { Component } from 'react';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      errorMessage: null,
      newRecord: '',
    };
  }

  handleAddRecord = () => {
    debugger
    const { data, newRecord } = this.state;

    if (data.includes(newRecord)) {
      this.setState({ errorMessage: 'Record already exists!' });
    } else {
      this.setState({
        data: [...data, newRecord],
        errorMessage: null,
        newRecord: '',
      });
    }
  };

  handleChange = (e) => {
    this.setState({ newRecord: e.target.value, errorMessage: null });
  };

  render() {
    const { data, newRecord, errorMessage } = this.state;

    return (
      <div>
        <input
          type="text"
          value={newRecord}
          onChange={this.handleChange}
          placeholder="Enter a new record"
        />
        <button onClick={this.handleAddRecord}>Add Record</button>
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <table>
          <thead>
            <tr>
              <th>Records</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record, index) => (
              <tr key={index}>
                <td>{record}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;

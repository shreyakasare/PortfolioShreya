import React, { Component } from "react";
import "./CycleThrough.css"; // Import the CSS file
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
class CycleThrough extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { srno: 1, name: "shre", age: 7, height: 4 },
        { srno: 2, name: "abc", age: 70, height: 4 },
        { srno: 3, name: "def", age: 8, height: 3 },
        { srno: 4, name: "ghi", age: 6, height: 34 },
        { srno: 5, name: "she", age: 71, height: 43 },
      ],
      currentSrno: 1,
      newEntry: {
        name: "",
        age: null,
        height: null,
        
      },
    };
  }

  handlePreviousClick = () => {
    debugger
    const { currentSrno } = this.state;
    if (currentSrno > 1) {
      this.setState({ currentSrno: currentSrno - 1 });
    }
  };

  handleNextClick = () => {
    debugger
    const { currentSrno, data } = this.state;
    if (currentSrno < data.length) {
      this.setState({ currentSrno: currentSrno + 1 });
    }
  };

  handleInputChange = (event) => {
    debugger
    const { name, value } = event.target;
    this.setState((prevState) => ({
      newEntry: {
        ...prevState.newEntry,
        [name]: value,
      },
    }));
  };

  handleDateChange = (date) => {
    debugger
   
    this.setState((prevState) => ({
      newEntry: {
        ...prevState.newEntry,
        dob: date,
        // [dob]: value
      },
    }));
  };

  deleteArrayItem = () => {
    debugger

    const { currentSrno, data } = this.state;
    const newData = data.filter((item) => item.srno !== currentSrno);
    this.setState({
      data: newData,
      currentSrno: newData.length > 0 ? newData[0].srno : null,
    });
  };

  addArrayItem = () => {
    debugger
    const { newEntry } = this.state;

    // Validate that the new entry has a name and date of birth (dob)
    if (newEntry.name) {
      // Create a new item with the newEntry data
      const newItem = {
        srno: this.state.data.length + 1,
        ...newEntry,
      };

      // Add the new item to the data array
      this.setState((prevState) => ({
        data: [...prevState.data, newItem],
        currentSrno: newItem.srno,
        newEntry: {
          name: "",
          age: 0,
          height: 0,
        
        },
      }));
    } else {
      alert("Please provide a name and date of birth (dob).");
    }
  };

  clearAll = () => {
    debugger

    this.setState({
      data: [],
      currentSrno: null,
      newEntry: {
        name: "",
        age: 0,
        height: 0,
       
      },
    });
  };

  render() {
    const { data, currentSrno, newEntry } = this.state;
    const currentItem = data.find((item) => item.srno === currentSrno);

    return (
      <div className="cycle-through-container">
        <h1>Data Viewer</h1>
        {currentItem && (
          <div className="data-display">
            <p>srno: {currentItem.srno}</p>
            <p>Name: {currentItem.name}</p>
            <p>Age: {currentItem.age}</p>
            <p>Height: {currentItem.height}</p>
           
          </div>
        )}

        <h2>Add New Entry</h2>
        <div className="input-fields">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newEntry.name}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newEntry.age}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="height"
            placeholder="Height"
            value={newEntry.height}
            onChange={this.handleInputChange}
          />
          {/* <DatePicker */}
          
          {/* <input
            name="dob"
            placeholder="Date of Birth"
            value={newEntry.dob}
            onChange={(e) =>
              {
                debugger
                this.setState({
              dob:e.target.value
            })}}
          />
           {newEntry.dob instanceof Date && (
            <p>DOB: {newEntry.dob.toLocaleDateString()}</p>
          )} */}
        </div>
       
       
        <div className="navigation-buttons">
        <button className="add-button" onClick={this.addArrayItem}>
          Add
        </button>
         
          {currentItem && (
          <button className="delete-button" onClick={this.deleteArrayItem}>
            Delete
          </button>
        )}
          <button
            className="nav-button"
            onClick={this.handlePreviousClick}
            disabled={currentSrno === 1}
          >
            Previous
          </button> 
          <button
            className="nav-button"
            onClick={this.handleNextClick}
            disabled={currentSrno === data.length}
          >
            Next
          </button>
          <button className="clear-button" onClick={this.clearAll}>
          Clear All
        </button>
        </div>
      </div>
    );
  }
}

export default CycleThrough;

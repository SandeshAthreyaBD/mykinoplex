import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class CreateEVent extends Component{
  constructor (props) {
    super(props)
    this.state = {
      startdate: new Date(),
      format:"DD/MM/YYYY",
      enableContainer:false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enableDiv = this.enableDiv.bind(this);
  }
  enableDiv() {
    this.setState({
      enableContainer:true
    });
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render(){
    const{format} = this.state;
    var divStyle = {
      display:this.state.enableContainer?'block':'none'
    };
    return(
        <div className = "container">
        <h4 className="h4-responsive font-weight-bold text-center mb-4">Have Screening Details ?? Please add here..</h4>
          <form onSubmit={ this.handleSubmit }>
            <div className="md-form-group ">
              <div className="row">
                <div className="col-8">
                  <label>Name of the Event:</label>
                  <input type="text" id="EventName" className="form-control"/>
                </div>
                <div className="col-4">
                  <label>Organizer:</label>
                  <input type="text" id="organizer" className="form-control"/>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6 md-form-group">
                  <label>Synopsis/Description:</label>
                  <textarea id="synopsis" placeholder="Write few words about event"className="form-control" rows="5"></textarea>
                </div>
                <div className="col-6">
                  <label>Cast:</label>
                  <textarea id="synopsis" className="form-control" rows="5"></textarea>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="md-form-group">
                    <label>Category:</label>
                    <select className="browser-default custom-select">
                    <option defaultValue>Select Category</option>
                    <option value="1">Thriller</option>
                    <option value="2">Action</option>
                    <option value="3">Drama</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="md-form-group">
                    <label>Trailer(link):</label>
                    <input type="text" id="trailer" className="form-control"/>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6 md-form-group file-upload-wrapper">
                  <label>Background Posters:</label>
                  <input type="file" id="BgPoster" className="file-upload" data-height="300" />
                </div>
                <div className="col-6 md-form-group file-upload-wrapper">
                  <label>Small Posters:</label><br/>
                  <input type="file" id="SmPoster" className="file-upload" data-height="300" />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="md-form-group">
                    <label>Start Date and Time: </label><br/>
                      <DatePicker
                        format={format}
                        showTimeSelect
                        dateFormat="Pp"
                        selected={this.state.startdate}
                        onChange={ this.handleChange }
                      />
                  </div>
                </div>
                <div className="col-6">
                  <label>End Date and Time: </label><br/>
                  <DatePicker
                      showTimeSelect
                      dateFormat="Pp"
                      selected={this.state.startdate}
                      onChange={ this.handleChange }
                  />
                </div>
              </div>
              <div className="row mt-4">
              <div className="col-3">
                  <div className="md-form-group">
                    <label>Theater:</label>
                    <select value={this.state.value} onChange={this.handleChange} className="browser-default custom-select">
                    <option defaultValue>Select Theater</option>
                    <option value>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-3">
                  <div className="md-form-group">
                    <label>City:</label>
                    <select className="browser-default custom-select" value={this.state.value} onChange={this.handleChange}>
                    <option defaultValue>Select City</option>
                    <option value>Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="md-form-group">
                    <label>Street:</label>
                    <input type="text" id="address"className="form-control"placeholder="stasse, houseNo"/>
                  </div>
                </div>
                <div className="col-2">
                  <div className="md-form-group">
                    <button type="button" className="btn green mt-4" onClick={this.enableDiv}>ADD</button>
                  </div>
                </div>
              </div>
              <div className="row mt-3"id="cover" style={divStyle}>
                <ul>
                  <li>
                    Theater Details
                  </li>
                </ul>
              </div>
              <div className="row mt-5">
                <div className="col text-center ">
                  <button type="button" className="btn blue-gradient">Submit</button>
                </div>
              </div>
            </div>
          </form>
    </div>
        
    );
  }
}

      

export default CreateEVent;
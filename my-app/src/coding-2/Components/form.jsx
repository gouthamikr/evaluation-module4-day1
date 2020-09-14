import React from "react";
import Table from "./table";
import "./style.css"
import Filter from "./filter"
import { v4 as uuidv4 } from "uuid";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            location: "",
            remote: false,
            company: "",
            salary: "",
            logo: "",
            sortMethod: null,
            sortVar: "All",
            date:"",
            data: []
        };
    }

    handleChange = (e) => {
        var d = new Date();
        var n = d.getTime()
        let value = e.target.name === "remote" ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value,
            id: uuidv4()
        });
        this.setState({
            date:n
        })
    };

    handleform = (e) => {
        e.preventDefault();
        console.log(this.state);

        const { id, title, company, location, salary, remote, date,logo, data } = this.state;

        let payload = {
            id,
            title,
            company,
            location,
            salary,
            remote,
            logo,
            date,
            data
        };

        this.setState((prevState) => ({
            data: [...prevState.data, payload]
        }));

        console.log(data)
        this.resetValue()
    };

    resetValue() {
        this.setState({
            title: "",
            company: "",
            location: "",
            salary: "",
            logo: "",
            remote: false
        })
    }

    handleSort = (value) => {
        this.setState({
            sortMethod: value
        })
    }

    handleFilter = (value) => {
        this.setState({
            sortVar: value
        })
    }

    render() {
        const {title, salary, company, location, logo} = this.state
        return (
            <div>
                <div className="container">

                    <form className="form" onSubmit={this.handleform}>
                        <h1>Job Listing</h1>
                        <label>Title :
                            <input
                                name="title"
                                type="text"
                                value={title}
                                placeholder="Enter the title"
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>Salary :
                            <input
                                type="number"
                                name="salary"
                                value={salary}
                                placeholder="Enter salary"
                                onChange={this.handleChange}
                                required
                            />
                        </label>
                        <br />
                        <label>Company :
                            <input
                                type="text"
                                name="company"
                                value={company}
                                onChange={this.handleChange}
                                placeholder="Enter the company name"
                                required
                            />
                        </label>
                        <br />
                        <label>Location :
                            <select
                                onChange={this.handleChange}
                                name="location"
                                value={location}
                            >
                                <option value="">------choose location-----</option>
                                <option value="Banglore">Banglore</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Chennai">Chennai</option>
                            </select>
                        </label>
                        <br />
                        <label>Company logo :
                            <input
                                type="text"
                                name="logo"
                                value={logo}
                                onChange={this.handleChange}
                                placeholder="Enter the url for company logo"
                                required
                            />
                        </label>
                        <br />
                        <label>Remote :
                            <input
                                type="checkbox"
                                name="remote"
                                onChange={this.handleChange}
                            />(click for remote)
                        </label>
                        <br/>
                        <input type="submit" value="Submit" className="btn" />
                    </form>

                    <div className="filter">
                        <Filter handleFilter={this.handleFilter} handleSort={this.handleSort}/>
                    </div>
                </div>

                <div>
                    {this.state.data.length > 0 ? (
                        <Table
                            data={this.state.data}
                            sortVar={this.state.sortVar}
                            sortMethod={this.state.sortMethod}
                        />
                    ) : (
                            <h3>enter the details</h3>
                        )}
                </div>

            </div>
        )
    }
}
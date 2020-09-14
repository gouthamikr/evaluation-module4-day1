import React from "react";
import "./style.css"

class Table extends React.Component {
    render() {
        const { data, sortVar, sortMethod } = this.props
        // console.log("data from table", data)
        // console.log(sortMethod, sortVar, "sort")
        console.log(this.props.data[0].date)
        return (
            <>
                <div className="card">
                    <div>
                        {
                            data.sort((a,b)=>b.date-a.date)
                            .filter(({ location }) => {
                                if (sortVar === "All") {
                                    return data
                                } else {
                                    return location === sortVar
                                }
                            }).sort((a, b) => {
                                if (sortMethod === null) {
                                    return 0
                                }
                                if (sortMethod === "asc") {
                                    return a.salary - b.salary
                                }
                                if (sortMethod === "desc") {
                                    return b.salary - a.salary
                                }
                            }).map(item => (
                                <div key={item.id} className="cardCont">
                                    <div className="flex">
                                        <img src={item.logo} className="logo"/>
                                    </div>
                                    <div className="flex">
                                        <h3>{item.company}</h3></div>
                                    <div className="flex">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="flex">
                                        <h3>{item.salary}</h3>
                                    </div>
                                    <div className="flex">
                                        <h3>{item.location}</h3>
                                    </div>
                                    <div className="flex">
                                        {item.remote === false ? 
                                            <div className="red"></div> : 
                                            <div className="green"></div>
                                        }
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </>
        );
    }
}
export default Table;
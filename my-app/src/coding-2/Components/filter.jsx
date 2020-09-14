import React from "react";
import "./style.css"

export default class Filter extends React.Component {
    render() {
        const {handleFilter,handleSort}=this.props
        return (
        <>
            <h1>Filter & sort</h1>
            <div><br />
                Filter by location :<br />
                {
                    ["All", "Banglore", "Delhi", "Chennai"].map((item) =>
                        <button className="btn" key={item.id} value={item} onClick={() => handleFilter(item)}>
                            {item}
                        </button>
                    )
                }
                <br /><br />
                &nbsp; Sort by Salary: &nbsp;<br />
                {
                    ["asc", "desc"].map((item) =>
                        <button className="btn" key={item.id} value={item} onClick={() =>handleSort(item)}>
                            {item}
                        </button>
                    )
                }
            </div>
        </>
        )
    }
}
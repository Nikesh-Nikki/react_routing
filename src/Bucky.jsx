import React from "react";
import {Link} from "react-router-dom";

function Bucky(){
    return <>
        <p>this is bucky</p>
        <Link to="/">lets go back!!</Link>
        {/* <a href="/">lets go back</a> */}
    </>;
}

export default Bucky;
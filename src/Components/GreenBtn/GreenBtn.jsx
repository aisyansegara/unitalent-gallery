import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function GreenBtn (param) {
    return (
        <Button variant="success">
            <Link to={param.btnLink} className="text-decoration-none text-light text-capitalize">{param.btnTitle}</Link>
        </Button>
    )
}

export default GreenBtn;
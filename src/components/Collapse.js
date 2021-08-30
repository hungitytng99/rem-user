import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';


const MyCollapse = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="category-collapse">
            <div
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                className="category-collapse__header"
            >
                <div>Collapse</div>
                <i className="category-collapse__down-icon fas fa-angle-down"></i>

            </div>
            <Collapse in={open}>
                AAAAAAAA
            </Collapse>
        </div>
    );
}

export default MyCollapse;
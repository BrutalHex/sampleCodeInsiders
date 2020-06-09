import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SharedLayout = ({ children:any }) => (
    <div className="row">
            {children}
    </div>
);

export default SharedLayout;
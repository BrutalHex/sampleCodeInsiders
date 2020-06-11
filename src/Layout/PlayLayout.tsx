import React, { FunctionComponent  } from 'react';
import { Route } from 'react-router-dom';
import '../Pages/style/common.scss';
import '../Pages/style/play.scss';
import Footer from '../Pages/Footer';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';


 export const PlayLayout:FunctionComponent<any> =({children})=>(   

<div className="container-fluid playlayout">
     <div className="row menu-bar">
         <Navbar bg="transparent" collapseOnSelect expand="lg" className="w-100">
             <NavbarToggle aria-controls="basic-navbar-nav" />
             <NavbarBrand href="/" 
             className="col-9 col-sm-3 col-lg-3 col-xl-2 pl-lg-3 ml-lg-3 ml-md-1 ml-xl-5 pl-xl-5 navbar-brand 
             navbar-brand mx-sm-auto align-self-sm-center navbar-brand navbar-brand navbar-brand">
              SampleInsider
             </NavbarBrand>                       
             <NavbarCollapse className="col-12 col-sm-5 col-lg-6 
             justify-content-end ml-md-5 pl-md-5 ml-lg-2 navbar-collapse collapse" id="basic-navbar-nav">
                 <Nav  >
                     <NavLink className="mr-md-4" href="/Dashboard/Gallery">Home</NavLink>
                 </Nav>
             </NavbarCollapse>                    
         </Navbar>
     </div>
     <div className="row children-area px-2 py-4 p-md-4 d-flex">
         {children}
     </div>
     <Footer />
</div>

); 

export const PlayLayoutRoute :FunctionComponent<any>= ({ Component: Component , ...rest }) => {
    return (<PlayLayout>
        <Route {...rest} render={(matchProps) => (
            <Component {...matchProps} />
        )} /> </PlayLayout>
    )
}
export default PlayLayoutRoute;  
import React from 'react';

const NavBar = () => {
    return (
        <div className="container-fluid">
		
<nav className="navbar navbar-dark bg-danger">

<a className="navbar-brand" href="#">Logo</a>

<ul className="nav navbar-nav">
<li className="nav-item">
<a className="nav-link" href="#">Link 1</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Link 2</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Link 3</a>
</li>
</ul>
</nav>

</div>
    );
};

export default NavBar;
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
                <div class="navbar-nav">
                    <div class="nav-item text-nowrap">
                        <a class="nav-link px-3" href="#">Sign in</a>
                    </div>
                </div>
            </header>
        );
    }
}

export {Header}


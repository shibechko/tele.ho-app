import React from "react";
import {MenuItem} from "../components/mainMenu/MenuItem"

class MainMenu extends React.Component {
    render() {
        return (
            <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div class="position-sticky pt-3 sidebar-sticky">
                    <div class="accordion">
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePosting" aria-controls="collapsePosting">
                                    POSTING
                                </button>
                            </div>
                            <div class="accordion-collapse show" id="collapsePosting">
                                <ul class="nav flex-column">
                                    <MenuItem text="Drafts" icon="bi-envelope-open" href="#"/>
                                    <MenuItem text="Planned" icon="bi-alarm" href="#"/>
                                    <MenuItem text="Published" icon="bi-globe" href="#"/>
                                    <MenuItem text="Bin" icon="bi-trash3" href="#"/>
                                </ul>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <div class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSettings" aria-expanded="true" aria-controls="collapseSettings">
                                    SETTINGS
                                </button>
                            </div>
                            <div class="accordion-collapse collapse" id="collapseSettings">
                            </div>
                        </div>
                    </div>
                </div>
            </nav>    
        );
    }
}

export {MainMenu}

import React, { Component } from 'react'
import About from './About'
import Recipes from './Recipes'
import Forum from './Forum'
import Navbar from './Navbar'


class HomePage extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <section className="homepage">

                <h2 className="homepage-h2">Homepage</h2>
                <p>Click on the buttons inside the tabbed menu:</p>

                <div className="tab">
                    <button className="tablinks" onclick="openCity(event, 'London')">About <i className="fa fa-question" aria-hidden="true"></i></button>
                    <button className="tablinks" onclick="openCity(event, 'Paris')">Recipes <i className="fa fa-cutlery" aria-hidden="true"></i></button>
                    <button className="tablinks" onclick="openCity(event, 'Tokyo')">Forum <i className="fa fa-comments-o" aria-hidden="true"></i></button>
                </div>
                <p>(As you select a tab, one of the page below will appear: about recipes or forum)</p>

                <About />
                <Recipes />
                <Forum />
            </section>
            </div>
        )
    }

}

export default HomePage;
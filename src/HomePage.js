import React, { Component } from 'react'
import About from './About'
import Recipes from './Recipes'
import Forum from './Forum'


class HomePage extends Component {
    render() {
        return (
            <div>
                <About />
                <Recipes />
                <Forum />
            </div>
        )
    }

}

export default HomePage;
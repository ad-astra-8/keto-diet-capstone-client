import React, { Component } from 'react'
import About from './About'
import Recipes from './Recipes'
import Forum from './Forum'


class Homepage extends Component {
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

export default Homepage;
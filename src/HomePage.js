import React, { Component } from 'react'
import About from './About'
import Recipes from './Recipes'
import Forum from './Forum'
import Navbar from './Navbar'

const tabsProp = [
    { name: 'Routine tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Workout tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Recipes tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ]
  
class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            results: []

        }
    }



    render() {
        return (
            <div>
            <Navbar />
            <section className="homepage">

                <h2 className="homepage-h2">Homepage</h2>
                <p>Click on the buttons inside the tabbed menu:</p>

                <div className="tab">
                    {/* <button className="tablinks" onClick="openCity(event, 'London')">About <i className="fa fa-question" aria-hidden="true"></i></button>
                    <button className="tablinks" onClick="openCity(event, 'Paris')">Recipes <i className="fa fa-cutlery" aria-hidden="true"></i></button>
                    <button className="tablinks" onClick="openCity(event, 'Tokyo')">Forum <i className="fa fa-comments-o" aria-hidden="true"></i></button> */}
                </div>
                <p>(As you select a tab, one of the page below will appear: about recipes or forum)</p>

                <About />
                <Recipes />
                <Forum tabs={tabsProp}/>
            </section>
            </div>
        )
    }

}

export default HomePage;
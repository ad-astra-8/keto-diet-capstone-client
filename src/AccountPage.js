import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import config from "./config";


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorites: []
        };
    }

    componentDidMount() {

        let getFavoriteUrl = `${config.API_ENDPOINT}/recipes`;

        fetch(getFavoriteUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                this.setState({
                    favorites: data
                });
            })
            .catch(error => this.setState({ error }))
    }

    render() {

        const existingFavorites =
            this.state.favorites.map((favorite, key) => {

                return (
                    <ul className="favorite" key={key}>
                        <li>{favorite.title}</li>
                        <li>{favorite.image}</li>
                        <li>{favorite.source}</li>
                    </ul>
                )
            })

        return (
            <div>
                <Navbar />
                <section className="my-account">
                    <h1 className="">My Favs:</h1>

                </section>
                <div className="favorite-list">
                    <h2>Favorites</h2>
                    {existingFavorites}
                </div>
            </div>

        )
    }

}

export default Account;
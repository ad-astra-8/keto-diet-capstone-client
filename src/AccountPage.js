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
                        <li className='result-title'>{favorite.title}</li>
                        <li>
                            <a href={favorite.source} target='_blank' rel="noopener noreferrer">
                                <img
                                    className="results-link"
                                    src={favorite.image}
                                    alt="meal-preview"
                                />
                            </a>
                        </li>
                    </ul>
                )
            })

        return (
            <div>
                <Navbar />
                <section className="my-account">
                    <h1 className="">My F<i className="fa fa-heart" aria-hidden="true"></i>vs:</h1>
                </section>
                <div className="favorite-list">
                    {existingFavorites}
                </div>
            </div>

        )
    }

}

export default Account;
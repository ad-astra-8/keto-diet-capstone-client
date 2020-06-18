import React, {Component} from  'react'
import MyPosts from './MyPosts'
import MyRecipes from './MyRecipes'




class Account extends Component {
    render() {
        return (
            <div>
                <MyPosts />
                <MyRecipes />
            </div>
        )
    }

}

export default Account;
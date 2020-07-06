import React, { Component } from 'react'
// import Navbar from './Navbar'
import config from './config'
// import ValidationError from './ValidationError';


class AddPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // appError: null,
            formValid: false,
            // errorCount: null,
            title: '',
            tabName: '',
            content: '',
            errors: {
                tabName:
                    'You must select a tab',
                title: 'You must enter a note title',
                content: 'You must enter a note'
            }
        }
    }



    updateErrorCount = () => {
        let errors = this.state.errors;
        let count = 0;

        Object.values(errors).forEach(val => {
            if (val.length > 0) {
                count++;
            }
        });
        this.setState({ errorCount: count });
        let valid = count === 0 ? true : false;
        this.setState({ formValid: valid });
    };

    updatetabName(tabName) {
        this.setState({ tabName: { value: tabName, touched: true } });
    }

    // validateEntry = (name, value) => {
    //     let err = '';
    //     if (name === 'name') {
    //         if (value.length === 0) {
    //             return 'Name is required.'
    //         }
    //         else if (name.length < 3) {
    //             return "Name must be at least 3 characters long";
    //         }
    //     }
    //     const { errors } = { ...this.state };
    //     errors[name] = err;
    //     this.setState({ errors });
    // }

    handleChange = e => {
        const { title, value } = e.target;
        this.setState(
            { [title]: value.trim() },
        );
        // this.validateEntry(name, value.trim());
        this.updateErrorCount();
    }

    handleSubmit = (e) => {
        e.preventDefault();
console.log('submit')
        // if (this.state.errorCount > 0) return;

        const { title, tabName, content } = e.target;
        const note = {
            // note_name: title.value,
            name: title.value,
            id_folder: parseInt(tabName.value),
            content: content.value,
            // modified: new Date()
        };
        console.log(note)
        this.setState({ appError: null });

const url = 'http://localhost:8000/api/notes';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                console.log({data});
                // title.value = '';
                // content.value = '';
                // tabName.value = '';
                // this.context.addNote(data);
                // this.setState({ data });
                // this.props.history.push('/', data);
            })

            
            .catch(error => {
                // this.setState({ appError: error });
            });
    };

    render() {
        // const { errors } = this.state;
        // const folders = this.context.folders;
        // if (this.state.appError) {
        //     return <p className="error">{this.state.appError}</p>;
        // }
        // console.log(this.props.tabs)

        return (
            <div>
                {/* <Navbar /> */}
                <section className="addPost">
                    <form className="add-note" onSubmit={this.handleSubmit}>
                        {/* <legend>
                            <h3>Add Note</h3>
                        </legend> */}
                        <fieldset className="post-div">
                        <label htmlFor="title">Post Title</label>
                        <input
                            type="text"
                            className="add-note__name"
                            name="title"
                            id="title"
                            defaultValue=""
                            onChange={this.handleChange}
                        />
                        </fieldset>
                        {/* {errors.name.length > 0 && (
                    <ValidationError message={errors.name} />)} */}
                        {/* <label htmlFor="content"><h4>Post Content</h4></label>*/}
                        <fieldset className="post-div">
                        <label htmlFor="post-comment">Post your comment about:</label>

                        <select id="tabName" name="tabName" value={this.state.tabName.value} onChange={e => this.updatetabName(e.target.value)}>
                            <option value={this.state.tabName}>Select a folder</option>
                            {this.props.tabs.map((tab, index) => (
                                <option key={index} value={index+1}>{tab.tabName}</option>))}
                        </select>

                        <textarea id="post-comment" placeholder="leave your comment here" name="content"
                            // id="content"
                            defaultValue=""
                            onChange={this.handleChange}
                        >
                        </textarea>
                        </fieldset>
                        <button
                            type="submit"
                            id="submit-btn"
                            // disabled={
                            //     this.state.formValid === false
                            // }
                        >Submit
                    </button>

                        {/* {this.state.errorCount !== null ? (
                            <p className="form-status">
                                Form is {this.state.formValid ? 'complete' : 'incomplete'}
                            </p>
                        ) : null} */}

                    </form>
                </section>
            </div>
        )
    }

}

export default AddPost;
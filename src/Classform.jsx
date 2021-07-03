import React, { Component } from 'react';


class Classform extends Component {
    constructor (props) {
        super (props);
        this.state = {
            username: "",
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({username: "", email: "", password: ""});
    }

    render() {
        return (
            <form
            onSubmit={this.handleSubmit}  style={{marginLeft: "50px", marginTop: "50px"}}>
                <div>
                    <label htmlFor="">Username</label>
                    <br/>  
                    <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange} />
                    <br/>
                    <label htmlFor="">email</label>
                    <br/>  
                    <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange} />
                    <br/>
                    <label htmlFor="">Password</label>
                    <br/>  
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange} />
                </div>
                <button onSubmit={this.handleSubmit}>submit</button>
                
            </form>
                
        );
    }
}



export default Classform;

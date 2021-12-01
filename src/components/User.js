import React from 'react';
import axios from 'axios';
import FollowerList from './FollowerList';

class User extends React.Component{
    constructor() {
        super();
        this.state= {
            name: '',
            bio: '',
            repos: '',
            followers: '',
            avatarSRC: '',
        }
    }
    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user}`)
            .then(res=>{
                this.setState({
                    ...this.state,
                    name: res.data.name,
                    bio: res.data.bio,
                    repos: res.data.public_repos,
                    followers: res.data.followers,
                    avatarSRC: res.data.avatar_url
                })
            })
            .catch(err=>{
                console.log(err);
            })
    }
    render() {
        return(
        <div>
            <div>
                <img src={this.state.avatarSRC} width='200'/>
            </div>
            <div>
                <h2>{this.state.name}</h2>
                <h4>{this.state.bio}</h4>
                <h3>TOTAL REPOS: {this.state.repos}</h3>
                <h3>TOTAL FOLLOWERS: {this.state.followers}</h3>
            </div>
            <div>
                <h2>FOLLOWERS:</h2>
            </div>
            <FollowerList/>
        </div>
        )
    }
}

export default User;
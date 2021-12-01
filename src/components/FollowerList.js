import axios from 'axios';
import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component{
    constructor(){
        super();
        this.state = {
            followersArray: [],
        }
    }
    componentDidMount() {
        axios.get(`https://api.github.com/users/${this.props.user}/followers`)
            .then(resp => {
                this.setState({
                    ...this.state,
                    followersArray: resp.data,
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return(
            <div>
                {this.state.followersArray.map(follower => (
                    <Follower follower={follower} key={follower.id}/>
                ))}
            </div>
        )
    }
}

export default FollowerList;
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
        axios.get('https://api.github.com/users/tetondan/followers')
            .then(resp => {
                console.log(resp)
                this.setState({
                    ...this.state,
                    followersArray: resp.data,
                })
                console.log(this.state)
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
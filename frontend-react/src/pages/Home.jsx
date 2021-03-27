import React from 'react';

import { getAuthTokenFromEve } from '../lib/EveApi';

class Home extends React.Component {

    state = {
        loading: false,
        error: ''
    }

    async componentDidMount(){

        if (localStorage.getItem('access_token') && localStorage.getItem('refresh_token')){

        } else {
            const data = await getAuthTokenFromEve(this.props.location.search);
    
            if(data.access_token){
                localStorage.setItem('access_token',data.access_token);
                localStorage.setItem('refresh_token',data.refresh_token);
                this.setState({
                    
                })
            } else if(data.error){
                this.props.history.push(`/?error=error`)
            }
        }

    }

    render() {

        return (
            <div>
            
            </div>
        );
    };

}

export default Home;
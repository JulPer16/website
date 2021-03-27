import React from 'react';

import { getAuthTokenFromEve } from '../lib/EveApi';
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router';

class Callback extends React.Component {

    state = {
        loading: false,
        error: ''
    }

    async componentDidMount(){

        this.setState({
            loading: true
        });

        const data = await getAuthTokenFromEve(this.props.location.search);

        this.setState({
            loading: false,
            data
        });

        if(data.access_token){
            localStorage.setItem('access_token',data.access_token);
            localStorage.setItem('refresh_token',data.refresh_token);
            this.setState({
                
            })
        } else if(data.error){
            this.setState({
                error: data.error
            })
        }
        // if (localStorage.getItem('access_token') && localStorage.getItem('refresh_token')){

        // } else {
        // }

    }

    render() {

        if (this.state.loading){
            return <div className="min-h-screen flex flex-row justify-center items-center">
                <Loader 
                    type="Circles"
                    color="#cc5d18"
                    height={200}
                    width={200}
                    timeout={3000}
                />
            </div>
        }

        if (this.state.data){
            return <Redirect to="/home" />
        }

        if (this.state.error){
            return <Redirect to="/?error=error" />
        }

        return <div></div>;

    };

}

export default Callback;
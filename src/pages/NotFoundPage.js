import React from 'react';
import { URLS, APIS } from '../utils/constants'

import '../css/file.css'


export default class NotFoundPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogArray: []
        };
        // this.clickToPush = this.clickToPush.bind(this);
    }

    componentDidMount() {
        fetch(URLS.HEROKU + APIS.GET_ALL_BLOG, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                username: "11",
            })
        })
            .then(response => response.json())
            .then(res => {
                // console.log(json)
                this.setState({ blogArray: res }, () => {
                    console.log("ll", this.state.blogArray)
                })
                // history.push('/AllUserScreen', { uid: res.uid })

            })
            .catch(error => console.log('Authorization failed : ' + error.message));
    }

    // clickToPush=(data)=> {
    //   // console.log("pppp",data)
    //   history.push('/BlogDetail', { blogDetailValues:data })
    // }


    render() {
        return (
            <div className="App imgt w-100 h-100 col-12" >
                
            </div>
        );
    }
}


import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.home()
    }
    home = () => {
        // this.get(`${this.api.home}`, '').then( res => {
        //     console.log(res)
        // })
    }
    render() {
        return (
            <div>
                <h1>整车订单</h1>
                <input type="text"/>
            </div>
        );
    }
}

export default Home;
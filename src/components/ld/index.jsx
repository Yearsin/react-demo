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
        console.log(this.$api.basic);
        // this.get(`${this.api.home}`, '').then( res => {
        //     console.log(res)
        // })
    }
    render() {
        return (
            <div>
                <h1>零担发货</h1>
                <input type="text"/>
            </div>
        );
    }
}

export default Home;
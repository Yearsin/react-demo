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
                <h1>Home页面</h1>
            </div>
        );
    }
}

export default Home;
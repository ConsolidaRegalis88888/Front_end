import React, {Component} from 'react';

class BlogPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if (this.state.post)
        {
            return (
                <div>
                    Blog
                </div>
            )}else {
            return <h1>Loading...</h1>
        }
    }
}

export default BlogPage;
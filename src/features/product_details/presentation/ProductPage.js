import React, {Component} from 'react';

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        if(this.state.product){
            return (
                <div>

                </div>
            );
        } else {
            return <h1>Loading...</h1>
        }
    }
}

export default ProductPage;
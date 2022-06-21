import React, {Component} from 'react';
import getProductById from "../domain/use_case/getProductById";

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        getProductById(2).then((result)=>{
            console.log(result)
        });
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
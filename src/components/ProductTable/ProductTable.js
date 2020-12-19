import React, { Component } from 'react';
import ProductRow from './../ProductRow/ProductRow'

class ProductTable extends Component {

    render() {
        return (
            <div className="tables">
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <th>Название</th>
                                <th>Категория</th>
                                <th>Цена</th>
                                <th>Остаток на складе</th>
                                <th>Действия</th>
                            </tr>
                            {
                                Object.keys(this.props.products).map((productName, index) => {
                                    const product = this.props.products[productName]
                                    return (
                                        <ProductRow 
                                            key={product.id}
                                            id={product.id}
                                            product={product}
                                            onRemoveProduct={this.props.removeProduct}
                                            onUpdateHandler={this.props.updateProduct}
                                            changeHandler={event => this.props.onChangeProduct(event, productName)}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductTable;


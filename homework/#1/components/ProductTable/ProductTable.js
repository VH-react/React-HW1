import React from 'react';
import ProductRow from './../ProductRow/ProductRow'

const ProductTable = props => {
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
                            Object.keys(props.products).map((productName, index) => {
                                const product = props.products[productName]
                                return (
                                    <ProductRow 
                                        key={product.id}
                                        id={product.id}
                                        product={product}
                                        onRemoveProduct={props.removeProduct}
                                        onUpdateHandler={props.updateProduct}
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

export default ProductTable;
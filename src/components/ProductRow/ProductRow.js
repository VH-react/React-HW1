import React, { Component } from 'react';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            dataProduct: {
                id: this.props.product.id,
                name: this.props.product.name,
                category: this.props.product.category,
                price: this.props.product.price,
                balance: this.props.product.balance
            }
        }
    }

    changeNameHandler = (e) => {
        const dataProduct = {...this.state.dataProduct}
        dataProduct.name = e.target.value
        this.setState({
            dataProduct
        })
    }
    changeCategoryHandler = (e) => {
        const dataProduct = {...this.state.dataProduct}
        dataProduct.category = e.target.value
        this.setState({
            dataProduct
        })
    }
    changePriceHandler = (e) => {
        const dataProduct = {...this.state.dataProduct}
        dataProduct.price = e.target.value
        this.setState({
            dataProduct
        })
    }
    changeBalanceHandler = (e) => {
        const dataProduct = {...this.state.dataProduct}
        dataProduct.balance = e.target.value
        this.setState({
            dataProduct
        })
    }

    updateRow = (e) => {
        this.setState({
            editMode: false
        })
        this.props.onUpdateHandler(this.state.dataProduct)
    }

    editHandler = updatedProduct => {
        this.setState({editMode: false});
        this.props.onEditHandler(updatedProduct)
    }

    render() {
        {if (this.state.editMode) {
            return (
                <tr>
                    <td><Input type="text" cssClass="edit-input" value={this.state.dataProduct.name} onChange={this.changeNameHandler}/></td>
                    <td><Input type="text" cssClass="edit-input" value={this.state.dataProduct.category} onChange={this.changeCategoryHandler}/></td>
                    <td><Input type="number" cssClass="edit-input" value={this.state.dataProduct.price} onChange={this.changePriceHandler}/></td>
                    <td><Input type="number" cssClass="edit-input" value={this.state.dataProduct.balance} onChange={this.changeBalanceHandler}/></td>
                    <td>
                        <button className="confirm" onClick={this.updateRow}><FontAwesomeIcon icon={faCheck} size="lg" /></button>
                        <button className="cancel" onClick={() => this.setState({editMode: false})}><FontAwesomeIcon icon={faTimes} size="lg" /></button>
                        <button className="delete" onClick={() => {this.props.onRemoveProduct(this.props.product.id)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.category}</td>
                    <td>{this.props.product.price}$</td>
                    <td>{this.props.product.balance} шт</td>
                    <td>
                        <button className="edit" onClick={() => this.setState({editMode: true})}><FontAwesomeIcon icon={faPenSquare} size="lg" /></button>
                        <button className="delete" onClick={() => {this.props.onRemoveProduct(this.props.product.id)}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                    </td>
                </tr>
            )
        }}
    }

}

export default ProductRow;

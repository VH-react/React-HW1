import React, { Component } from 'react';
import RowEditForm from './RowEditForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false
        }
    }

    updateRow = updatedProduct => {
        this.setState({
            editMode: false
        })
        this.props.onUpdateHandler(updatedProduct)
    }

    editCancel = () => {
        this.setState({ editMode: false })
    }

    render() {
        {if (this.state.editMode) {
            return (
                <tr>
                    <RowEditForm product={this.props.product} onUpdate={this.updateRow} onCancel={this.editCancel} />
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
import React, { Component } from 'react';
import Input from '../Input/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

function validateCategory(category) {
    const re = /^[а-яa-z]+$/i;
    return re.test(String(category).toLowerCase());
}

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            formControls: {
                name: {
                    value: this.props.product.name,
                    type: 'text',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                    }
                },
                category: {
                    value: this.props.product.category,
                    type: 'text',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                    }
                },
                price: {
                    value: this.props.product.price,
                    type: 'number',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                    }
                },
                balance: {
                    value: this.props.product.balance,
                    type: 'number',
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                    }
                }
            }
        }
    }

    validateControl(value, validation) {
        if(!validation) {
            return true;
        }
    
        let isValid = true
    
        if(validation.required) {
            isValid = value.trim() !== '' && isValid
        }
        if(validation.category) {
            isValid = validateCategory(value) && isValid
        }
        return isValid
    }

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
    
        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)
    
        formControls[controlName] = control
    
        let isFormValid = true
    
        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid 
        })
        this.setState({
            formControls, isFormValid
        })
    }

    updateRow = e => {
        this.setState({
            editMode: false
        })
        const productData = {
            id: this.props.product.id,
            name: this.state.formControls.name.value,
            category: this.state.formControls.category.value,
            price: this.state.formControls.price.value,
            balance: this.state.formControls.balance.value
        }
        this.props.onUpdateHandler(productData)
    }

    editHandler = updatedProduct => {
        this.setState({editMode: false});
        this.props.onEditHandler(updatedProduct)
    }

    render() {
        {if (this.state.editMode) {
            return (
                <tr>
                    {
                        Object.keys(this.state.formControls).map((controlName, index) => {
                            const control = this.state.formControls[controlName]
                            return (
                                <td>
                                    <Input 
                                        key={controlName + index}
                                        type={control.type} 
                                        cssClass="edit-input" 
                                        value={control.value} 
                                        valid={control.valid}
                                        touched={control.touched}
                                        shouldValidate={!!control.validation}
                                        errorMessage=" "
                                        onChange={e => this.onChangeHandler(e, controlName)}/>
                                </td>
                            )
                        })
                    }
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

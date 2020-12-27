import React, { Component } from 'react';
import Input from '../Input/Input';
import { validateControl } from '../validateHelper/validateHelper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

class RowEditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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

    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
    
        control.value = event.target.value
        control.touched = true
        control.valid = validateControl(control.value, control.validation)
    
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
        const productData = {
            id: this.props.product.id,
            name: this.state.formControls.name.value,
            category: this.state.formControls.category.value,
            price: this.state.formControls.price.value,
            balance: this.state.formControls.balance.value
        }
        const isValid = this.state.formControls.name.value !== "" && this.state.formControls.category.value !== "" && this.state.formControls.price.value !== "" && this.state.formControls.balance.value !== ""
        if (isValid) {
            this.props.onUpdate(productData)
        }
    }

    render() {
        return (
            <React.Fragment>
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
                    <button className="cancel" onClick={this.props.onCancel}><FontAwesomeIcon icon={faTimes} size="lg" /></button>
                </td>
            </React.Fragment>
        );
    }
}

export default RowEditForm;
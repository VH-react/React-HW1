import React, { Component } from 'react';
import Input from '../Input/Input';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class ProductForm extends Component {
    sumbitHandler = e => {
        e.preventDefault();
    }
    addNewProduct = props => {
        const productData = {
            id: Math.random(),
            name: this.props.formControls.name.value,
            category: this.props.formControls.category.value,
            price: this.props.formControls.price.value,
            balance: this.props.formControls.balance.value
        }
        this.props.onSumbitProduct(productData);
    }

    render() {
        return (
            <div className="controls">
                <form onSubmit={this.sumbitHandler}>
                    {
                        Object.keys(this.props.formControls).map((controlName, index) => {
                            const control = this.props.formControls[controlName]
                            return (
                                <Input 
                                    key={controlName + index}
                                    type={control.type}
                                    cssClass="Input"
                                    value={control.value}
                                    valid={control.valid}
                                    touched={control.touched}
                                    label={control.label}
                                    shouldValidate={!!control.validation}
                                    errorMessage={control.errorMessage}
                                    onChange={event => this.props.onChangeHandler(event, controlName)}
                                />
                            )
                        })
                    }
                    <Button onClick={this.addNewProduct} primary disabled={!this.props.isFormValid}>
                        Добавить
                    </Button>
                </form>
            </div>
        );
    }
}

export default ProductForm;



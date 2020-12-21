import React, { Component } from 'react';
import Input from '../Input/Input';
import {validateControl} from './../validateHelper/validateHelper'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class ProductForm extends Component {
    state = {
        isFormValid: false,
        formControls: {
          name: {
            value: '',
            type: 'text',
            label: 'Название',
            errorMessage: 'Введите корректное название',
            valid: false,
            touched: false,
            validation: {
                required: true,
            }
          },
          category: {
            value: '',
            type: 'text',
            label: 'Категория',
            errorMessage: 'Введите категорию (без цифр)',
            valid: false,
            touched: false,
            validation: {
              category: true,
              required: true
            }
          },
          price: {
            value: '',
            type: 'number',
            label: 'Цена',
            errorMessage: 'Введите корректную цену',
            valid: false,
            touched: false,
            validation: {
                required: true,
            }
          },
          balance: {
            value: '',
            type: 'number',
            label: 'Остаток на складе',
            errorMessage: 'Введите корректное количество',
            valid: false,
            touched: false,
            validation: {
                required: true,
            }
          }
        }
    }
    sumbitHandler = e => {
        e.preventDefault();
    }

    resetForm = () => {
        const formControls = {...this.state.formControls}
        Object.keys(formControls).forEach(control => {
          const controlValue = formControls[control]
          controlValue.value = '' 
        })
        this.setState({
          formControls: {...this.state.formControls}
        })
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

    addNewProduct = props => {
        const productData = {
            id: Math.random(),
            name: this.state.formControls.name.value,
            category: this.state.formControls.category.value,
            price: this.state.formControls.price.value,
            balance: this.state.formControls.balance.value
        }
        this.props.onSumbitProduct(productData);
        this.resetForm()
    }


    render() {
        return (
            <div className="controls">
                <form onSubmit={this.sumbitHandler}>
                    {
                        Object.keys(this.state.formControls).map((controlName, index) => {
                            const control = this.state.formControls[controlName]
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
                                    onChange={event => this.onChangeHandler(event, controlName)}
                                />
                            )
                        })
                    }
                    <Button onClick={this.addNewProduct} primary disabled={!this.state.isFormValid}>
                        Добавить
                    </Button>
                </form>
            </div>
        );
    }
}

export default ProductForm;
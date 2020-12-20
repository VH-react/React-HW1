import React, { Component } from 'react';
import './App.css';
import ProductForm from './components/ProductForm/ProductForm'
import ProductTable from './components/ProductTable/ProductTable'

function validateCategory(category) {
  const re = /^[а-яa-z]+$/i;
  return re.test(String(category).toLowerCase());
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
      },
      productRows: [
        { id: "1", name: 'Ноутбук', category: 'Компьютеры', price: '300', balance: 25},
        { id: "2", name: 'Процессор', category: 'Комплектующие', price: '300', balance: 30}
      ]
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

  removeProduct = id => {
    this.setState({
      productRows: this.state.productRows.filter(product => product.id !== id)
    })
  };

  addProduct = newProduct => {
    this.setState({
      productRows: [...this.state.productRows, newProduct]
    })
    this.resetForm()
  };

  updateProduct = updatedProduct => {
    console.log(updatedProduct)
    this.setState({
      productRows: this.state.productRows.map(product => product.id === updatedProduct.id ? updatedProduct : product)
    })
  };

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

  render() {
    return (
      <div className="main">
        <div className="container">
            <ProductForm formControls={this.state.formControls} isFormValid={this.state.isFormValid} onSumbitProduct={this.addProduct} onChangeHandler={this.onChangeHandler}/>
            <ProductTable products={this.state.productRows} updateProduct={this.updateProduct} removeProduct={this.removeProduct}/>
        </div>
      </div>
    );
  }
}

export default App;

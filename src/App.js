import React, { Component } from 'react';
import './App.css';
import ProductForm from './components/ProductForm/ProductForm'
import ProductTable from './components/ProductTable/ProductTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productRows: [
        { id: "1", name: 'Ноутбук', category: 'Компьютеры', price: '300', balance: 25},
        { id: "2", name: 'Процессор', category: 'Комплектующие', price: '300', balance: 30}
      ]
    }
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
  };

  updateProduct = updatedProduct => {
    this.setState({
      productRows: this.state.productRows.map(product => product.id === updatedProduct.id ? updatedProduct : product)
    })
  };

  render() {
    return (
      <div className="main">
        <div className="container">
            <ProductForm onSumbitProduct={this.addProduct}/>
            <ProductTable products={this.state.productRows} updateProduct={this.updateProduct} removeProduct={this.removeProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
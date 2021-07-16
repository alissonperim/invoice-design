import React, { Fragment } from 'react'
import './styles.css'

const mapProducts = (mock, index) => {
  return (
    <Fragment key={`product-${index}`}>
      <tr className="tableRow" key={index}>
        <td>
          {mock.name}
        </td>
        <td>
          {mock.amount}
        </td>
        <td>
          $ {mock.price.toFixed(2)}
        </td>
      </tr>
    </Fragment>
  )
}

export const Table = () => {
  let totalValue = mockProducts.reduce((acumulador, currentValue) =>
    acumulador + currentValue.totalPrice, 0).toFixed(2)
  return (
    <>
      <table className="table">
        <thead className="tableHead">
          <th>PRODUCT</th>
          <th>UNIT</th>
          <th>PRICE</th>
        </thead>
        <tbody className="tableBody">
          {mockProducts.map(mapProducts)}
        </tbody>
      </table>
      <div className="total">
        <strong>
          TOTAL
        </strong>
        ${totalValue}
      </div>
    </>
  )
}

const mockProducts = [
  {
    name: "Three Unicorns",
    amount: 1,
    price: 15.00,
    totalPrice: 15.00
  },
  {
    name: "Awesome Jacks",
    amount: 2,
    price: 15.00,
    totalPrice: 30.00
  },
  {
    name: "Two Kings",
    amount: 1,
    price: 15.00,
    totalPrice: 15.00
  },
]
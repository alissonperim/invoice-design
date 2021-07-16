import React from 'react'
import { Button } from '../Button'
import { Table } from '../Table'
import './styles.css'

const Container = () => {
  return (
    <div className="container">
      <h1 className="container--h1">INVOICE</h1>
      <Table />
      <Button />
    </div>
  )
}

export { Container }
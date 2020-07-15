import React from 'react'

const Result = (props) => {
  const table1 = () => {
    let table = []
    for(let i = 0; i < 4; i += 1) {
      table.push(<td key={i} colSpan="2">custom_label_{i}</td>)
    }
    return table
  }

  const table2 = () => {
    let table = []
    for(let i = 0; i < 4; i += 1) {
      for(let j = 0; j < 2; j += 1) {
        table.push(<td key={i * 10 + j}>{props.apiResponse[`label${i}Items`][j]}{j === 1 && '*'}</td>)
      }
    }
    return table
  }

  if(props.apiResponse === undefined) {
    return (
      <p>Loading... Please wait</p>
    )
  } else if(props.apiResponse.error) {
    return (
      <p>It seems like you typed wrong url adress<br/><a href="/">Try again</a></p>
    )
  } else if(typeof props.apiResponse !== 'undefined') {
    return (
        <>
        <table>
          <tbody>
          <tr>
            <th colSpan="8">Liczebność produktów według pól</th>
          </tr>
          <tr>
            {table1()}
          </tr>
          <tr>
            {table2()}
          </tr>
          </tbody>
        </table>
        <p>Liczba wszystkich produktów: <strong>{props.apiResponse.itemsNumber}</strong></p>
        <p>Liczba dostępnych produktów: <strong>{props.apiResponse.availableItemsNumber}</strong></p>
        <span>* - dostępne produkty</span>
      </>
    )
  } else {

  }

}

export default Result
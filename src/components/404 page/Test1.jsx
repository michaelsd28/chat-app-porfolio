import React from 'react'
import { dataContext } from '../../GlobalStore/GeneralContext'

function Test1() {

    const{setTest}=React.useContext(dataContext)


  return (
    <button onClick={()=>{

        setTest(Math.random().toString(36).substring(7))

    }}>test</button>
  )
}

export default Test1
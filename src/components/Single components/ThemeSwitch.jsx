import { Switch } from '@mui/material'
import React, { Component } from 'react'

export default class ThemeSwitch extends Component {
  render() {
    return (
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          margin: 20,
          display: "flex",
        }}
      >
        <Switch defaultChecked color="info" />
        <p style={{ color: "white", margin: 10 }}>Dark mode</p>
      </div>
    )
  }
}

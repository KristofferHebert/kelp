import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'

const HomeProvider = {
  home (req, res) {
    res.render('home', {
      app: 'heyyyy',
      __initialstate: {}
    })
  }
}

export default HomeProvider

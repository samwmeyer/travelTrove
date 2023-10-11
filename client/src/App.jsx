import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/home'
import ExplorePage from './components/explore'
import MyTripsPage from './components/myTrips'
import AddTrip from './components/form'
import UpdateTrip from './components/update'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/explore/'} element={<ExplorePage />} />
          <Route path={'/mytrips/'} element={<MyTripsPage />} />
          <Route path={'/addtrip/'} element={<AddTrip />} />
          <Route path={'/updatetrip/:id'} element={<UpdateTrip />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

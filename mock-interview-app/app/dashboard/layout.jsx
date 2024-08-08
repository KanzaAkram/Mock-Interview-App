import React from 'react'
import Header from './_components/Header.jsx'

function DashboardLayout({children}) {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default DashboardLayout
import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <section>
            <Header />
            <div>
                <Outlet />
            </div>
        </section>
    )
}

export default Layout

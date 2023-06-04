import React from 'react'

const Layout = ({ children, className }) => {
    return (
        <div
            className={`${className} bg-light lg:p-32 w-full inline-block h-full z-0 `}
        >
            {children}
        </div>
    )
}

export default Layout
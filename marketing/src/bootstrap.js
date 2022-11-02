import React from 'react'
import ReactDOM  from 'react-dom'
import App from './App'
// mount fun

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

//if dev and isolation mount imediately

if (process.env.NODE_ENV=== 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if(devRoot) {
        mount(devRoot)
    }
}

//run in container export mount

export {mount}
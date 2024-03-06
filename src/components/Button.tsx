import * as React from 'react';
import { ReactNode } from 'react'

type PropsTypes = {
    children: ReactNode;
}


function Button({ children }:PropsTypes) {
    return <button style={{
                padding: '10px, 20px',
                fontSize: '1.2rem',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: 'red',
                color: 'white',
                border: 'none'
            }}
        >
        {children}
        </button> 
}

export { Button }
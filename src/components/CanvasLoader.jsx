import { Html, Progress, useProgress } from '@react-three/drei'
import React from 'react'

export default function CanvasLoader(props) {
    
const { progress} = useProgress()
    return (
        <Html
        as='div'
        center
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}
        >
            <span className='canvas-loader'>
                <p style={{fontSize: 14, color: '#F1F1F1'}}>
                    {progress !== 0 ? `progress.toFixed(2)%` : 
                    'Loading...'}
                </p>
            </span>
        </Html>
            
        
    )
}

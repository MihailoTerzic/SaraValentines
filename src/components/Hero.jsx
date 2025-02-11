import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import Model from './model';
import CanvasLoader from './CanvasLoader';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Rose from './rose';
import Tulips from './tulips';
import Bouquet from './bouquet';
import Minibouquet from './minibouquet';

export default function Hero(props) {
  // State to track which model to show
  const [modelIndex, setModelIndex] = useState(0); // 0: Rose, 1: Tulips, 2: Bouquet
  
  // Function to change the model on button click
  const handleClick = () => {
    setModelIndex((prevIndex) => (prevIndex + 1) % 3); // Cycles through 0, 1, 2
  };

  return (
    <section className='flex flex-col'>
      <div className='w-full z-20 relative mx-auto flex flex-col c-space gap-3'>
        <div className='self-center mt-18 z-40 text-center'>
          <p className='sm:text-3xl text-xl font-medium text-center pacifico-regular'>
            Srećan dan zaljubljenih! <span className='waving-hand'>💘</span>
          </p>
          <button
            onClick={handleClick}
            className='pacifico-regular mt-3 font-bold text-4xl border-2 p-2 border-amber-950 hover:text-white hover:bg-amber-950 rounded-xl'
          >
            Klikni da promeniš cvet
          </button>
        </div>

        <Canvas className='w-100vw h-screen'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <directionalLight position={[10, 5, 20]} castShadow intensity={5} />
            
            {/* Conditionally render the model based on modelIndex */}
            {modelIndex === 0 && (
              <Rose scale={5} position={[0, -2, 0]} rotation={[0.7, 0, 0]} castShadow />
            )}
            {modelIndex === 1 && (
              <Tulips scale={10} position={[0, 0, 0]} rotation={[0.7, 0, 0]} castShadow />
            )}
            {modelIndex === 2 && (
              <Bouquet scale={5} position={[0, -1, 0]} rotation={[0.5, 0, 0]} castShadow />
            )}
           

          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

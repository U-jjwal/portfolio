import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Canvasbg from './components/Canvasbg';
import Front from './components/Front';
import Pg2 from './components/Pg2';
import Footer from './components/Footer';
import Loading from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [canvasLoaded, setCanvasLoaded] = useState(false);

  // This ensures that loading is only hidden when Canvas is fully loaded
  useEffect(() => {
    if (canvasLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 500); // Small delay for smoother transition
    }
  }, [canvasLoaded]);

  return (
    <>
      {loading && <Loading />}
      <Canvasbg setIsLoaded={() => setCanvasLoaded(true)} />
      {!loading && (
        <div className="relative z-10 h-screen w-screen bg-transparent overflow-x-hidden">
          <Header />
          <Front />
        </div>
        )}
          <Pg2 /> 
       
          <Footer />
    </>
  );
};

export default App;


import React from 'react';
import { SpeedTest } from './components/SpeedTest';
import { Logo } from './components/Logo';

export function App() {
  return (
    <div className="min-h-screen bg-brand-blue">
      <nav className="bg-brand-orange shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Logo className="text-xl" />
        </div>
      </nav>
      <main className="py-8">
        <SpeedTest />
      </main>
      <footer className="bg-brand-orange text-white mt-auto">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center">
          <p>© {new Date().getFullYear()} Cherry Technologies Inc. All rights reserved.</p>
          <p className="text-sm mt-1 text-white/80">Empowering the world with next-generation network solutions</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
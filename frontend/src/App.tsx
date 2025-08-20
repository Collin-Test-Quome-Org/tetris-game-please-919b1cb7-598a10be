import { Routes, Route } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Providers } from './Providers';
import { AboutPage } from '@/pages/AboutPage';
import { Instructions } from '@/pages/Instructions';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { HomePage } from '@/pages/index';

export function App() {
  return (
    <Providers>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-slate-100">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/instructions" element={<Instructions />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Providers>
  );
}

// app/components/layout.js atau layout.tsx
import Navbar from '../navbar/Navbar';
import '../globals.css';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
          {children}
        </div>
      </body>
    </html>
  );
}

import '@/ui/global.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
// Add the imported icons to the library
library.add(fas, fab, far);


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }
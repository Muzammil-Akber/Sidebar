import React, { useEffect } from 'react';
import Routing from './AppRouting/Routing';
import { Themeprovider, usetheme } from './ContextApi/Provider';

const AppContent = () => {
  const { Contextdata } = usetheme();

  useEffect(() => {
    if (Contextdata[0].themeMode === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [Contextdata]);

  console.log('Context Data:', Contextdata);

  return <Routing />;
};

const App = () => {
  return (
    <Themeprovider>
      <AppContent />
    </Themeprovider>
  );
};

export default App;

import React, { useState } from 'react';
import NewsListContainer from './containers/NewsListContainer';
import NewsDetailContainer from './containers/NewsDetailContainer';

export default function App() {
  const [selectedNewsKey, setSelectedNewsKey] = useState(null);

  const handleSelectNews = (key) => {
    setSelectedNewsKey(key);
  };

  const handleBackToList = () => {
    setSelectedNewsKey(null);
  };

  return (
    <div>
      {selectedNewsKey ? (
        <NewsDetailContainer newsKey={selectedNewsKey} onBack={handleBackToList} />
      ) : (
        <NewsListContainer onSelect={handleSelectNews} />
      )}
    </div>
  );
}

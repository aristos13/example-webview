import React, { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = `hello world`;
  });

  return (
    <div className="mx-auto text-center">
    <h2 className="text-4xl text-gray-500 font-extrabold">Example Webview</h2>
  </div>
  )
};


export default Index;

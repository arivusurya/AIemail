import EditorHeader from '@/components/dashboard/EditorHeader';
import Canvas from '@/components/Editor/Canvas';
import ElementSideBar from '@/components/Editor/ElementSideBar';
import Properties from '@/components/Editor/Properties';
import React from 'react';

function Page() {
  return (
    <div className='flex flex-col h-screen'>
      <EditorHeader />
      <div className='grid grid-cols-5 flex-1 h-full'>
        <ElementSideBar />
        <div className='col-span-3 bg-gray-100 h-full'>
          <Canvas />
        </div>
        <Properties />
      </div>
    </div>
  );
}

export default Page;
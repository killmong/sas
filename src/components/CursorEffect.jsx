import React, { useEffect } from 'react';

const CursorEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursor = document.getElementById('cursor');
      const blurCursor = document.getElementById('cursor-blur');

      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';

      blurCursor.style.left = e.pageX - 30 + 'px';
      blurCursor.style.top = e.pageY - 30 + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="cursor-blur"></div>
    </>
  );
};

export default CursorEffect;

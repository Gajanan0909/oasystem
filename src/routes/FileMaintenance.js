import React, { useRef } from 'react'

function FileMaintenance() {
  const myInputRef = useRef(null);

  const focusInput = () => {
    myInputRef.current.focus();
  }
  return (
    <>
      <input type='text' ref={myInputRef}/>
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}

export default FileMaintenance
export function MouseClicker(){
  function handleButtonClick(event){
console.log(event.currentTarget.src)
  }
  return(
      <div>
      <button >
      <img src="immagine.jpg" width={24} height={24} onClick={handleButtonClick}/>
          Click me
           </button>
           </div>
  )
}
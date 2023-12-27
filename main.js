const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter() {
  return (
   <div className='counter' >
      <button className='font'> - </button>
      <h3 className='font'>0</h3>
      <button className='font'> + </button>
      <button className='font'> C </button>
      <button className='font'> X </button>
   </div>
  )
}

function SumInfo()  {
  return(
    <div className='suminfo'>
        <h1 className='font'>Sum = 0</h1>
        <button className='font'>Add Counter</button>
    </div>
)
}

function App() {
  return (
  <>
    <div className='edit'> 
    <SumInfo />
    <Counter />
    </div>
  </>
  
  )
}
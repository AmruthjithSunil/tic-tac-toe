function App() {

  function Square({value}){
    return(<button>{value}</button>)
  }

  function Row({offset}){
    const rowItems = []
    for(let i=0; i<3; i++){
      rowItems.push(<Square id={offset + i} value={offset + i} />)
    }
    return(<div>
      {rowItems}
    </div>)
  }

  return (
    <>
      <Row offset={1}></Row>
      <Row offset={4}></Row>
      <Row offset={7}></Row>
    </>
  )
}

export default App

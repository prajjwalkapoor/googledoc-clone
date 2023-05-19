import './App.css'
import DocMain from './DocMain'
import QuillContextProvider from './context/quillContext'

function App() {


  return (
    <>
      <QuillContextProvider>
        <DocMain />
      </QuillContextProvider>
    </>
  )
}

export default App

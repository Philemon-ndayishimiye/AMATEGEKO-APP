import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./component/ScrollTop"
import AppRoutes from "./routes/AppRoutes"


function App() {

  return (
    <div> 
      <BrowserRouter>
      <ScrollToTop/>
        <AppRoutes/>
      </BrowserRouter>
    </div>
     )
}

export default App

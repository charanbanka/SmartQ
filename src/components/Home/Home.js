import React from 'react'
import Menu from './SideMenu/Menu'
import {items} from './listItems'
import Content from './Content/Content'
import Cart from './Cart/Cart'

const Home = () => {
  return (
    <div className="container p-2">
      <div className="row">
        <div className="col m-1 p-1">
                {
                    items.map((item)=>(
                        <div key={item.name} className="d-flex flex-column align-items-center m-2 font-weight-lighter">
                            <Menu item={item}/>
                        </div>
                    ))
                }
        </div>
        <div style={{border:"1px dashed blue",height:"500px"}}></div>
        <div className="col-6 m-1" >
          <Content/>
        </div>
        <div className="col-4 m-1">
          <Cart/>
        </div>
      </div>
    </div>
  )
}

export default Home
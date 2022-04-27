import React from 'react'

const Accordion = ({ items }) => {
  const showInfo = false;
  const ilist  = items.map((item) => {
    return (
      <div className="col-md-5">
            <div key="item.title">
              <div className="alert alert-dark ">
                <a href="#">{item.title}</a>
              </div>
              <div>
                <p style={{ color:'red'}}>{item.content}</p>
              </div>
            </div>
      </div>
    )
})
    return (
        <div>
            {ilist} 
        </div>
    )
}
export default Accordion

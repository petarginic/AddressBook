import React from 'react'

const Modal = ({user}) => {
  return (
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">More information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p >Username: <span className="font-weight-bold">{user.username}</span></p>
                    <p >Full name: <span className="font-weight-bold">{user.name}</span></p>
                    <p >Address: <span className="font-weight-bold">{user.address.street}</span> </p>
                    <p >City: <span className="font-weight-bold">{user.address.city}</span></p>
                    <p >Phone: <span className="font-weight-bold">{user.phone}</span></p>
                    <p >Website:  <span className="font-weight-bold"> <a href={user.website} target="_blank" rel="noreferrer" /></span></p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Modal
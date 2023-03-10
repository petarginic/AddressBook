import React from 'react'

const Input = ({searchWord,handleSearchWordChange}) => {

    return (
        <div className="input-group mb-3 mt-5 w-50">
            <input type="text" value={searchWord} className="form-control" placeholder="Search" onChange={handleSearchWordChange } />
        </div>
    )
}

export default Input
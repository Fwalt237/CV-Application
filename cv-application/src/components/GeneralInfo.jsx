import { useState } from 'react'

export default function GeneralInfo({general, setGeneral, isEditing, onToggleEdit}){

    const [tempData, setTempData] = useState(general)

    const handleChange = (e) => {
        setTempData({...tempData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneral(tempData);
        onToggleEdit();
    }

    if(!isEditing){
        return(
            <div className="section preview">
                <h3>General Information</h3>
                <p><strong>Name:</strong> {general.name || '-'}</p>
                <p><strong>Email:</strong> {general.email || '-'}</p>
                <p><strong>Phone:</strong> {general.phone || '-'}</p>
                <button onClick={onToggleEdit}>Edit</button>
            </div>
        )
    }

    return(
        <div className="section">
            <h3>General Information</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    placeHolder="Full Name"
                    value={tempData.name}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="email"
                    name="email"
                    placeHolder="Email"
                    value={tempData.email}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="tel"
                    name="phone"
                    placeHolder="Phone number"
                    value={tempData.phone}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
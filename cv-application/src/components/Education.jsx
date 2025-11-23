import {useState} from 'react'

export default function Education({educationList, setEducationList, isEditing, onToggleEdit}){

    const [current, setCurrent] = useState({
        school:'',
        title:'',
        date:''
    });

    const handleChange = (e) => {
        setCurrent({...current, [e.target.name]:e.target.value});
    };

    const addEducation = (e) => {
        e.preventDefault();
        setEducationList([...educationList,current]);
        setCurrent({school:'',title:'',date:''});
    }

    const deleteEducation = (index) => {
       setEducationList(educationList.filter((_,i) => i!==index)); 
    }

    if(!isEditing){
        return(
            <div className="section preview">
                <h3>Education</h3>
                {educationList.length===0 ? (
                    <p>No Education yet.</p>
                ):(
                    educationList.map((edu,i) => (
                        <div key={i} style={{marginBottom:'1rem', padding:'1rem',background:'#f8f9fa'}}>
                            <strong>{edu.school}</strong> - {edu.title}<br/>
                            {edu.date}
                            <button onClick={() => deleteEducation(i)} style={{marginLeft:'1rem', background:'#dc3545'}}>
                                Delete
                            </button>
                        </div>
                    ))
                )
            }
            <button onClick={onToggleEdit}>{educationList.length===0? 'Add Education':'Add/Edit'}</button>
            </div>
        )
    }

    return (
        <div className="section">
            <h3>Education</h3>
            <form onSubmit={addEducation}>
                <input name="school" placeHolder="School name" value={current.school} onChange={handleChange} required />
                <input name="title" placeHolder="Title of study" value={current.title} onChange={handleChange} required />
                <input name="date" placeHolder="e.g. 2024 - 2025" value={current.date} onChange={handleChange} required />
                <button type="submit">Add Education</button>
            </form>
            {educationList.length>0 && (
                <button onClick = {onToggleEdit} style={{marginTop:'1rem', background:'#6c757d'}}>
                    Done
                </button>
            )}

        </div>
    )

}
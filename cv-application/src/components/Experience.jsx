import { useState } from 'react'

export default function Experience({ experienceList, setExperienceList, isEditing, onToggleEdit }) {
  const [current, setCurrent] = useState({
    company: '',
    position: '',
    responsibilities: '',
    from: '',
    to: ''
  })

  const handleChange = (e) => {
    setCurrent({ ...current, [e.target.name]: e.target.value })
  }

  const addExperience = (e) => {
    e.preventDefault()
    setExperienceList([...experienceList, { ...current }])
    setCurrent({ company: '', position: '', responsibilities: '', from: '', to: '' })
  }

  const deleteExperience = (index) => {
    setExperienceList(experienceList.filter((_, i) => i !== index))
  }

  if (!isEditing) {
    return (
      <div className="section preview">
        <h3>Experience</h3>
        {experienceList.length === 0 ? <p>No experience added.</p> : (
          experienceList.map((exp, i) => (
            <div key={i} style={{marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '6px'}}>
              <strong>{exp.position}</strong> at {exp.company}<br/>
              {exp.from} – {exp.to || 'Present'}<br/>
              {exp.responsibilities}
              <button onClick={() => deleteExperience(i)} style={{marginTop: '0.5rem', background: '#dc3545'}}>
                Delete
              </button>
            </div>
          ))
        )}
        <button onClick={onToggleEdit}>Add / Edit</button>
      </div>
    )
  }

  return (
    <div className="section">
      <h3>Work Experience</h3>
      <form onSubmit={addExperience}>
        <input name="company" placeholder="Company" value={current.company} onChange={handleChange} required />
        <input name="position" placeholder="Position" value={current.position} onChange={handleChange} required />
        <textarea name="responsibilities" placeholder="Main responsibilities (one per line)" value={current.responsibilities} onChange={handleChange} rows="4" />
        <div style={{display: 'flex', gap: '1rem'}}>
          <input name="from" placeholder="From (e.g. Jan 2022)" value={current.from} onChange={handleChange} required />
          <input name="to" placeholder="To (leave empty if current)" value={current.to} onChange={handleChange} />
        </div>
        <button type="submit">Add Experience</button>
      </form>
      {experienceList.length > 0 && (
        <button onClick={onToggleEdit} style={{marginTop: '1rem', background: '#6c757d'}}>
          Done
        </button>
      )}
    </div>
  )
}
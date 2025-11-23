import { useState } from 'react'
import Header from './components/Header.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import './styles/App.css'

function App() {
  const [general, setGeneral] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [editingGeneral, setEditingGeneral] = useState(true)

  const [educationList, setEducationList] = useState([]);
  const [editingEducation, setEditingEducation] = useState(true);

  const [experienceList, setExperienceList] = useState([]);
 const [editingExperience, setEditingExperience] = useState(true);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="left-side">
          <GeneralInfo 
            general = {general}
            setGeneral = {setGeneral}
            isEditing = {editingGeneral}
            onToggleEdit = {() => setEditingGeneral(!editingGeneral)}
          />
          <Education 
            educationList={educationList}
            setEducationList={setEducationList}
            isEditing={editingEducation}
            onToggleEdit = {() => setEditingEducation(!editingEducation)}
          />
          <Experience
            experienceList={experienceList}
            setExperienceList={setExperienceList}
            isEditing={editingExperience}
            onToggleEdit={() => setEditingExperience(!editingExperience)}
          />
        </div>
        <div className="right-side">
          <h2>My CV</h2>
          <div style={{maginTop:'2rem',marginBottom:'1rem'}}>
            <h3>{general.name || 'Your name'}</h3>
            <p>{general.email || '-'} | {general.phone || '-'}</p>
          </div>
          <h3>Education</h3>
          {educationList.map((edu,i) => (
            <div key={i}>
              <strong>{edu.school}</strong><br/>
              {edu.title} | {edu.date}
            </div>
          )
          )}
          <h3>Experience</h3>
          {experienceList.map((exp, i) => (
            <div key={i} style={{marginBottom: '1.5rem'}}>
              <strong>{exp.position}</strong> at {exp.company}<br/>
              {exp.from} – {exp.to || 'Present'}<br/>
              <div style={{whiteSpace: 'pre-wrap'}}>{exp.responsibilities}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

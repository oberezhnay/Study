import React, { useState, useEffect } from 'react'
import SkillsList from '../skillsList/SkillsList'
import './PersonalInfo.css'

function PersonalInfo() {
    const [name, setName] = useState('John Smith');
    const [place, setPlace] = useState('Portland, Oregon, USA');
    const [skills, setSkills] = useState([]);

    // useEffect(()=> {

    // })

    function onEdit(e){
        console.log(e)
        // e.target.dangerouslySetinnerHTML=`<input type='text' value='55555'`;
    }

    return (
            <div className='personal-info'>
                <div className='img-container'>
                    <img src={require('../../assets/img/photo.png')} alt='user' className='personal-img'></img>
                </div>
                <div className='info-container'>
                    <span><input onChange={onEdit} value={name}></input></span>
                    <h5>{place}</h5>
                    <span>English</span>
                    <SkillsList />
                    <input></input>
                </div>
            </div>
    )
}

export default PersonalInfo

/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/16 19:54:16 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/23 18:59:36 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import defaultImage from '../resources/question.svg'
import { useEffect, useRef, useState } from 'react'
import data from '../resources/ProjectData'
import ProjectTtem from './Project-item'
import SVG from 'react-inlinesvg'
import '../css/Projects.css'
import '../css/Question.css'
import gsap from 'gsap'

const liProfile = 'https://www.linkedin.com/in/joonas-mykkänen-bb5739230/'

const Item = (props) => {
  return (
    <>
      <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className='left'>
        {
          props.title === 'Philo'
            ? <a href={liProfile}><h2 className="text">{props.title}<span>{props.sub}</span></h2></a>
            : <h2 className="text">{props.title}<span>{props.sub}</span></h2>
        }
      </div>
    </>
  )
}

const Projects = ({ mouse }) => {
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [hoveringItem, setHoveringItem] = useState('');
  const questionRef = useRef(null)
  const detailsRef = useRef(null)
  const listRef = useRef(null)

  const elements = [
    { name: 'q1', selector: '#q1' },
    { name: 'q2', selector: '#q2' },
    { name: 'q3', selector: '#q3' },
    { name: 'q4', selector: '#q4' },
    { name: 'q5', selector: '#q5' },
    { name: 'q6', selector: '#q6' },
    { name: 'q7', selector: '#q7' },
    { name: 'q8', selector: '#q8' },
    { name: 'q9', selector: '#q9' },
    { name: 'q10', selector: '#q10' },
    { name: 'q11', selector: '#q11' },
    { name: 'q12', selector: '#q12' },
    { name: 'q13', selector: '#q13' },
    { name: 'q14', selector: '#q14' },
    { name: 'q15', selector: '#q15' },
    { name: 'q16', selector: '#q16' }
  ]

  const handleEnter = (title) => {
    setHoveringItem(title)
  }
  const handleLeave = () => {
    setHoveringItem('')
  }

  // Initial original animation of scroll trigger
  const animateQuestionMarks = () => {
    // Creating a list of objects that hold inside individual elements
    const timeline = gsap.timeline()
    elements.forEach((element, index) => {
      const child = questionRef.current.querySelector(element.selector)
      if (child) {
        timeline.to(child, {
            x: 0,
            opacity: 1,
            ease: 'elastic.out',
            duration: 1
        }, index * 0.05)
      }
    })
  }

  // Parallax effect for list of projects
  useEffect(() => {
    if (!listRef || listRef === undefined) {
      return
    }
    if (mouse.scrollY > 700 && !animationPlayed) {
      animateQuestionMarks()
      setTimeout(() => setAnimationPlayed(true), 800) // wait for the initial animation to finish
    }
    
    const obj = listRef.current
    const maxMovementY = window.innerHeight / 50
    const maxMovementX = window.innerWidth / 50
    const maxDistanceY = window.innerHeight / 2
    const maxDistanceX = window.innerWidth / 2
    let normalY = (maxDistanceY - mouse.posY) / maxDistanceY
    let normalX = (maxDistanceX - mouse.posX) / maxDistanceX
    normalY = Math.min(Math.max(normalY, -1), 1)
    normalX = Math.min(Math.max(normalX, 0), 1)
    const deltaY = (normalY * maxMovementY)
    const deltaX = (normalX * maxMovementX)

    gsap.to(obj, { x: deltaX, y: deltaY, ease: 'power1.out' });
    gsap.to(obj, { x: deltaX, y: deltaY, ease: 'power1.out' });
  }, [mouse.posX, mouse.posY, mouse.scrollY])

  // Function to initially hide elements
  const hideElement = () => {
    if (!questionRef.current) {
      return
    }
    
    gsap.set(detailsRef.current, { opacity: 0 })
    elements.forEach((element) => {
      const child = questionRef.current.querySelector(element.selector)
      if (child) {
        gsap.set(child, { opacity: 0, x: 200})
      }
    })
  }

  // sets opacity to 0 or 1 based on state
  const toggleDetails = () => {
    let detailsState
    let questionState

    detailsState = hoveringItem ? 1 : 0
    questionState = hoveringItem ? 0 : 1
    gsap.to(detailsRef.current, { opacity: detailsState, duration: 0.5 })
    elements.forEach((element) => {
      const child = questionRef.current.querySelector(element.selector)
      if (child) {
        gsap.to(child, { opacity: questionState, duration: 0.5 })
      }
    })
  }

  // Tracks state of hovering and toggles div's if needed
  useEffect(() => {
    if (!animationPlayed) {
      return
    }

    toggleDetails()
  }, [hoveringItem])
  
  return (
    <div className='Projects'>
      <h1>Projects<span>.</span></h1>
      <div ref={listRef} className="container">
        {Object.entries(data).map(([title, obj]) => (
          <Item
            key={title}
            title={title}
            sub={obj.sub}
            info={obj.text}
            stack={obj.stack}
            onMouseEnter={() => handleEnter(title)}
            onMouseLeave={() => handleLeave()}
          />
        ))}
      </div>
      <div className='right'>
        {/* Will trigger onLoad function to create GSAP timeline for incoming animation */}
        <ProjectTtem objRef={detailsRef} current={hoveringItem} data={data}/>
        <SVG src={defaultImage} innerRef={questionRef} onLoad={hideElement}/>
      </div>
    </div>
  )
}

export default Projects

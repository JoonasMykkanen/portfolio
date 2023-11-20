/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/16 19:54:16 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/20 06:53:06 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import defaultImage from '../resources/question.svg'
import { useEffect, useRef, useState } from 'react'
import data from '../resources/ProjectData'
import SVG from 'react-inlinesvg'
import '../css/Projects.css'
import gsap from 'gsap'

const Item = (props) => {
  const [hovered, setHovered] = useState(false)

  
  
  console.log()
  return (
    <>
      <div className='left'>
        <h2 className="text">{props.title}<span>{props.sub}</span></h2>
      </div>
    </>
  )
}

const Projects = ({ mouse }) => {
  const [question, setQuestionData] = useState([])
  const questionRef = useRef(null)
  const listRef = useRef(null)

  const createQuestion = () => {
    // List of all elements to be animated, found by ID or class
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
      { name: 'q13', selector: '#q13' }
    ]

    // Creating a list of objects that hold inside individual elements
    const questionData = elements.reduce((acc, element) => {
      const child = questionRef.current.querySelector(element.selector)
      if (child) {
        const rect = child.getBoundingClientRect()
        acc[element.name] = { obj: child, x: rect.x, y: rect.y }
        return acc
      } else return null
    }, {})
    
    console.log(questionData) // TODO -> remove when done
    setQuestionData(questionData)
  }

  useEffect(() => {
    if (!listRef || listRef === undefined) {
      return
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
  }, [mouse.posX, mouse.posY])
  
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
          />
        ))}
      </div>
      <div className='right'>
        <SVG src={defaultImage} innerRef={questionRef} onLoad={createQuestion} />
      </div>
    </div>
  )
}

export default Projects

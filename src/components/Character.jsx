/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Character.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 13:13:14 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/09 06:32:12 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import characterData from '../resources/character.svg'
import { useEffect, useState, useRef } from 'react'
import MouseTracker from '../MouseTracker'
import SVG from 'react-inlinesvg'
import '../css/Character.css'
import gsap from 'gsap'
  
const Character = () => {
  const [character, setCharacterData] = useState([])
  const mouse = MouseTracker()
  const svgRef = useRef(null)

  
  const createCharacter = () => {
    // List of all elements to be animated, found by ID or class
    const elements = [
      { name: 'rightEyeBrow', selector: '#right_eyebrow' },
      { name: 'leftEyeBrow', selector: '#left_eyebrow' },
      { name: 'rightEye', selector: '#right_eye' },
      { name: 'leftEye', selector: '#left_eye' },
      { name: 'mouth', selector: '#mouth' },
      { name: 'head', selector: '#head' },
      { name: 'face', selector: '#top' }
    ]

    const characterData = elements.reduce((acc, element) => {
      const child = svgRef.current.querySelector(element.selector)
      if (child) {
        const rect = child.getBoundingClientRect()
        acc[element.name] = { obj: child, x: rect.x, y: rect.y }
        return acc
      } else return null
    }, {})
    
    console.log(characterData) // TODO -> remove when done
    setCharacterData(characterData)
  }

  const eyebrows = () => {
    const maxMovement = window.innerHeight / 100
    const maxDistance = window.innerWidth / 2
    let normalizedPosition = (maxDistance - mouse.posX) / maxDistance
    normalizedPosition = Math.min(Math.max(normalizedPosition, -1), 1)
    const deltaY = normalizedPosition * maxMovement
    
    if (mouse.posX > maxDistance) {
      gsap.to(character.leftEyeBrow.obj, { y: -(deltaY) })
      gsap.to(character.rightEyeBrow.obj, { y: (deltaY) })
    } else {
      gsap.to(character.rightEyeBrow.obj, { y: (deltaY * 1.2), ease: 'power1' })
      gsap.to(character.leftEyeBrow.obj, { y: -(deltaY * 1.5), ease: 'power1' })
    }
  }

  const eyes = () => {
    const maxMovementY = window.innerHeight / 50
    const maxMovementX = window.innerWidth / 50
    const maxDistanceY = window.innerHeight / 2
    const maxDistanceX = window.innerWidth / 2
    let normalY = (maxDistanceY - mouse.posY) / maxDistanceY
    let normalX = (maxDistanceX - mouse.posX) / maxDistanceX
    normalY = Math.min(Math.max(normalY, -1), 1)
    normalX = Math.min(Math.max(normalX, -1), 1)
    const deltaY = (normalY * maxMovementY) * -1
    const deltaX = (normalX * maxMovementX) * -1

    gsap.to(character.rightEye.obj, { x: deltaX, y: deltaY, ease: 'power2' });
    gsap.to(character.leftEye.obj, { x: deltaX, y: deltaY, ease: 'power2' });
  }

  const head = () => {
    const maxAngle = 1.5
    const offset = window.innerWidth / 300
    const maxDistanceY = window.innerHeight / 2
    const maxDistanceX = window.innerWidth / 2
    let normalY = ((maxDistanceY - mouse.posY) / maxDistanceY) * maxAngle
    let normalX = ((maxDistanceX - mouse.posX) / maxDistanceX) * maxAngle
    normalY = Math.min(Math.max(normalY, -maxAngle), maxAngle)
    normalX = Math.min(Math.max(normalX, -maxAngle), maxAngle)
    let angle = normalX * normalY
    
    let nodY = ((maxDistanceY - mouse.posY) / maxDistanceY) * -offset
    let nodX = ((maxDistanceX - mouse.posX) / maxDistanceX) * (offset * 0.75)

    gsap.to(character.head.obj, {
      transformOrigin: '50% 50%',
      rotation: angle,
      ease: 'expo',
      x: nodX,
      y: nodY,
    });
    gsap.to(character.face.obj, { y: nodY, ease: 'expo' })
  }

  const expression = () => { 
    return false
  }

  useEffect(() => { // useEffect will envoke all animations
    if (svgRef.current) {
      if (!expression()) {
        eyebrows()
        eyes()
        head()
      }
    }
    
    return () => { // returing from useEffect clears gsap 
      gsap.killTweensOf(svgRef) 
    }
  }, [mouse.posX, mouse.posY]) // updating based on mouse
  
  // Element itself is actually super simple, one line of svg injection
  return (
    <div className="Character">
      <SVG src={characterData} innerRef={svgRef} onLoad={createCharacter}/>
    </div>
  )
}

export default Character
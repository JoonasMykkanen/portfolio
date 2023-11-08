/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Character.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 13:13:14 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/08 08:38:46 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import characterData from '../resources/test2.svg'
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
    // Create a list of elements that needs to be animated
    const elements = [
      { name: 'rightEyeBrow', selector: '#right_eyebrow' },
      { name: 'leftEyeBrow', selector: '#left_eyebrow' },
      { name: 'rightEye', selector: '#right_eye' },
      { name: 'leftEye', selector: '#left_eye' },
      { name: 'head', selector: '#head' }
    ]

    const characterData = elements.reduce((acc, element) => {
      const child = svgRef.current.querySelector(element.selector)
      if (child) {
        const rect = child.getBoundingClientRect()
        acc[element.name] = { obj: child, x: rect.x, y: rect.y }
        return acc
      } else return null
    }, {})
    
    console.log(characterData)
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
      gsap.to(character.rightEyeBrow.obj, { y: (deltaY * 1.2) })
      gsap.to(character.leftEyeBrow.obj, { y: -(deltaY * 1.5) })
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

    gsap.to(character.rightEye.obj, { x: deltaX, y: deltaY});
    gsap.to(character.leftEye.obj, { x: deltaX, y: deltaY});
  }

  const face = () => {
    const maxDistanceY = window.innerHeight / 2
    const maxDistanceX = window.innerWidth / 2

    if (mouse.posX > maxDistanceX) {
      if (mouse.posY < maxDistanceY) { // mouse at top right
        gsap.to(character.head.obj, { rotation: -2, transformOrigin: '50% 50%' })
      } else { // mouse at bottom right
        gsap.to(character.head.obj, { rotation: 2, transformOrigin: '50% 50%' })
      }
    } else { 
      if (mouse.posY < maxDistanceY) { // mouse at top right
        gsap.to(character.head.obj, { rotation: 2, transformOrigin: '50% 50%' })
      } else { // mouse at bottom right
        gsap.to(character.head.obj, { rotation: -2, transformOrigin: '50% 50%' })
      }
    }
  }

  useEffect(() => {
    if (svgRef.current) {
      eyebrows()
      eyes()
      face()
    }
    
    return () => {
      gsap.killTweensOf(svgRef);
    }
  }, [mouse.posX, mouse.posY])
  
  return (
    <div className="Character">
      <SVG src={characterData} innerRef={svgRef} onLoad={createCharacter}/>
    </div>
  )
}

export default Character
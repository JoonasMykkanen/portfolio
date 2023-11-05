/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Character.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 13:13:14 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/05 14:19:44 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import characterData from '../resources/char_simple.svg'
import { useEffect, useState, useRef } from 'react'
import SVG from 'react-inlinesvg'
import gsap from 'gsap'


import MouseTracker from '../MouseTracker'
import '../css/Character.css'

const Character = () => {
  const screenY = window.innerHeight / 2
  const screenX = window.innerWidth / 2
  
  const mouse = MouseTracker()
  const svgRef = useRef(null)

  const updateDir = () => {
    const newAngle = Math.atan2((mouse.posY - screenY), (mouse.posX - screenX))
  }

  useEffect(() => {
    gsap.to(svgRef.current, {
      rotation: 360, // Rotate the element 360 degrees
      duration: 2, // Duration of the animation in seconds
      ease: "none", // Type of easing (none for a linear animation)
      repeat: -1, // -1 for infinite repeats
      yoyo: true,
    })

    return () => {
      gsap.killTweensOf(svgRef.current)
    }
  }, [])
  
  return (
    <div className="Character">
      <svg ref={svgRef} width={500} height={500}>
        <SVG src={characterData} />
      </svg>
    </div>
  )
}

export default Character
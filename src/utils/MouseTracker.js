/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   MouseTracker.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 15:47:47 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/20 07:12:58 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { watchViewport, unwatchViewport } from 'tornis';
import { useState, useEffect } from 'react';

// Custom hook for mouse tracking using tornis
const MouseTracker = (ref) => {
  const [mouseData, setMouseData] = useState({
    moved: false,
    scrollY: 0,
    posX: 0,
    posY: 0,
    velX: 0,
    velY: 0
  })

  // this function will be provided to tornis api
  // tornins returns with state object with current data
  const updateValues = ({ mouse }) => {  
    if (mouse.changed) {
      setMouseData({
        moved: mouse.changed,
        posX: mouse.x,
        posY: mouse.y,
        velX: mouse.velocity.x,
        velY: mouse.velocity.y
      })
    }
  }

  // Listening to reference to inner object and its scroll pos
  const updateScroll = () => {
    const scrollY = ref.current ? ref.current.scrollTop : 0

    setMouseData(prevData => ({
      ...prevData,
      scrollY: scrollY
    }))
  }
  
  // "subscribing" updateValues function to tornis watchviewport
  // custom hook for scroll since tornis only reads from root obj
  useEffect(() => {
    const targetElement = ref.current
    
    if (targetElement) {
      targetElement.addEventListener('scroll', updateScroll)
    }
    watchViewport(updateValues)
    
    return () => {
      if (targetElement) {
        targetElement.removeEventListener('scroll', updateScroll)
      }
      unwatchViewport(updateValues)
    }}, [ref])

  return mouseData
}

export default MouseTracker
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   MouseTracker.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 15:47:47 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/09 21:55:45 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { watchViewport, unwatchViewport } from 'tornis';
import { useState, useEffect } from 'react';

// Custom hook for mouse tracking using tornis
const MouseTracker = () => {
  // init values to zero
  const [mouseData, setMouseData] = useState({
    moved: false,
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
  
  // "subscribing" updateValues function to tornis watchviewport
  useEffect(() => {
    watchViewport(updateValues)
    return () => {
      unwatchViewport(updateValues)
    }}, [])

  return mouseData
}

export default MouseTracker

/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   MouseTracker.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 15:47:47 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/02 17:59:39 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useState, useEffect } from 'react';
import { watchViewport, unwatchViewport } from 'tornis';

// Custom hook for mouse tracking using tornis
const MouseTracker = () => {
  // init values to zero
  const [mouseData, setMouseData] = useState({
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

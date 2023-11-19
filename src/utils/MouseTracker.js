/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   MouseTracker.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 15:47:47 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/18 08:14:26 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { watchViewport, unwatchViewport } from 'tornis';
import { useState, useEffect } from 'react';

// Custom hook for mouse tracking using tornis
const MouseTracker = () => {
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
  const updateValues = ({ mouse, scroll }) => {
    if (mouse.changed || scroll.changed) {
      setMouseData({
        moved: mouse.changed,
        scrollY: scroll.top,
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
/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Character.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 13:13:14 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/04 08:57:33 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import characterSvg from '../resources/character.svg'
import MouseTracker from '../MouseTracker'
import '../css/character.css'

import React, {useRef, useEffect } from 'react'
import * as PIXI from 'pixi.js'


const Character = () => {
  const mouse = MouseTracker()

  const pixiContainer = useRef(null)
  const app = useRef(null)

  useEffect(() => {
    app.current = new PIXI.Application({
      width: 500,
      height: 500,
      transparent: true
    })

    pixiContainer.current.appendChild(app.current.view)

    app.current.loader.add(characterSvg).load((loader, resources) => {
      const texture = PIXI.Texture.from(resources[characterSvg].url)
      const sprite = new PIXI.Sprite(texture)
      
      // Adjust sprite properties if needed
      sprite.x = app.current.screen.width / 2
      sprite.y = app.current.screen.height / 2
      sprite.anchor.set(0.5);

      app.current.stage.addChild(sprite)
    })

    return () => {
      app.current.destroy(true, true)
      app.current = null
    }
  }, [])

  return (
    <div className="Character">
       
    </div>
  )
}

export default Character
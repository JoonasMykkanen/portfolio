/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/16 19:54:16 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/19 18:57:13 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import { useEffect } from 'react'
import data from '../utils/ProjectData'
import '../css/Projects.css'
import gsap from 'gsap'

const Projects = ({ mouse }) => {

 
  
  return (
    <div className='Projects'>
      <h1>Projects<span>.</span></h1>
        <div className="container">
          <h2 className="text">miniRT<span>WOAH</span></h2>
          <h2 className="text">Minishell<span>AND CLIPPING</span></h2>
          <h2 className="text">Philosophers<span>CRAZYYY</span></h2>
          <h2 className="text">Libft<span><a href="https://stacksorted.com/text-effects/minh-pham" target="_blank">SOURCE</a></span></h2>
          <h2 className="text">PushSwap<span><a href="https://twitter.com/juxtopposed" target="_blank">LET'S CONNECT</a></span></h2>
      </div>
    </div>
  )
}

export default Projects

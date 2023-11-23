/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Project-item.jsx                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/21 05:52:35 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/23 18:58:56 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import server from '../resources/icons/server.png'
import shell from '../resources/icons/shell.png'
import philo from '../resources/icons/philo.png'
import rt from '../resources/icons/rt.png'
import { useEffect } from 'react'
import '../css/Projects.css'
import gsap from 'gsap'

const ProjectTtem = ({ objRef, current, data }) => {
  const project = data[current]

  useEffect(() => {
    if (objRef.current) {
      gsap.fromTo(objRef.current, { opacity: 0.5 }, { opacity: 1, duration: 0.5 });
    }
  }, [current, objRef])
  
  if (!project) return

  let img
  if (current === 'miniRT') img = rt
  else if (current === 'Minishell') img = shell
  else if (current === 'Philo') img = philo
  else if (current === 'webserv') img = server

  

  return (
    <div ref={objRef} className='item-details'>
      {
        project ?
        <>
          <div className='item-details-text'>
            <h3>{current}</h3>
            <p>{project.text}</p>
            <br />
            <div className='stack'>
              {Object.entries(project.stack).map(([index, item]) => (
                <p key={index} className='stack-item'>{item}</p>
              ))}
            </div>
          </div>
          <div className='item-mask'>
            <img src={img} alt='error'/>
          </div>
        </>
        : <></>
        }
    </div>
  )
}

export default ProjectTtem

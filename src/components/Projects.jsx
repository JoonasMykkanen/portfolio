/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/16 19:54:16 by jmykkane          #+#    #+#             */
/*   Updated: 2023/12/31 11:48:31 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import macPng from '../resources/mac.png'
import '../css/Projects.css'

const Item = () => {
  return (
    <div className='project-item'>
        <img className='mac-img' src={macPng} alt='Macbook png'/>
        <div className='project-details'> 
          <h2>Project name</h2>
          <p>some info blaa blaa blaa</p>
        </div>
    </div>
  )
}

const Projects = () => {  
  return (
    <div className='Projects'>
      <h1>Projects<span>.</span></h1>
        <Item />
        <Item />
    </div>
  )
}

export default Projects

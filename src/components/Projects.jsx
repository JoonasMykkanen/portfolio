/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Projects.jsx                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/09 17:30:23 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/10 22:44:35 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React, { useEffect, useRef } from 'react'
import '../css/Projects.css'

const Item = ({ name }) => {
  return (
    <div className='item'>
      <p className='item-heading'>Project idea</p>
      <h2>{name}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  )
}

const Projects = () => {
  return (
    <div className='Projects'>
      <div className='Projects-heading'>
        <h1>My work so far</h1>
        <span>.</span>
      </div>
      <div className='cards'>
       <div className='cards-left'>
          <Item name='miniRT' className={'item-left'}/>
        </div>
        <div className='cards-right'>
          <Item name='webserv' className={'item-right'}/>
        </div>
        <div className='cards-left'>
          <Item name='Minishell' className={'item-left'}/>
        </div>
      </div>
    </div>
  )
}

export default Projects;

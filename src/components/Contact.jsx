/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Contact.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 12:06:11 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/22 16:53:53 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import linkedinImg from '../resources/linkedin.png'
import githubImg from '../resources/github.png'
import { useRef, useEffect, useState } from 'react'
import '../css/Contact.css'
import gsap from 'gsap'

const Contact = ({ mouse }) => {
  const [animationPlayed, setAnimationPlayed] = useState(false)
  const linkedinRef = useRef(null)
  const githubRef = useRef(null)

  // Initial hook only done once when and hidden
  useEffect(() => {
    if (!githubRef.current || !linkedinRef.current) {
      return
    }
    
    gsap.set(githubRef.current, { opacity: 0, x: -100 })
    gsap.set(linkedinRef.current, { opacity: 0, x: 100 })
  }, [])

  // Hook listening to scroll and updating based on that
  useEffect(() => {
    if (mouse.scrollY > 1450 && !animationPlayed) {
      gsap.to(githubRef.current, { ease: 'elastic', opacity: 1, duration: 0.75, x: 0 })
      gsap.to(linkedinRef.current, { ease: 'elastic', opacity: 1, duration: 0.75, x: 0 })
      setAnimationPlayed(true)
    }
  }, [mouse.scrollY])

  return (
    <div className="Contact">
      <div className='header'>
        <h1>Let's have a chat<span>!</span></h1>
        <p>I'm not your typical salesperson. I'm a passionate tech enthusiast. Feel free to reach out, and let's have a relaxed chat. Together, we can explore your project ideas and see if I can assist you in bringing them to life.</p>
      </div>
      <div className='logos'>
        <a ref={githubRef} href="https://github.com/JoonasMykkanen"><img src={githubImg} alt=''/></a>
        <a ref={linkedinRef} href="https://www.linkedin.com/in/joonas-mykkänen-bb5739230/"><img src={linkedinImg} alt=''/></a>
      </div>
    </div>
  )
}

export default Contact
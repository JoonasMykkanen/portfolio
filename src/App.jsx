/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:09:13 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/21 11:05:25 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import MouseHook from './utils/MouseTracker'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Header from './components/Header'
import { useRef } from 'react'
import './css/App.css'

function App() {
  const contentRef = useRef(null)
  const mouse = MouseHook(contentRef)

  return (
    <div className="App">
      <div className="App-content-top"/>
      <div ref={contentRef} className="App-content" >
        {/* Actual content of the page */}
        <Header />
        <Landing mouse={mouse}/>
        <Projects mouse={mouse}/>
        <Contact />
        {/* -------------------------- */}
      </div>
      <div className="App-content-bottom"/>
    </div>
  )
}

export default App

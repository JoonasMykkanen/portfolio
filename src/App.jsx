/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:09:13 by jmykkane          #+#    #+#             */
/*   Updated: 2024/04/08 15:31:46 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import MouseHook from './utils/MouseTracker'
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
        {/* -------------------------- */}
      </div>
      <div className="App-content-bottom"/>
    </div>
  )
}

export default App

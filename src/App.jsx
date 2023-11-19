/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:09:13 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/19 18:21:04 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import MouseHook from './utils/MouseTracker'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Header from './components/Header'
import './css/App.css'

function App() {
  const mouse = MouseHook()

  return (
    <div className="App">
      <div className="App-content-top"/>
      <div className="App-content" >
        {/* Actual content of the page */}
        <Header />
        <Landing mouse={mouse}/>
        <Projects mouse={mouse}/>
        {/* <Contact /> */}
        {/* -------------------------- */}
      </div>
      <div className="App-content-bottom"/>
    </div>
  )
}

export default App

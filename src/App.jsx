/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:09:13 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/10 22:58:37 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Projects from './components/Projects'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Header from './components/Header'
import MouseHook from './MouseTracker'
import About from './components/About'
import './css/App.css'


function App() {
  const cursor = MouseHook()

  return (
    <div className="App">
      <div className="App-content-top"/>
      <div className="App-content">
        <Header />
        <Landing mouse={cursor} />
        <Projects/>
        <About />
        <Contact />
      </div>
      <div className="App-content-bottom"/>
    </div>
  )
}

export default App

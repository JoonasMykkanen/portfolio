/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   App.jsx                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:09:13 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/03 15:37:40 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Projects from './components/Projects'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Header from './components/Header'
import './css/App.css'

function App() {
  return (
    <div className="App">
      <div className="App-content-top"></div>
      <div className="App-content">
        <Header />
        <Landing />
        <Projects />
        <Contact />
      </div>
      <div className="App-content-bottom"></div>
    </div>
  )
}

export default App

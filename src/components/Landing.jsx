/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Landing.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:47:33 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/10 09:04:40 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Character from "./Character"
import '../css/Landing.css'

const Landing = ({ mouse }) => {
  return (
    <div className="Landing">
      <div className="Landing-left">
        <h1>
          Hello there👋🏼
          <br />
          My name is <b>Joonas</b>
          <span>.</span>
        </h1>
          <p>
            <span className="span-highlight">Developer</span>
            from Hyvinkää, Finland.
          </p>
      </div>
      <div className="Landing-right">
        <Character mouse={mouse} />
      </div>
    </div>
  )
}

export default Landing
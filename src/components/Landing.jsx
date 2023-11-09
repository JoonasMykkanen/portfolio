/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Landing.jsx                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:47:33 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/08 08:41:06 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import Character from "./Character"
import '../css/Landing.css'

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Landing-left">
        <h1>
          Hi, my
          <br />
          name is{" "}
          <b>Joonas</b>
          <span>.</span>
        </h1>
          <p>
            I'm a
            <span className="span-highlight">developer</span>
            from Hyvinkää, Finland.
          </p>
      </div>
      <div className="Landing-right">
        <Character />
      </div>
    </div>
  )
}

export default Landing
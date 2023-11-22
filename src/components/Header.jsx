/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:03:25 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/22 16:35:18 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import '../css/Header.css'

const Header = () => {  
  return (
    <div className="Header">
      <a href="./">HOME</a>
      <a href="mailto:mykkanen.joonas@outlook.com">LET'S CHAT</a>
    </div>
  )
}

export default Header
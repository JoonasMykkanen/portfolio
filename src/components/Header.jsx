/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:03:25 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/05 11:55:06 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import '../css/Header.css'

// Header main component: Will have language switches, logo and menu
const Header = () => {
  return (
    <div className="Header">
      <a href="./">MENU</a>
      <a href="./">HIRE ME</a>
    </div>
  )
}

export default Header
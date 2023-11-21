/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   Header.jsx                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:03:25 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/21 10:07:55 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import '../css/Header.css'

const Header = () => {  
  return (
    <div className="Header">
      <a href="./">HOME</a>
      <a href="mailto:mykkanen.joonas@outlook.com">HIRE ME</a>
    </div>
  )
}

export default Header
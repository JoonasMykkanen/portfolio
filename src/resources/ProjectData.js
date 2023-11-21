/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ProjectData.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/18 08:01:08 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/21 10:55:47 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Datastructure for projects base
const data = {
  'miniRT': {
    'text': 'In this team based project, we developed a 3D graphics engine to simulate how light interacts with different objects to create realistic image.',
    'sub': 'psssst',
    'stack': ['C', 'Threadpool', '3D Graphics', 'RayTracing'],
    'icon': './src/resources/icons/rt.png'
  },
  'Minishell': {
    'text': 'Constructing basic UNIX shell. Gained deep insights on how operating systems handle programs and files.',
    'sub': 'we should',
    'stack': ['C', 'pipes', 'redirections', 'parsing', 'input sanitizing'],
    'icon': '../resources/icons/shell.png'
  },
  'Philosophers': {
    'text': "This project tackles a famous puzzle in computer programming, known as the Dining Philosophers Problem. Imagine five philosophers sitting around a table, with a fork between each of them. To eat, each philosopher needs two forks, but there's only one on either side of them.",
    'sub': 'connect &',
    'stack': ['C', 'Multithreading', 'Mutexes'],
    'icon': '../resources/icons/philo.png'
  },
  'webserv': {
    'text': "webserv is complete http server able to start serving your awesome websites to whole wide world! Main goal being to stay up at all cost and never hang, just like a real server.",
    'sub': 'work together',
    'stack': ['C++', 'Sockets', 'http'],
    'icon': '../resources/icons/serv.png'
  },
}

export default data
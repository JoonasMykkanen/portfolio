/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ProjectData.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/18 08:01:08 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/22 18:43:59 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// Datastructure for projects base
const data = {
  'miniRT': {
    'text': 'In this team based project, we developed a 3D graphics engine to simulate how light interacts with different objects to create realistic image with raytracing.',
    'sub': 'psssst',
    'stack': ['C', 'threadpool', 'vectors'],
    'icon': './src/resources/icons/rt.png'
  },
  'Minishell': {
    'text': 'Also a team based project, goal was to craft our very own shell. My main area of responsibility was to create the pipeline that handles executing commands as well as builtin commands such as EXPORT & ECHO.',
    'sub': 'we should',
    'stack': ['C', 'fork', 'pipe', 'redir', 'parsing'],
    'icon': '../resources/icons/shell.png'
  },
  'Philosophers': {
    'text': "This project tackles a famous puzzle in computer programming, known as the 'Dining Philosophers Problem'. It makes you be very careful about resources being splitted up with multiple threads.",
    'sub': 'connect &',
    'stack': ['C', 'pthread', 'mutex'],
    'icon': '../resources/icons/philo.png'
  },
  'webserv': {
    'text': "webserv is complete http server able to start serving your awesome websites to whole wide world! Main goal being to stay up at all cost and never hang, just like a real server.",
    'sub': 'work together',
    'stack': ['C++', 'sockets', 'http'],
    'icon': '../resources/icons/serv.png'
  },
}

export default data
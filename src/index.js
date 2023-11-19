/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   index.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: jmykkane <jmykkane@student.hive.fi>        +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/11/02 07:09:18 by jmykkane          #+#    #+#             */
/*   Updated: 2023/11/15 06:26:08 by jmykkane         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

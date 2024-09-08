// src/components/MyTeam.js

import React from 'react';
import teamData from '../data/teamData'; // Impor data tim
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Impor FontAwesomeIcon
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Impor ikon LinkedIn
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


const MyTeam = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 cursor-pointer">
      {teamData.map((member) => (
        <div
          key={member.id}
          className="relative text-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 overflow-hidden"
          style={{
            backgroundImage: `url(${member.image})`, // Mengatur background dari foto profil
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay untuk blur background */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md rounded-lg"></div>

          <div className="relative z-10 flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-white"
            />
            <h2 className="text-xl font-bold text-center">{member.name}</h2>
            <p className="text-center text-gray-300 mb-4">{member.description}</p>
            <a
              href={member.socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-500   "
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x"  className="hover:scale-125 transition duration-300 mx-3 hover:text-blue-600 " />
              <FontAwesomeIcon icon={faTwitter} size="2x" className="hover:scale-125 transition duration-300 mx-3 hover:text-cyan-600" />
              <FontAwesomeIcon icon={faInstagram} size="2x"className="hover:scale-125 transition duration-300 mx-3 hover:text-pink-600" />
              <FontAwesomeIcon icon={faGithub} size="2x"className="hover:scale-125 transition duration-300 mx-3 hover:text-slate-950"  />
          
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyTeam;

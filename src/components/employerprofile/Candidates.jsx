// // CandidatePage.js
// import React from 'react';

// const Candidates = () => {
//   const candidate = {
//     name: 'John Doe',
//     title: 'Software Engineer',
//     experience: '5 years',
//     skills: ['JavaScript', 'React.js', 'Node.js'],
//     education: 'Bachelor of Computer Science',
//     location: 'San Francisco, CA',
//     summary: 'Experienced software engineer with a focus on web development.',
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-8 p-4 bg-white shadow-md rounded-md">
//       <h1 className="text-3xl font-bold mb-4">{candidate.name}</h1>
//       <h2 className="text-xl text-gray-600 mb-2">{candidate.title}</h2>
//       <p className="text-gray-700 mb-2">{candidate.summary}</p>
//       <div className="flex items-center mb-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 mr-2 text-gray-500"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M2.293 7.707A1 1 0 013 7h14a1 1 0 01.707.293l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 11H3.414l-1.293 1.293a1 1 0 01-1.414-1.414l3-3z"
//             clipRule="evenodd"
//           />
//         </svg>
//         <p className="text-gray-700">{candidate.experience} of experience</p>
//       </div>
//       <div className="flex items-center mb-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 mr-2 text-gray-500"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 2a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L11 5.414V16a1 1 0 01-2 0V5.414L3.707 10.707a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 2z"
//             clipRule="evenodd"
//           />
//         </svg>
//         <p className="text-gray-700">{candidate.education}</p>
//       </div>
//       <div className="flex items-center mb-2">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5 mr-2 text-gray-500"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
//             clipRule="evenodd"
//           />
//           <path
//             fillRule="evenodd"
//             d="M10 4a6 6 0 100 12 6 6 0 000-12zM4 10a6 6 0 1112 0 6 6 0 01-12 0z"
//             clipRule="evenodd"
//           />
//         </svg>
//         <p className="text-gray-700">{candidate.location}</p>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Skills</h3>
//         <ul className="flex flex-wrap">
//           {candidate.skills.map((skill, index) => (
//             <li
//               key={index}
//               className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
//             >
//               {skill}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Candidates;

import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import Avatar from '@mui/joy/Avatar';

const CheckProfile = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Load profiles from local storage
    const loadedProfiles = JSON.parse(localStorage.getItem('profiles')) || [];
    setProfiles(loadedProfiles);
  }, []);

  const handleViewProfile = (profileId) => {
    // Implement logic to view profile
    console.log(`View profile clicked for profile ID: ${profileId}`);
  };

  const handleViewResume = (profileId) => {
    // Implement logic to view resume
    console.log(`View resume clicked for profile ID: ${profileId}`);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography level="h4" component="h2" sx={{ mb: 2 }}>
        Profiles
      </Typography>
      <Grid container spacing={2}>
        {profiles.map((profile) => (
          <Grid item key={profile.id} xs={12} sm={6} lg={4}>
            <Card sx={{ mb: 2, padding: '20px', display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ width: 64, height: 64, marginRight: 2 }} alt={`${profile.firstName} ${profile.lastName}`} src={profile.profilePhoto} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography level="h6">{`${profile.firstName} ${profile.lastName}`}</Typography>
                <Typography>{`Degree: ${profile.degree}`}</Typography>
              </Box>
           
              <Box>
                
                <Button className=' m-3' variant="outlined"  onClick={() => handleViewProfile(profile.id)}>View Profile</Button>
                <Button variant="outlined" onClick={() => handleViewResume(profile.id)}>View Resume</Button>
                
              </Box>
             
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CheckProfile;
import axios from "axios";

export const getUser = (emailId) => {
    return fetch(`https://finakyrback.onrender.com/user/${emailId}`, {method: 'GET'}).then((response) => { // console.log('RES :', response);
        return response.json();
    }).catch((error) => {
        console.log(error);
    });
};

export const getAllUser = () => {
    return fetch(`https://finakyrback.onrender.com/user/allusers`, {method: 'GET'}).then((response) => {
        return response.json();
    }).catch((error) => {
        console.log(error)
    })
}

// export const updateProfile =async (emailId, token, skill) => {
//     console.log(`LINE NUMBER 4`);
//     return fetch(`https://finakyrback.onrender.com/user/${emailId}`, {
//         method: 'PUT',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(skill)
//     }).then((response) => {
//         return response.json();
//     }).catch((error) => console.log(error));
// };

export const  updateProfile =async (email, token,skill) => {

  try {
    const response = await axios.put(
      `https://finakyrback.onrender.com/user/${email}?skill=${skill}`,{},
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const  updateProfilefac =async (email, token,Conference_publications,journals) => {
  alert(Conference_publications);
  try {
    const response = await axios.put(
      `https://finakyrback.onrender.com/faculty/updateProfile/${email}?&Conference_publications=${Conference_publications}&International_Journal=${journals}`,{},
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadFile = (classId, formData) => {
    return fetch(`https://finakyrback.onrender.com/classroom/${classId}/files`, {
        method: 'POST',
        body: formData
    })  .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};


export const updateProfiles = async(emailId, token,name,description,url) => { 
    try {
   const response = await axios.put(
     `https://finakyrback.onrender.com/user/id/${emailId}?name=${name}&description=${description}&url=${url}`,{},
     {
       headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
       },
     }
   );
   return response.data;
 } catch (error) {
   console.log(error);
 }
};


export const updateProfiless = async(emailId, token,name,description,role) => {
  

   try {
  const response = await axios.put(
    `https://finakyrback.onrender.com/user/ids/${emailId}?name=${name}&description=${description}&role=${role}`,{},
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
} catch (error) {
  console.log(error);
}
};
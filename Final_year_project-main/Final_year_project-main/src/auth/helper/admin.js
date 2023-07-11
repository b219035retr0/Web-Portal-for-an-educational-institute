export const Imghelper = (faculty) => {
    const imageUrl = faculty
      ? `https://finakyrback.onrender.com/faculty/image/${faculty._id}`
      : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
    return imageUrl;
  };
  

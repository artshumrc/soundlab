const sign = async (objectName, contentType) => {
  console.log("objectName LOG", objectName);
  console.log("contentType LOG", contentType);
  try {
    const res = await fetch(`${process.env.REACT_APP_AUTH_SERVER}/s3/sign?objectName=${objectName}&contentType=${contentType}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
  } catch (err) {
    throw err;
  }
};

export {sign}
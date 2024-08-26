const FetchData = async (url) => {
  try {
    const response = await fetch(url);
    if(!response.ok) return undefined
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export default FetchData;
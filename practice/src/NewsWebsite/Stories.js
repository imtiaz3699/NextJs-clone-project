import React, { useEffect } from 'react'

function Stories() {
  let isLoading = true;
    let api = 'http://hn.algolia.com/api/v1/search?query=html'

    const fetchApiData = async (url) => {
        try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          isLoading = false;
        } catch (error){
          console.log(error);
        }
    }
    useEffect(()=> {
    fetchApiData(api);
    } , [])
  return (
    <div>
      
    </div>
  )
}

export default Stories

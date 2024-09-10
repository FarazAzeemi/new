function fetchData(key, callback) {
    // Assume fetching data asynchronously
    const data = { 
      name: 'faraz' 
    };
    
    // Call the callback function and pass the data[key] as an argument
    callback(data[key]);
  }
  
  // Define a callback function to handle the fetched data
  function handleData(value) {
    console.log('The value of the key is: ' + value);
  }
  
  // Call fetchData and pass in the key and the callback function
  fetchData('name', handleData);

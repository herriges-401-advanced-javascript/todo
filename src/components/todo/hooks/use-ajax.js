import { useEffect, useState } from 'react';
import axios from 'axios';


const useAjax = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [crud, setCrud] = useState('get');
  const api = 'http://localhost:3001/todo';

  useEffect(() => {
    const fetchData = async () => {
      let response;
      switch(crud){
      case 'get':
        setIsLoading(true);
        response = await axios.get(api);
        console.log('api data', response.data);
        setList(response.data || []);
        setIsLoading(false);
        break;
    case 'post':
        
      }

    }; 
    fetchData(api);
  }, [crud]);
  return {
    list,
    setList,
    isLoading,
    setIsLoading,
    crud, 
    setCrud,
  };
};

export default useAjax;
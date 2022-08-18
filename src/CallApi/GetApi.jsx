import { useState, useEffect } from "react";
import axios from "axios";
const GetApi = (props) => {
  const [data, setData] = useState([]);
  let endpoint = props;
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `https://62eb40ae705264f263d58770.mockapi.io/api/v1/zingmp3/${endpoint}`
      );
      return res;
    }
    getData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [endpoint]);
  return <>{data}</>;
};

export default GetApi;

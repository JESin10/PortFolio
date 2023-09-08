import axios from "axios";

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_PROJECT_DB_SERVER}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getProjectData = async () => {
  try {
    const { data } = await instance.get("");
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

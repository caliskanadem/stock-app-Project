import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchStart, fetchFail, getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const { token } = useSelector((state) => state.auth);
  const getStockData = async (url) => {
    // const BASE_URL = "http://12165.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`stock/${url}/`);
      // const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      getStockData(url);
      toastSuccessNotify(`${url} Successfully deleted`);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(`${url} Can not be deleted`);
    }
  };

  return { getStockData, deleteStockData };
};

export default useStockCall;

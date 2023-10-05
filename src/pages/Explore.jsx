import { useDispatch, useSelector } from "react-redux";
import { Tweet } from "../components/Tweet";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useEffect } from "react";
import { fetchAllPeople } from "../redux/fetchPeopleSlice";

function Explore() {
  const dispatch = useDispatch();
  const { allPosts, status } = useSelector((store) => store.people);
  useEffect(
    function () {
      if (!allPosts) dispatch(fetchAllPeople());
    },
    [allPosts, dispatch]
  );
  return (
    <>
      {status === "pending" && <Loader />}
      {status === "error" && <Error />}
      {allPosts && <Tweet postData={allPosts} />}
    </>
  );
}

export default Explore;

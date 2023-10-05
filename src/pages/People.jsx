import { useEffect } from "react";
import UserCard from "../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPeople } from "../redux/fetchPeopleSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";

function People() {
  const dispatch = useDispatch();
  const { allPeople, status } = useSelector((store) => store.people);
  useEffect(
    function () {
      if (!allPeople) dispatch(fetchAllPeople());
    },
    [dispatch, allPeople]
  );
  return (
    <>
      {status === "error" && <Error />}
      {allPeople && <UserCard profileData={allPeople} />}
      {status === "pending" && <Loader />}
    </>
  );
  //   return (
  //     <>
  //       <UserCard />
  //       <UserCard />
  //       <UserCard />
  //       <UserCard />
  //       <UserCard />
  //       <UserCard />
  //       <UserCard />
  //       <UserCard />
  //       <UserCard />
  //     </>
  //   );
}

export default People;

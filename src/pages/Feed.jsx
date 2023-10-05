import { Title } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { Tweet } from "../components/Tweet";
import { useEffect } from "react";
import { fetchAllPeople } from "../redux/fetchPeopleSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";

function Feed() {
  const dispatch = useDispatch();

  const { following, status, allPosts } = useSelector((store) => store.people);

  useEffect(
    function () {
      if (!allPosts && status === "idle") dispatch(fetchAllPeople());
    },
    [allPosts, dispatch, status]
  );

  function filterPostsForFeed(allPosts) {
    const feedPosts = allPosts.filter((post) => following.includes(post.id));
    return feedPosts;
  }
  return (
    <>
      {!following.length && <Title>Follow people to see feed</Title>}
      {status === "pending" && <Loader />}
      {status === "error" && <Error />}
      {allPosts && <Tweet postData={filterPostsForFeed(allPosts)} />}
    </>
  );
}

export default Feed;

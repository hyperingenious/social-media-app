import { useSelector } from "react-redux";
import ProfileComponent from "../components/ProfileComponent";
import { Tweet } from "../components/Tweet";

function Profile() {
  const { posts } = useSelector((store) => store.people);
  return (
    <ProfileComponent>
      <Tweet postData={posts} />
    </ProfileComponent>
  );
}

export default Profile;

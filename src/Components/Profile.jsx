import { React } from "react";
import { Context } from "../Context/Usercontext";
function Profile() {
  const { user } = Context();

  if (!user) return <div>Please Login</div>;

  return (
    <div>
      Wlcome {user.username} having Password:{user.pass}{" "}
    </div>
  );
}

export default Profile;

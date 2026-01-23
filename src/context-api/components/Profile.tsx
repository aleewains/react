import { useUserContext } from "../context/userContextProvider";

function Profile() {
  const context = useUserContext();
  const user = context?.user; //here we have object of username and password
  if (!user) return <div>Please Login</div>;
  return (
    <div className="flex justify-center gap-3 mt-4 font-bold text-2xl">
      Wellcome <p className="text-amber-500">{user.username}</p>{" "}
    </div>
  );
}

export default Profile;

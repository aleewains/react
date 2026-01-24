import { useUserContext } from "../context/userContextProvider";

function Profile() {
  const context = useUserContext();
  const user = context?.user; //here we have object of username and password
  console.log("context", user);
  if (!user) return <div>Please Login</div>;
  console.log(user);
  const logout = () => {
    //resetting context
    context.setUser(null);
    console.log("logout", user);
  };
  return (
    <div className="flex justify-center gap-3 mt-4 font-bold text-2xl">
      Wellcome <p className="text-amber-500">{user.username}</p>
      <button
        onClick={logout}
        className="p-2 bg-amber-200 rounded cursor-pointer font-normal texl-xl"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;

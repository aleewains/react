import { useParams } from "react-router";
function User() {
  //to fetch variable from url useParams is used, data can also be fetched from DBs
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 ">User :{userid}</div>
  );
}

export default User;

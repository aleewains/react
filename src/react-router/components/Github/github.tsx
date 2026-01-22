import { useLoaderData } from "react-router";
// type Data = Record<string, string>;
function Github() {
  // useLoaderData is used to load the data from the Route loader
  const data = useLoaderData();
  // const [data, setData] = useState<Data>({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/aleewains")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.table(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4 ">
      Github followers: {data.followers}
      <div className="flex justify-center mt-8 mb-8">
        <img
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
          className="justify-center"
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/aleewains");
  return response;
};

import { useSelector } from "react-redux";

function MainBody(props) {
  const data = useSelector((state) => state.themeData);

  return (
    <div className="mainBody" style={{ backgroundColor: data.theme }}></div>
  );
}

export default MainBody;

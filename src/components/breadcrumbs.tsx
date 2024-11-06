import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathTrace = location.pathname
    .split("/")
    .filter((str) => !Number(str) && str);

  const formatPathString = (pathString: string) => {
    const stringToArr = pathString.split("");
    const restOfString = stringToArr.join("").slice(1);
    const capitalizedPathString = stringToArr[0].toLocaleUpperCase();

    return capitalizedPathString + restOfString;
  };

  const createPath = (path: string, pathname: string) => {
    const pathIndex = pathname
      .split("/")
      .filter((x) => x)
      .indexOf(path);

    const pathArray = pathname.split("/").filter((x) => x);
    return pathArray.splice(0, pathIndex + 1).join("/");
  };

  return (
    <div className="dark:text-white breadcrumbs text-sm">
      <ul>
        <li>
          <Link to="/">Capture Tools</Link>
        </li>
        {pathTrace.map((path, index) => (
          <li>
            {index !== pathTrace.length - 1 ? (
              <Link to={createPath(path, location.pathname)}>
                {formatPathString(path)}
              </Link>
            ) : (
              <p>{formatPathString(path)}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;

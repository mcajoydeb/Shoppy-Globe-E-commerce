import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold text-red-500">404</h1>
      <p className="mt-2">Page not found</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { CheckName } from "./pages/CheckName";
import { Home } from "./pages/Home";
import CheckInfo from "./pages/CheckInfo";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="check-name" element={<CheckName />} />
        <Route path="check-info" element={<CheckInfo />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <nav className="h-14 flex flex-row items-center justify-center gap-x-10">
        <Link to="/">Home</Link>

        <Link to="/check-name">Check Name</Link>

        <Link to="/check-info">Check Info</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

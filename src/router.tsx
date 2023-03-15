import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import NationalityList from "./views/NationalityList";
import NationalityUserList from "./views/NationalityUserList";
import NationalityUserProfile from "./views/NationalityUserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NationalityList/>,
  },
  {
    path: "/:nationality/users",
    element: <NationalityUserList/>
  },
  {
    path: "/users/:id",
    element: <NationalityUserProfile/>
  },
]);

export default router;
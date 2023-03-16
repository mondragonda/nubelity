import {
  createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import NationalityList from "./views/NationalityList";
import NationalityUserList from "./views/NationalityUserList";
import NationalityUserProfile from "./views/NationalityUserProfile";
import UserService, { NationalityCode } from './services/UserService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NationalityList/>,
  },
  {
    path: "/:nationality/users",
    element: <NationalityUserList/>,
    loader: async ({ params }) => {
      return UserService.requestUsersByNationality(params.nationality as NationalityCode); 
    }
  },
  {
    path: "/users/:id",
    element: <NationalityUserProfile/>
  },
]);

export default router;
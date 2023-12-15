//create public router

import Auth from "../pages/auth/Auth";

const privateRouter = [
  {
    path: "/",
    element: <Auth />,
  },
];

//export
export default privateRouter;

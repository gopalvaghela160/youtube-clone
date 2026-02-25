import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
import VideoList from "./components/VideoList";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <VideoList />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
        {/**
         * Head
         * Body
         *  Sidebar
         *    MenuItems
         *  MainContainer
         *    ButtonList
         *    VideoContainer
         *    VideoCard
         **/}
      </Provider>
    </div>
  );
}

export default App;

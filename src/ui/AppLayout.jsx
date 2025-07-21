import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-red-500 p-4 absolute inset-0 sm:inline-block sm:h-fit sm:p-8 md:px-14">
      <Header />
      {isLoading && <p>LOADING...</p>}
      <Outlet />
    </div>
  );
}

export default AppLayout;

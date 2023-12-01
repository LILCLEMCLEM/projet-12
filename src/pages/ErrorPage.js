import ErrorDisplay from "../components/Error";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

function ErrorPage() {
  return (
    <div>
      <div className="Error">
        <Header />
        <SideBar />
      </div>
      <div>
        <ErrorDisplay />
      </div>
    </div>
  );
}

export default ErrorPage;

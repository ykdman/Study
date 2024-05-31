import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error Occurred!</h1>
        <p>Could Not Find This Page!</p>
      </main>
    </>
  );
}

export default ErrorPage;

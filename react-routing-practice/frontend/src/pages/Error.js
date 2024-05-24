import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  console.log(error.data);
  console.log(error.status);

  let title = "에러 발생 !";
  let message = "무언가 잘못 됐다...";
  console.log(error);

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!!!";
    message = "뭔가 찾을 수 없는 걸 찾으려고 했음";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;

import { RemoteDataStateRendererProps } from "@/types";
import { Loader,Error } from "@/ui";

function RemoteDataStateRenderer<T>({
  remoteDataState,
  renderSuccess,
  renderInit = () => <p>Initializing...</p>,
  renderLoading = (message) => <Loader message={message || "Loading ..."} />,
  renderError = (message) => <Error message={message || "Something went wrong"} />,
}: RemoteDataStateRendererProps<T>) {
  switch (remoteDataState.status) {
    case "init":
      return <>{renderInit()}</>;
    case "loading":
      return <>{renderLoading(remoteDataState.message)}</>;
    case "error":
      return <>{renderError(remoteDataState.message)}</>;
    case "success":
      return <>{renderSuccess(remoteDataState.data)}</>;
    default:
      return null;
  }
}

export default RemoteDataStateRenderer;

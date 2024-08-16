import { RemoteDataStateRendererProps } from "@/types";
import { Loader, Error } from "@/ui";

/**
 * A component that renders different UI states based on the status of remote data.
 *
 * This component handles four possible states: initialization, loading, error, and success.
 * It uses different render functions for each state to display appropriate content.
 *
 * @param {Object} props - The props for the component.
 * @param {RemoteDataState<T>} props.remoteDataState - The current state of the remote data.
 * @param {function(T): JSX.Element} props.renderSuccess - A function to render when data is successfully fetched.
 * @param {function(): JSX.Element} [props.renderInit] - A function to render when initialization is in progress. Defaults to a simple "Initializing..." message.
 * @param {function(string): JSX.Element} [props.renderLoading] - A function to render when data is loading. Defaults to a `Loader` component with a "Loading ..." message.
 * @param {function(string): JSX.Element} [props.renderError] - A function to render when there is an error. Defaults to an `Error` component with a "Something went wrong" message.
 *
 * @returns {JSX.Element | null} The rendered component based on the current state of remote data.
 */


function RemoteDataStateRenderer<T>({
  remoteDataState,
  renderSuccess,
  renderInit = () => <p>Initializing...</p>,
  renderLoading = (message) => <Loader message={message || "Loading ..."} />,
  renderError = (message) => (
    <Error message={message || "Something went wrong"} />
  ),
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

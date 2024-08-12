import {RemoteDataStateRendererProps} from '@/types';


function RemoteDataStateRenderer<T>({
    remoteDataState,
    renderSuccess,
    renderInit = () => <p>Initializing...</p>,
    renderLoading = (message) => <p>{message || 'Loading...'}</p>,
    renderError = (message) => (
      <div>
        {message && <p>{message}</p>}
      </div>
    ),
  }: RemoteDataStateRendererProps<T>){
    switch (remoteDataState.status) {
        case 'init':
          return <>{renderInit()}</>;
        case 'loading':
          return <>{renderLoading(remoteDataState.message)}</>;
        case 'error':
          return <>{renderError(remoteDataState.message)}</>;
        case 'success':
          return <>{renderSuccess(remoteDataState.data)}</>;
        default:
          return null;
      }
}

export default RemoteDataStateRenderer;
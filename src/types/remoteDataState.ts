export type RemoteDataState<T> =
  | { status: "init" }
  | { status: "loading"; message?: string }
  | { status: "error"; message?: string }
  | { status: "success"; data: T };

export type RemoteDataStateRendererProps<T> = {
  remoteDataState: RemoteDataState<T>;
  renderSuccess: (data: T) => React.ReactNode;
  renderInit?: () => React.ReactNode;
  renderLoading?: (message?: string) => React.ReactNode;
  renderError?: (message?: string) => React.ReactNode;
};

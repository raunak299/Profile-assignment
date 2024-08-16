import { ReactNode } from "react";

export type RemoteDataState<T> =
  | { status: "init" }
  | { status: "loading"; message: ReactNode }
  | { status: "error"; message: ReactNode }
  | { status: "success"; message?: ReactNode; data: T };

export type RemoteDataStateRendererProps<T> = {
  remoteDataState: RemoteDataState<T>;
  renderSuccess: (data: T) => React.ReactNode;
  renderInit?: () => React.ReactNode;
  renderLoading?: (message?: ReactNode) => React.ReactNode;
  renderError?: (message?: ReactNode) => React.ReactNode;
};

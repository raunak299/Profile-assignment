import { ReactNode } from "react";

/**
 * Represents the different states of remote data.
 *
 * The `RemoteDataState` type is a union of objects that represent various states of fetching data from a remote source.
 * It can be in one of four states:
 * - `init`: Indicates the data is in the initialization phase.
 * - `loading`: Indicates the data is being loaded. Includes an optional message.
 * - `error`: Indicates an error occurred while fetching the data. Includes an optional error message.
 * - `success`: Indicates the data was successfully fetched. Includes the data and an optional success message.
 *
 * @template T - The type of the data being fetched.
 */

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

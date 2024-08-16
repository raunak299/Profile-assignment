import { Button } from "@/ui";
import { useSignout } from "../hooks";

export default function SignOutButton(): JSX.Element {
  const { remoteDataState, handleSignOut } = useSignout();
  const loading = remoteDataState.status === "loading";

  const label = loading ? remoteDataState.message : "Signout";

  return (
    <Button
      onClick={handleSignOut}
      label={label}
      size="medium"
      loading={loading}
    />
  );
}

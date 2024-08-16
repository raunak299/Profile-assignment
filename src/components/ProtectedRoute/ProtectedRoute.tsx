import useAuthContext from "@/context/hooks/useAuthContext";
import { Loader } from "@/ui";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export default function ProtectedRoute({
  children,
  redirectTo = "/authentication",
}: ProtectedRouteProps): JSX.Element {
  const { isLoggedIn } = useAuthContext();
  const pathname = usePathname();
  const completeRedirectUrl = `${redirectTo}?redirectTo=${pathname.slice(1)}`;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(completeRedirectUrl);
    }
  }, [isLoggedIn, completeRedirectUrl]);

  if (!isLoggedIn) {
    return <Loader message="Loading ..." />;
  }

  return <>{children}</>;
}

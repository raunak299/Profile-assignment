'use client';
import { ProtectedRoute, UserProfile } from "@/components";

export default function userProfile(): JSX.Element {
  return (
    <ProtectedRoute children={<UserProfile/>}/>
  );
}

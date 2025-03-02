import { Button } from "@happening/ui/button";

import { signOut } from "~/app/auth/actions";

export const SignOutButton = () => {
  return (
    <form action={signOut}>
      <Button size="lg">Sign out</Button>
    </form>
  );
};

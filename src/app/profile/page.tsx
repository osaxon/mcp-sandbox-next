import React from "react";

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
        <h2>User name</h2>
        <figure className="rounded-full overflow-hidden w-24 h-24 mb-4">
            <img src="https://i.pravatar.cc/300
" alt="" />
        </figure>
        <p>User bio goes here.</p>
        <p>More info about the user</p>
    </main>
  );
}

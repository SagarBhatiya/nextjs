import Link from "next/link";
import React from "react";

const Comments = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Content is currently Loading....");
    }, 4000)
  );
  return (
    <div className="border p-[10rem] w-[30rem]">
      Comments
      <Link href="/salaries"> click me </Link>
    </div>
  );
};

export default Comments;

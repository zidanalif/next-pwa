import Link from "next/link";

const page = () => {
  return (
    <div>
      Home Page
      <Link href={"/login"}>Loginn</Link>
    </div>
  );
};

export default page;

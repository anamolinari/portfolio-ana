import Image from "next/image";
import Link from "next/link";

import imgProfile from "../../public/assets/profile.png";

export function Header() {
  return (
    <header className="flex items-center w-[584px] gap-3 p-6 sm:px-0 m-auto">
      <Link href="/" aria-label="Go to home page">
        <Image
          src={imgProfile}
          alt="Profile picture of Ana Molinari"
          width={48}
          height={48}
          className="rounded-full"
        />
      </Link>

      <h1 className="text-base text-primary">Ana Molinari</h1>
    </header>
  );
}

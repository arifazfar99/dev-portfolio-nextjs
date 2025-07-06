import { GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type GithubLinkProps = {
  link: string;
};

function GithubLink({ link }: GithubLinkProps) {
  return (
    <Link
      href={link}
      className="bg-muted-foreground/20 p-2 rounded-lg"
      target="_blank"
    >
      <GithubIcon size={16} strokeWidth={3} />
    </Link>
  );
}

export default GithubLink;

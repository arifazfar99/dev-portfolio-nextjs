import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Github, Linkedin, LinkIcon, MailIcon } from "lucide-react";
import Link from "next/link";

function Connect() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 mb-2 text-sm">
            <LinkIcon size={18} />
            <p>Connect with me</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 *:text-muted-foreground *:flex *:items-center">
          <Link
            href="mailto:arifazfar99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MailIcon size={18} className="mr-3" />
            arifazfar99@gmail.com
          </Link>
          <Link href="https://github.com/arifazfar99" target="_blank">
            <Github size={18} className="mr-3" />
            rfzfr
          </Link>
          <Link
            href="https://www.linkedin.com/in/arif-azfar-azri/"
            target="_blank"
          >
            <Linkedin size={18} className="mr-3" />
            Arif Azfar Azri
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
}

export default Connect;

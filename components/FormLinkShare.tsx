"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";
import { ImShare } from "react-icons/im";
import QRCode from "react-qr-code";

function FormLinkShare({ shareUrl }: { shareUrl: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // avoiding window not defined error
  }

  const shareLink = `${window.location.origin}/submit/${shareUrl}`;
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 ">
      <div className="flex flex-grow gap-4">
        <QRCode
          size={256}
          style={{ height: "500px", maxWidth: "100%", width: "100%" }}
          value={shareLink}
          viewBox={`0 0 256 256`}
        />
      </div>

      <div className="flex flex-grow gap-4 items-center">
        <Input
          value={shareLink}
          readOnly
        />
        <Button
          className="w-[250px]"
          onClick={() => {
            navigator.clipboard.writeText(shareLink);
            toast({
              title: "Copied!",
              description: "Link copied to clipboard",
            });
          }}
        >
          <ImShare className="mr-2 h-4 w-4" />
          Share link
        </Button>
      </div>
    </div>
  );
}

export default FormLinkShare;

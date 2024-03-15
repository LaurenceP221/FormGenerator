import React from "react";
import { GetFormContentByUrl } from "@/actions/form";

async function SubmitPage({
  params,
}: {
  params: {
    formUrl: string;
  };
}) {
  const form = await GetFormContentByUrl(params.formUrl);
  return <div>page</div>;
}

export default SubmitPage;

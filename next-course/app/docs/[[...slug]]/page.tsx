import React from "react";

const DocumentPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  if (slug?.length >= 2) {
    return (
      <div>
        DocsDetail of segment(1) - {slug[0]} and segment(2) - {slug[1]}
      </div>
    );
  } else if (slug?.length === 1) {
    return <div>DocsDetail of segment(1) - {slug[0]}</div>;
  }
  return <div>DocumentPage</div>;
};

export default DocumentPage;

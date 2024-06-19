import React from "react";

export default function HtmlStyle(info: string) {
  const styledInfo = info
    .replace(/\[([^\]]+)\]/g, (match, content) => {
      return `<span style="font-weight: bold;">${content}</span>`;
    })
    .replace(/<em>(.*?)<\/em>/g, (match, content) => {
      return `<em style="font-style:normal; color: #ce5353;">${content}</em>`;
    });

  return <div dangerouslySetInnerHTML={{ __html: styledInfo }} />;
}

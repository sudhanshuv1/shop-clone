"use client";

import { SAME_ORIGIN_PATH } from "./destination";

export default function OpenViaScriptButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() =>
        window.open(`${SAME_ORIGIN_PATH}?via=window.open`, "_blank", "noopener,noreferrer")
      }
      className={className}
    >
      Open with window.open()
    </button>
  );
}

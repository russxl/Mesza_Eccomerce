"use client";

import { ImageUploader } from "@/components/upload/multi-image";
import {
  UploaderProvider,
  type UploadFn,
} from "@/components/upload/uploader-provider";
import { useEdgeStore } from "@/lib/edgestore";
import * as React from "react";

interface MultiImageDropzoneUsageProps {
  onUpload: (url: string) => void;
}

export function MultiImageDropzoneUsage({
  onUpload,
}: MultiImageDropzoneUsageProps) {
  const { edgestore } = useEdgeStore();

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });
      // Pass the uploaded URL to the parent
      onUpload(res.url);
      return res;
    },
    [edgestore, onUpload]
  );

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <ImageUploader
        maxFiles={10}
        maxSize={1024 * 1024 * 5} // 1 MB
      />
    </UploaderProvider>
  );
}

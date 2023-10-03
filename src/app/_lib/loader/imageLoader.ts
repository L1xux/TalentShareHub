import type { ImageLoaderProps } from "next/image";

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  return `${
    process.env.NEXT_PUBLIC_TEST_URL || "https://l1xux.github.io/TalentShareHub"
  }${src}?w=${width}&q=${quality || 75}`;
}

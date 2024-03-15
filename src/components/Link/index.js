import NextLink from "next/link";
import { renderCSS } from "@/theme/components";
import { theme } from "@/theme/theme";

export default function Link({ href, styleSheet, ...props }) {
  return <NextLink href={href} {...props} />;
}

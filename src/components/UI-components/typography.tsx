import { memo } from "react";
import { twMerge } from "tailwind-merge";

type TypographyProps = {
  content: string | number;
  className?: string;
};

export const Title1 = memo(({ content, className }: TypographyProps) => (
  <text className={twMerge(`text-6xl ${className ?? ""}`)}>{content}</text>
));
Title1.displayName = "Title1";

export const Title2 = memo(({ content, className }: TypographyProps) => (
  <text className={twMerge(`text-2xl text-[#BDC1C6] ${className ?? ""}`)}>
    {content}
  </text>
));
Title2.displayName = "Title2";

export const Label = memo(({ content, className }: TypographyProps) => (
  <text className={twMerge(`font-semibold text-white ${className ?? ""}`)}>
    {content}
  </text>
));
Label.displayName = "Label";

export const PlainText = memo(({ content, className }: TypographyProps) => (
  <text
    className={twMerge(`text-[#BDC1C6] whitespace-nowrap ${className ?? ""}`)}
  >
    {content}
  </text>
));
PlainText.displayName = "PlainText";

export const HighlightText = memo(({ content, className }: TypographyProps) => (
  <text className={twMerge(`font-medium text-sky-400 ${className ?? ""}`)}>
    {content}
  </text>
));
HighlightText.displayName = "HighlightText";

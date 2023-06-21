import { memo } from "react";

type TypographyProps = {
  content: string | number;
};

export const Title1 = memo(({ content }: TypographyProps) => (
  <text className="text-6xl">{content}</text>
));
Title1.displayName = "Title1";

export const Title2 = memo(({ content }: TypographyProps) => (
  <text className="text-2xl text-[#BDC1C6]">{content}</text>
));
Title2.displayName = "Title2";

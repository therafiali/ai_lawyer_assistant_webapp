import React from 'react';


interface TypographyH1Props {
  text: string;
  className?: string; // Optional
}

interface TypographyH1SProps extends TypographyH1Props {
  extra?: string; // Optional
}

interface TypographyH1EProps extends TypographyH1Props {
  extra?: string; // Optional
  sign?: string; // Optional
}

export function TypographyH1({ text, className }: TypographyH1Props) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
      {text}
    </h1>
  );
}

export function TypographyH1S({ text, className, extra = "" }: TypographyH1SProps) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
      <span className="text-sky_blue">{extra}</span>
      {text}
    </h1>
  );
}

export function TypographyH1E({ text, className, extra = "", sign = "" }: TypographyH1EProps) {
  return (
    <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
      {text}
      <span className="text-sky_blue">{extra}</span>
      <span>{sign}</span>
    </h1>
  );
}

export function TypographyP({ text, className }: TypographyH1Props) {
  return (
    <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {text}
    </p>
  );
}

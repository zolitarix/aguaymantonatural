import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  as = "h2",
}: Props) {
  const Heading = as;
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className={cn("eyebrow", tone === "light" && "text-gold-soft")}>
          <span
            className={cn(
              "h-px w-8",
              tone === "light" ? "bg-gold-soft" : "bg-leaf",
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      ) : null}
      <Heading
        className={cn(
          "mt-4 text-3xl leading-[1.15] text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "light"
              ? "text-primary-foreground/80"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

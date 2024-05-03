import Link from "next/link";

interface Props {
  text?: string;
  year?: number;
  creation?: string;
  creationText?: string;
  creationUrl?: string;
  creationPrefix?: string;
  creationSuffix?: string;
  lineHeight?: number;
  skipPoint?: boolean;
}

export default function JourneyPoint({
  text = "",
  year = -1,
  creation = "",
  creationText = "",
  creationUrl = "",
  creationPrefix = "",
  creationSuffix = "",
  lineHeight = 500,
  skipPoint = false,
}: Props) {
  return (
    <div className="xs:w-[90%] flex flex-col items-center justify-center animation-150 mt-[10px] w-full">
      {year != -1 && (
        <h1 className="xs:text-base border-2 border-foreground/10 rounded-full p-0.5 pl-2 pr-2 font-black text-lg mb-1 tracking-tight">
          {year}
        </h1>
      )}

      {creation ? (
        <h1 className="xs:text-base font-medium text-lg mb-1 tracking-tight">
          {text} {creationText ? creationText : "Created"}{" "}
          {creationPrefix ? `${creationPrefix} ` : ""}
          <Link href={creationUrl} target="_blank">
            {creation}
          </Link>{" "}
          {creationSuffix ? `${creationSuffix} ` : ""}
        </h1>
      ) : (
        <h1 className="xs:text-base font-medium text-lg mb-1 tracking-tight">
          {text}
        </h1>
      )}

      {!skipPoint && (
        <div className="xs:w-[20px] xs:h-[20px] w-[25px] h-[25px] rounded-full border-2 border-[hsl(var(--foreground))]" />
      )}

      <div
        className={`xs:max-h-[300px] bg-[hsl(var(--foreground))] w-[2px]`}
        style={{
          height: lineHeight,
        }}
      />
    </div>
  );
}

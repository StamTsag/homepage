import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="bg-background m-auto w-full pr-0 pl-0 h-[64px] max-h-[64px] p-4 select-none">
      <Separator />

      <div className="flex items-center justify-center pt-2 pb-2">
        <h1 className="mobile:text-sm font-medium text-md">
          © Stamatis Tsagkliotis 2024
        </h1>
      </div>
    </div>
  );
}

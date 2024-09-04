import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-3 gap-9 max-w-8xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento z-20 hover:shadow-xl transition hover:translate-y-[-10px] duration-200 shadow-input dark:shadow-none p-4 bg-black dark:border-white/[0.2] border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
       <div className="transition hover:translate-x-2">
       <div className="text-[1.5rem] font-bold text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className=" font-normal text-neutral-400 text-xs ">
          {description}
        </div>
       </div>
        
      </div>
  );
};
export default BentoGrid
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";

import { cn } from "@/lib/utils";

const SelectContext = React.createContext<{ maxItems?: number }>({});

function BraydonSelect({
  maxItems,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root> & {
  maxItems?: number;
}) {
  return (
    <SelectContext.Provider value={{ maxItems }}>
      <SelectPrimitive.Root data-slot="select" {...props} />
    </SelectContext.Provider>
  );
}

function BraydonSelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function BraydonSelectValue({
  placeholder,
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <div className={cn("flex flex-col items-start space-y-0", className)}>
      <SelectPrimitive.Value data-slot="select-value-label" placeholder="">
        Laracon
      </SelectPrimitive.Value>
      <SelectPrimitive.Value
        data-slot="select-value"
        placeholder={placeholder}
        className="font-inter font-semibold text-base leading-6 tracking-[-0.02em] text-white data-[placeholder]:font-semibold data-[placeholder]:text-base data-[placeholder]:leading-6 data-[placeholder]:tracking-[-0.02em]"
        {...props}
      />
    </div>
  );
}

function BraydonSelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default";
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "font-inter text-white font-semibold text-base leading-6 tracking-[-0.02em] data-[placeholder]:text-white [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex w-fit items-center justify-between gap-2 rounded-[12px] px-4 py-2 whitespace-nowrap shadow-select-trigger outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-12 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 relative data-[placeholder]:pl-4 [&:not([data-placeholder])]:pl-11",
        className
      )}
      {...props}
    >
      <span className="checkmark-icon absolute left-4 size-4 items-center justify-center flex">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_41)">
            <path
              d="M0.630837 8.59577L3.68274 11.543L11.5244 2.4047"
              className="stroke-emerald-500"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_41">
              <rect
                width="12"
                height="12"
                className="fill-white"
                transform="translate(0 1.10562) rotate(-1)"
              />
            </clipPath>
          </defs>
        </svg>
      </span>
      {children}
      <SelectPrimitive.Icon asChild>
        <svg
          className="size-[11px] select-trigger-arrows"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="transition-transform duration-200 ease-in-out stroke-emerald-500"
            style={{ transformOrigin: "6px 8.5px" }}
            d="M9.5 8.5L6 11.5L2.5 8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            className="transition-transform duration-200 ease-in-out stroke-emerald-500"
            style={{ transformOrigin: "6px 3.5px" }}
            d="M2.5 3.5L6 0.5L9.5 3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function BraydonSelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  const { maxItems } = React.useContext(SelectContext);

  const limitedChildren = React.useMemo(() => {
    if (!maxItems) return children;

    const childrenArray = React.Children.toArray(children);
    return childrenArray.slice(0, maxItems);
  }, [children, maxItems]);

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-visible bg-transparent",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-px",
            position === "popper" &&
              "w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          <div className="bg-black rounded-[12px] border border-white/10 overflow-hidden">
            {limitedChildren}
          </div>
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function BraydonSelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
}

function BraydonSelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const [itemId] = React.useState(() =>
    Math.random().toString(36).substr(2, 9)
  );

  React.useEffect(() => {
    if (itemRef.current) {
      const parent = itemRef.current.parentElement;
      if (parent) {
        const index = Array.from(parent.children).indexOf(itemRef.current) + 1;
        itemRef.current.style.setProperty("--item-index", index.toString());
      }
    }
  }, []);

  return (
    <SelectPrimitive.Item
      ref={itemRef}
      data-slot="select-item"
      className={cn(
        "font-inter text-white font-semibold text-base leading-6 tracking-[-0.02em] group relative flex cursor-default items-center py-2 pl-4 pr-4 outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 w-[var(--radix-select-trigger-width)] h-12 hover:bg-white/5 focus:bg-white/5 data-[highlighted]:bg-white/5",
        className
      )}
      {...props}
    >
      <div className="flex items-center w-full">
        <span className="flex size-4 items-center justify-center mr-3 flex-shrink-0 relative">
          <svg
            className="size-4 absolute opacity-0 invisible group-data-[state=checked]:opacity-100 group-data-[state=checked]:visible"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath={`url(#clip0_1_41_${itemId})`}>
              <path
                d="M0.630837 8.59577L3.68274 11.543L11.5244 2.4047"
                className="stroke-emerald-500"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id={`clip0_1_41_${itemId}`}>
                <rect
                  width="12"
                  height="12"
                  className="fill-white"
                  transform="translate(0 1.10562) rotate(-1)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="size-4 absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible group-data-[highlighted]:opacity-100 group-data-[highlighted]:visible group-data-[state=checked]:opacity-0 group-data-[state=checked]:invisible"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath={`url(#clip0_1_41_hover_${itemId})`}>
              <path
                d="M0.630837 8.59577L3.68274 11.543L11.5244 2.4047"
                className="stroke-ring/50"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id={`clip0_1_41_hover_${itemId}`}>
                <rect
                  width="12"
                  height="12"
                  className="fill-white"
                  transform="translate(0 1.10562) rotate(-1)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <SelectPrimitive.ItemText className="flex-1">
          {children}
        </SelectPrimitive.ItemText>
      </div>
    </SelectPrimitive.Item>
  );
}

function BraydonSelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

export {
  BraydonSelect,
  BraydonSelectContent,
  BraydonSelectGroup,
  BraydonSelectItem,
  BraydonSelectLabel,
  BraydonSelectSeparator,
  BraydonSelectTrigger,
  BraydonSelectValue,
};

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TaskPriorityEnum, TaskStatusEnum } from "@/constant";

// ----------------------------------------------------
// SAFEST FIX:
// Create a merged Priority Enum that ALWAYS contains URGENT
// (This removes TS errors even if backend enum misses it)
// ----------------------------------------------------
const Priority = {
  LOW: TaskPriorityEnum.LOW,
  MEDIUM: TaskPriorityEnum.MEDIUM,
  HIGH: TaskPriorityEnum.HIGH,
  URGENT: (TaskPriorityEnum as any).URGENT ?? "URGENT",
} as const;

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",

        // Task Status Styles
        [TaskStatusEnum.BACKLOG]: "bg-gray-100 text-gray-600",
        [TaskStatusEnum.TODO]: "bg-[#DEEBFF] text-[#0052CC]",
        [TaskStatusEnum.IN_PROGRESS]: "bg-yellow-100 text-yellow-600",
        [TaskStatusEnum.IN_REVIEW]: "bg-purple-100 text-purple-500",
        [TaskStatusEnum.DONE]: "bg-green-100 text-green-600",

        // Task Priority Styles
        [Priority.HIGH]: "bg-orange-100 text-orange-600",
        [Priority.URGENT]: "bg-red-100 text-red-600",
        [Priority.MEDIUM]: "bg-yellow-100 text-yellow-600",
        [Priority.LOW]: "bg-gray-100 text-gray-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { badgeVariants };

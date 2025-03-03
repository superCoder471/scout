import { Button } from "./button"
import { GetVariantProps, vs } from "@vtechguys/vs"
import { cn } from "@/lib/utils"
import clsx from "clsx"
import { Check, X } from "lucide-react"

export const toggleVariants = vs({
    base: "rounded dark:text-neutral-300 text-left flex justify-between",
    variants: {
        variant: {
            default: "",
        },
        size: {
            default: "w-full px-3 py-2",
        },
    },
    defaultVariants: {
        size: "default",
        variant: "default",
    },
})

export const Toggle = ({
    children,
    value,
    setValue,
    variant,
    size,
}: {
    children: React.ReactNode
    value: boolean
    setValue: (value: boolean) => void
} & GetVariantProps<typeof toggleVariants>) => {
    return (
        <Button
            onClick={() => setValue(!value)}
            className={cn(
                clsx(toggleVariants({ variant, size })),
                `${value ? "dark:bg-cool-green/25 dark:hover:bg-cool-green/35" : "dark:bg-neutral-900 dark:hover:bg-neutral-900/50"}`
            )}
        >
            <div>{children}</div>
            {value ? <Check /> : <X />}
        </Button>
    )
}

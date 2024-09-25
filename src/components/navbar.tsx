'use client'

import * as React from "react"
import Link from "next/link"
import { Menu, ShoppingCart, Calendar } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navItems = [
  { title: "Chi Siamo", href: "/about" },
  { title: "Marchi", href: "/marchi" },
  { title: "Shop", href: "/shop" },
  { title: "Ricondizionati", href: "/refurbished" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
		<header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-8">
			<div className="flex h-20 items-center">
				<div className="hidden md:flex w-full">
					<Link href="/" className="flex items-center">
						<span className="hidden font-bold sm:inline-block">
							HiFi
						</span>
					</Link>
					<nav className="flex items-center text-sm font-medium w-full justify-evenly">
						{navItems.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className="transition-colors hover:text-foreground/80 text-foreground/60">
								{item.title}
							</Link>
						))}
					</nav>
				</div>
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
							<Menu className="h-5 w-5" />
							<span className="sr-only">Toggle Menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="left" className="pr-0">
						<MobileLink
							href="/"
							className="flex items-center"
							onOpenChange={setIsOpen}>
							<span className="font-bold">HiFi</span>
						</MobileLink>
						<div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
							<div className="flex flex-col">
								{navItems.map((item, index) => (
									<MobileLink
										key={index}
										href={item.href}
										onOpenChange={setIsOpen}>
										{item.title}
									</MobileLink>
								))}
							</div>
						</div>
					</SheetContent>
				</Sheet>
				<div className="flex md:hidden w-full justify-center">
					<Link href="/" className="flex items-center">
						<span className=" font-bold sm:inline-block">HiFi</span>
					</Link>
				</div>
				<div className="flex flex-1 items-center justify-between md:justify-end">
					<div className="w-full flex-1 md:w-auto md:flex-none">
						{/* Add search functionality here if needed */}
					</div>
					<nav className="flex items-center">
						<Link href="/cart">
							<Button
								variant="ghost"
								size="icon"
								aria-label="Cart">
								<ShoppingCart className="h-5 w-5" />
							</Button>
						</Link>
						<Link href="/appuntamenti">
							<Button
								variant="ghost"
								size="icon"
								aria-label="Appuntamenti">
								<Calendar className="h-5 w-5" />
							</Button>
						</Link>
					</nav>
				</div>
			</div>
		</header>
  );
}

interface MobileLinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
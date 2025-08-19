import type { ReactNode } from 'react'

type ContactButtonProps = {
	children: ReactNode
	href?: string
	onClick?: () => void
	ariaLabel?: string
	className?: string
}

function ContactButton({ children, href, onClick, ariaLabel, className }: ContactButtonProps) {
	const baseClasses = [
		'group inline-flex items-center gap-2 px-6 py-3 rounded-full',
		'bg-gradient-to-r from-[var(--color-denim-100)] via-[var(--color-ming-100)] to-[var(--color-warm-100)]',
		'font-light tracking-wide text-white',
		'shadow transition-all duration-300 hover:brightness-110',
		'focus:outline-none focus:ring-2 focus:ring-[var(--color-ming-100)]/50',
		'relative overflow-hidden'
	].join(' ')

	const content = (
		<span className="inline-flex items-center gap-2">
			<span>{children}</span>
			<svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
			{/* Shine overlay */}
			<span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent blur-[2px] transition-transform duration-700 group-hover:translate-x-full" />
		</span>
	)

	if (href) {
		return (
			<a href={href} className={`${baseClasses} ${className ?? ''}`} aria-label={ariaLabel}>
				{content}
			</a>
		)
	}

	return (
		<button type="button" onClick={onClick} className={`${baseClasses} ${className ?? ''}`} aria-label={ariaLabel}>
			{content}
		</button>
	)
}

export default ContactButton



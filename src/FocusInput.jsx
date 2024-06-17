import { useEffect, useRef } from 'react'

export function FocusInput() {
	const inputRef = useRef()

	useEffect(() => {
		inputRef.current?.focus()
	}, [])

	return (
		<div>
			<input name="one" ref={inputRef} />
		</div>
	)
}
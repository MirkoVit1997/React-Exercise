import { useEffect, useRef } from 'react'

export function PrintEffect() {
	const ref = useRef()

	useEffect(() => {
		if (!ref.current) {
			ref.current = true

			console.log('First render')
		}
	})

	return (
		<div>
			<p>Print my effect</p>
		</div>
	)
}
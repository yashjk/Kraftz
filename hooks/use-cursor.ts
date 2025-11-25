"use client";

import { useState, useEffect, useRef } from "react";

export function useCursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const rafIdRef = useRef<number | null>(null);
	const lastUpdateRef = useRef(0);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			const now = performance.now();
			// Throttle updates to ~60fps to prevent excessive re-renders
			if (now - lastUpdateRef.current >= 16) {
				// Cancel any pending RAF
				if (rafIdRef.current !== null) {
					cancelAnimationFrame(rafIdRef.current);
				}

				// Schedule update in next frame
				rafIdRef.current = requestAnimationFrame(() => {
					setMousePosition({ x: e.clientX, y: e.clientY });
					lastUpdateRef.current = performance.now();
					rafIdRef.current = null;
				});
			}
		};

		const handleMouseEnter = () => setIsHovering(true);
		const handleMouseLeave = () => setIsHovering(false);

		window.addEventListener("mousemove", updateMousePosition);
		document.addEventListener("mouseenter", handleMouseEnter);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
			document.removeEventListener("mouseenter", handleMouseEnter);
			document.removeEventListener("mouseleave", handleMouseLeave);
			if (rafIdRef.current !== null) {
				cancelAnimationFrame(rafIdRef.current);
			}
		};
	}, []);

	return { mousePosition, isHovering };
}

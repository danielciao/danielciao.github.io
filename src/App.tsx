import { useCallback, useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);

	const increment = useCallback(() => {
		setCount((current) => current + 1);
	}, []);

	return (
		<main className="shell">
			<h1>Hello World</h1>

			<button type="button" onClick={increment}>
				clicked {count} {count === 1 ? "time" : "times"}
			</button>
		</main>
	);
}

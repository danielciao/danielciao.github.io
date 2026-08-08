import {
	ActionIcon,
	Button,
	Container,
	Group,
	Stack,
	Title,
} from "@mantine/core";
import { RotateCcw } from "lucide-react";
import { useCallback, useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);

	const increment = useCallback(() => {
		setCount((current) => current + 1);
	}, []);

	const reset = useCallback(() => {
		setCount(0);
	}, []);

	return (
		<Container size="sm" py={64}>
			<Stack gap="lg" align="flex-start">
				<Title order={1}>Hello World</Title>

				<Group>
					<Button onClick={increment}>clicked {count} times</Button>
					<ActionIcon
						variant="default"
						size="lg"
						aria-label="Reset counter"
						onClick={reset}
					>
						<RotateCcw size={18} />
					</ActionIcon>
				</Group>
			</Stack>
		</Container>
	);
}

import React, { useState } from "react";
import { useOverrides } from "@quarkly/components";
import { Input, Button, Box } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"input": {
		"kind": "Input",
		"props": {}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Добавить"
		}
	}
};

const ToDoForm = ({
	addTask,
	...props
}) => {
	const [userInput, setUserInput] = useState('');

	const handleChange = e => {
		setUserInput(e.currentTarget.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		addTask(userInput);
		setUserInput("");
	};

	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Input {...override("input")} value={userInput} type="text" onChange={handleChange} />
		<Button {...override("button")} onClick={handleSubmit} />
		{children}
	</Box>;
};

Object.assign(ToDoForm, { ...Box,
	defaultProps,
	overrides
});
export default ToDoForm;
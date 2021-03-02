import React from 'react';
import atomize from "@quarkly/atomize";
import ToDo from "./ToDo";
import { useOverrides } from "@quarkly/components";
import { Box } from '@quarkly/widgets';
const overrides = {
	"todo": {
		"kind": "Li"
	}
};
const List = atomize.ul();

const ToDoList = ({
	toDoList,
	deleteTask,
	handleToggle,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <List {...rest}>
		      
		{toDoList.map(todo => <ToDo
			key={todo.id}
			{...override("todo", "todo" + todo.id)}
			todo={todo}
			deleteTask={deleteTask}
			handleToggle={handleToggle}
		/>)}
		    
	</List>;
};

export default Object.assign(ToDoList, {
	propInfo: {
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});
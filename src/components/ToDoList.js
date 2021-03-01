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
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <List {...rest}>
		      
		{toDoList.map(todo => <ToDo key={todo.id} {...override("todo", "todo" + todo.id)} todo={todo} />)}
		    
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
import React, { useState } from 'react';
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";
import { Box, Text, Input, Button } from '@quarkly/widgets';
const overrides = {
	"List": {
		"kind": "List"
	},
	"Item": {
		"kind": "Item"
	},
	"Task": {
		"kind": "Task"
	},
	"Input": {
		"kind": "Input"
	},
	"Button": {
		"kind": "Button",
		"props": {
			"children": "Добавить"
		}
	},
	"Form": {
		"kind": "Box"
	}
};
const data = [{
	"id": 1,
	"task": "Give dog a bath",
	"complete": true
}, {
	"id": 2,
	"task": "Do laundry",
	"complete": true
}, {
	"id": 3,
	"task": "Vacuum floor",
	"complete": false
}, {
	"id": 4,
	"task": "Feed cat",
	"complete": true
}, {
	"id": 5,
	"task": "Change light bulbs",
	"complete": false
}];
const List = atomize.ul();
const Item = atomize.li();
const Task = atomize.span();

const MyTodoTest = props => {
	const [toDoList, setToDoList] = useState(data);
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		      
		<Box {...override('Form')}>
			        
			<Input {...override("Input")} />
			    
			<Button {...override("Button")} />
			      
		</Box>
		      
		<List {...override('List')}>
			        
			{toDoList.map(todo => <Item key={`todo-item-${todo.id}`} {...override('Item', `Item ${todo.id}`)}>
				            
				<Task key={`todo-task-${todo.id}`} {...override('Task', `Task ${todo.id}`)}>
					              
					{todo.task}
					            
				</Task>
				          
			</Item>)}
			      
		</List>
		    
	</Box>;
};

export default Object.assign(MyTodoTest, {
	propInfo: {
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});
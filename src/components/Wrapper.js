import React, { useState } from 'react';
import atomize from "@quarkly/atomize";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import { useOverrides } from "@quarkly/components";
import { Box } from '@quarkly/widgets';
const overrides = {
	"todolist": {
		"kind": "List"
	},
	"todoform": {
		"kind": "Box",
		"props": {
			"text-align": "center"
		}
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
}, {
	"id": 6,
	"task": "Go to Store",
	"complete": true
}, {
	"id": 7,
	"task": "Fill gas tank",
	"complete": true
}, {
	"id": 8,
	"task": "Change linens",
	"complete": false
}, {
	"id": 9,
	"task": "Rake leaves",
	"complete": true
}, {
	"id": 10,
	"task": "Bake Cookies",
	"complete": false
}, {
	"id": 11,
	"task": "Take nap",
	"complete": true
}, {
	"id": 12,
	"task": "Read book",
	"complete": true
}, {
	"id": 13,
	"task": "Exercise",
	"complete": false
}, {
	"id": 14,
	"task": "Give dog a bath",
	"complete": false
}, {
	"id": 15,
	"task": "Do laundry",
	"complete": false
}, {
	"id": 16,
	"task": "Vacuum floor",
	"complete": false
}, {
	"id": 17,
	"task": "Feed cat",
	"complete": true
}, {
	"id": 18,
	"task": "Change light bulbs",
	"complete": false
}, {
	"id": 19,
	"task": "Go to Store",
	"complete": false
}, {
	"id": 20,
	"task": "Fill gas tank",
	"complete": false
}];

const Wrapper = props => {
	const [toDoList, setToDoList] = useState(data);

	const addTask = userInput => {
		let copy = [...toDoList];
		copy = [...copy, {
			id: toDoList.length + 1,
			task: userInput,
			complete: false
		}];
		setToDoList(copy);
	};

	const deleteTask = e => {
		e.prevent.default();
		console.log("Работает");
	};

	const doneTask = e => {
		e.prevent.default();
		console.log("Работает");
	};

	const importantTask = e => {
		e.prevent.default();
		console.log("Работает");
	};

	const {
		override
	} = useOverrides(props, overrides);
	return <Box {...props}>
		      
		<ToDoForm {...override("todoform")} addTask={addTask} />
		      
		<ToDoList {...override("todolist")} toDoList={toDoList} deleteTask={deleteTask} />
		    
	</Box>;
};

export default Object.assign(Wrapper, {
	propInfo: {
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});
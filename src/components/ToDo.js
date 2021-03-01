import React from 'react';
import { Text, Link } from "@quarkly/widgets";
import { useOverrides } from "@quarkly/components";
import atomize from "@quarkly/atomize";
const overrides = {
	"text": {
		"kind": "Text",
		"props": {
			"text-transform": "uppercase",
			"color": "--dark1",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"font": "--headline3"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"text-transform": "uppercase",
			"color": "--dark1",
			"text-align": "center",
			"margin": "10px 10px 10px 10px",
			"font-size": "10px"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"text-transform": "uppercase",
			"color": "--dark1",
			"text-align": "center",
			"margin": "10px 10px 10px 10px",
			"font-size": "10px"
		}
	},
	"link3": {
		"kind": "Link",
		"props": {
			"text-transform": "uppercase",
			"color": "--dark1",
			"text-align": "center",
			"margin": "10px 10px 10px 10px",
			"font-size": "10px"
		}
	}
};
const Item = atomize.li();

const ToDo = ({
	todo,
	...props
}) => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	return <div {...rest}>
		       
		<Item {...override("text", "todo" + todo.id)}>
			  
        
			<Link {...override("link1")}>
				Удалить
			</Link>
			        
			<Link {...override("link2")}>
				Избранное
			</Link>
			        
			<Link {...override("link3")}>
				Выполненно
			</Link>
			        
			{todo.task}
			        
      
		</Item>
		     
       
	</div>;
};

export default atomize(ToDo)({
	name: "ToDo",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "ToDo — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});
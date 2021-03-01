import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Wrapper>
			<Override slot="todolist" text-align="left" list-style-type="none" padding="0px 0px 0px 0px">
				<Override slot="todo">
					<Override slot="todo1">
						Give dog a bath{" "}
					</Override>
					<Override slot="todo2">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Do laundry
					</Override>
					<Override slot="todo3">
						Vacuum floor{" "}
					</Override>
					<Override slot="text" text-align="left" font="500 14px/10px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif" />
					<Override slot="todo6">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						Go to Store
					</Override>
					<Override slot="todo4">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						Feed cat
					</Override>
					<Override slot="link3">
						Выполненно
					</Override>
					<Override slot="todo8">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Change linens
					</Override>
					<Override slot="todo10">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Bake Cookies
					</Override>
					<Override slot="todo7">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						Fill gas tank
					</Override>
					<Override slot="link2">
						Избранное
					</Override>
					<Override slot="link1" background="rgba(0, 0, 0, 0) url() 0% 0% /auto repeat scroll padding-box">
						Удалить
					</Override>
					<Override slot="todo9">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Rake leaves
					</Override>
					<Override slot="todo11">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Take nap
					</Override>
					<Override slot="todo18">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Change light bulbs
					</Override>
					<Override slot="todo5">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						/>
						Change light bulbs
					</Override>
					<Override slot="todo12">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Read book
					</Override>
					<Override slot="todo14">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Give dog a bath
					</Override>
					<Override slot="todo15">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Do laundry
					</Override>
					<Override slot="todo13">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Exercise
					</Override>
					<Override slot="todo16">
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Удалить
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Избранное
						</Link>
						<Link
							text-transform="uppercase"
							color="--dark1"
							text-align="center"
							margin="10px 10px 10px 10px"
							font-size="10px"
							data-qkind="Link"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Выполненно
						</Link>
						Vacuum floor
					</Override>
				</Override>
			</Override>
			<Override slot="todoform" text-align="left">
				<Override slot="input" placeholder="Add task" />
				<Override slot="button">
					Add
				</Override>
			</Override>
		</Components.Wrapper>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});
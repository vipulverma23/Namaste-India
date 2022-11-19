import { makeStyles } from "@material-ui/core";
import { red, green, blue } from "@material-ui/core/colors/";

const useStyles = makeStyles((theme) => ({
	card: {
		margin: "10px",
		padding: "10px",
		width: "380px",
	},
	break: {
		margin: "20px",
	},
	del: {
		backgroundColor: red[500],
		color: "white",
		margin: "10px 10px 0 0",
	},
	edit: {
		backgroundColor: green[500],
		color: "white",
		margin: "10px 10px 0 0",
	},
	main: {
		overflowY: "scroll",
		height: "400px",
	},
}));

export default useStyles;

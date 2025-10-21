import styles from './ProgressBar.module.css';
import PropTypes from "prop-types";

const clamp = (n) => Math.max(0, Math.min(n ?? 0, 100));

const ProgressBar = ({ value = 0, showLabel = true }) => {
	const v = clamp(Number(value));
	console.log("[Progress props", { value, v, showLabel }) // spårar props

	return (
		<div
		style={{ display: "flex", 
		alignItems: "center",
		gap: 8
		}}>
			<div
			role="progressbar"
			aria-label="Förlopp"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={v}
			aria-valuetext={`${v} procent`}
			style={{
				width: 320,
				height: 12,
				background: "#e5e7eb",
				borderRadius: 9999,
				overflow: "hidden",
				boxShadow: "inset 0 0 0 1px #d1d5db",
			}}
			/>
			{showLabel && (
				<span style={{ fontSize: 12}} aria-hidden="true">
					{v}%
				</span>
			)}
		</div>
	);
};

Progress.propTypes = {
	value: PropTypes.number,
	showLabel: PropTypes.bool,
}

export default ProgressBar;

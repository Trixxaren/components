import ProgressBar from './ProgressBar';
import { useState } from 'react'

export default {
	title: "Components/ProgressBar",
	component: ProgressBar,

};

export const Default = () => {

	const [value, setValue] = useState (40);

	const add = (n) => setValue((v) => Math.max(0, Math.min(100, v + n)));

	
	return (
		<div style={{
			padding: 24, 
			fontFamily: "system-ui, sans-serif"
		}}>
			<h1 style={{ marginBottom: 12 }}>Enkel Progressbar</h1>

      <ProgressBar value={value} showLabel />

      <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
		<input 
		type="range"
		min={0}
		max={100}
		value={value}
		onChange={(e) => setValue(Number(e.target.value))}
		style={{accentColor: "blue"}}
		/>
		<span style={{ width: 40, textAlign: "right" }}>{value}%</span>
		<button onClick={() => add(-50)}>-50</button>
		<button onClick={() => add(-10)}>-10</button>
		<button onClick={() => add(-1)}>-1</button>
		<button onClick={() => add(1)}>1</button>
		<button onClick={() => add(10)}>+10</button>
		<button onClick={() => add(50)}>+50</button>
		<button onClick={() => setValue(0)}>Reset</button>
		</div>
		</div>
	);
};


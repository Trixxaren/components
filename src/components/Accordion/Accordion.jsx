import styles from './Accordion.module.css';

const Accordion = (props) => {
	return (
		<div>
		<h2>Accordion</h2>

		<button className={styles.accordion}>Section 1</button>
		<div className={styles.panel}
		<p>React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage their state efficiently.</p>
		</div>
	)
};

export default Accordion;

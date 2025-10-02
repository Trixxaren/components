import styles from './User.module.css';

const User = ({name, age, email }) => {
	return (
		<div className={styles.userCard}>
			<h3 className={styles.userName}>{name}</h3>
			<p className={styles.userText}>Ålder: {age}</p>
			<p className={styles.userText}>E-post: {email}</p>
		</div>
	);
};

const users = [
	{ id: "Robin", name:"Robin", age: 32, email:"robin.vikstrom@hello.se" },
	{ id: "Emma", name:"Emma", age: 29, email:"emma.hoff@hello.se" },
	{ id: "Alfons", name:"Alfons", age: 5, email:"Alfons@hello.se" },
];

const App = () => {
	return (
		<div className={styles.app}>
		{users.map(u => (
			<User key={u.id} name={u.name} age={u.age} email={u.email} />
		))}
		</div>
	);
};

export default App;



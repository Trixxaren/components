import styles from './JobInfo.module.css';

const Job = ({ position, company, salary }) => (
  <div className={styles.JobCard}>
    <div className={styles.JobBox}>
      <span className={styles.Label}>Position:</span> {position}
    </div>
    <div className={styles.JobBox}>
      <span className={styles.Label}>Company:</span> {company}
    </div>
    <div className={styles.JobBox}>
      <span className={styles.Label}>Salary:</span> {Number(salary).toLocaleString('sv-SE', { maximumFractionDigits: 0 })} kr
    </div>
  </div>
);

const JobInfo = () => (
  <div className={styles.JobInfo}>
    <Job salary={9000}  position="Junior Developer"  company="Amazon" />
    <Job salary={12000} position="Senior Developer"  company="Google" />
    <Job salary={15000} position="Project Manager"   company="Netflix" />
  </div>
);

export default JobInfo;
// Om du vill återanvända Job i andra filer kan du också exportera den:
export { Job };


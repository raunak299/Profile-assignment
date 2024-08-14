import styles from "./PageHeader.module.css";

function PageHeader(props: { label: string }): JSX.Element {
  return <h1 className={styles.pageHeader}>{props.label}</h1>;
}

export default PageHeader;

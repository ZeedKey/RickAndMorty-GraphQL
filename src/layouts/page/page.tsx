import { Footer } from "@common";
import { HeaderLayout } from "@layouts";
import styles from "./page.module.scss";

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <HeaderLayout />
      {children}
      <Footer />
    </div>
  );
};

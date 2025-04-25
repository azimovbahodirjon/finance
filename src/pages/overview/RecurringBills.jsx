import { NavLink } from "react-router-dom";

function RecurringBills() {
  const styles = {
    card: {
      padding: "28px",
      paddingBottom: "22px",
      borderRadius: "16px",
      backgroundColor: "#FFF",
      width: "428px",
      height: "410px",
    },
    navTitle: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "28px",
    },
    title: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#1A1A1A",
      margin: 0,
      lineHeight: "32px",
    },
    navLink: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "#666",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "22px",
    },
    billsInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "32px",
    },
    billItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 24px",
      borderRadius: "10px",
      fontSize: "20px",
      backgroundColor: "#FAFAFA",
      borderLeft: "6px solid",
      lineHeight: "24px",
    },
    billLabel: {
      display: "flex",
      alignItems: "center",
      color: "#333",
      fontWeight: "600",
    },
    amount: {
      fontWeight: "700",
      color: "#1A1A1A",
    },
  };

  return (
    <div style={styles.card}>
      <span style={styles.navTitle}>
        <h3 style={styles.title}>Recurring Bills</h3>
        <NavLink style={styles.navLink} to="/recurringBills">
          See Details
          <img
            src="./icon-caret-right.svg"
            alt=""
            style={{ marginLeft: "8px", width: "16px", height: "16px" }}
          />
        </NavLink>
      </span>
      <div style={styles.billsInfo}>
        <div
          style={{
            ...styles.billItem,
            borderLeftColor: "#4CAF50",
          }}
        >
          <span style={styles.billLabel}>Paid Bills</span>
          <span style={styles.amount}>$190.00</span>
        </div>
        <div
          style={{
            ...styles.billItem,
            borderLeftColor: "#FFCC80",
          }}
        >
          <span style={styles.billLabel}>Total Upcoming</span>
          <span style={styles.amount}>$194.98</span>
        </div>
        <div
          style={{
            ...styles.billItem,
            borderLeftColor: "#42A5F5",
          }}
        >
          <span style={styles.billLabel}>Due Soon</span>
          <span style={styles.amount}>$59.98</span>
        </div>
      </div>
    </div>
  );
}

export default RecurringBills;

import { NavLink } from "react-router-dom";
import { useCollectionsData } from "../../hooks/useCollectionsData";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getAvatar = (rawPath) => {
  if (!rawPath) return "/images/avatars/default-avatar.jpg";
  const fileName = rawPath.split("/").pop();
  return `/images/avatars/${fileName}`;
};

function Transactions() {
  const { data } = useCollectionsData();

  if (!data || !Array.isArray(data.transactions)) return null;

  return (
    <div className="card">
      <span className="nav-title">
        <h3>Transactions</h3>
        <NavLink className="NavLink" to="/transactions">
          View All
          <img src="/images/icon-caret-right.svg" alt="→" />
        </NavLink>
      </span>
      <div className="over-tran-menu">
        {data.transactions.slice(0, 5).map((t, i) => (
          <div className="transactions-nav" key={i}>
            <span className="transac-span">
              <img
                src={getAvatar(t.avatar)}
                alt={t.name}
                width={40}
                height={40}
                onError={(e) => {
                  e.currentTarget.src = "/images/avatars/default-avatar.png";
                }}
              />
              <p>{t.name}</p>
            </span>
            <span>
              <h3 style={{ color: t.amount < 0 ? "#000" : "#277c78" }}>
                {t.amount < 0 ? `-$${Math.abs(t.amount)}` : `$${t.amount}`}
              </h3>
              <h4>{formatDate(t.date)}</h4>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;

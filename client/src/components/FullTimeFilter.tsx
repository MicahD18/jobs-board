import { ChangeEvent } from "react";

interface FilterProps {
  handleFullTimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fullTimeOnly: boolean;
}

const FullTimeFilter: React.FC<FilterProps> = ({
  handleFullTimeChange,
  fullTimeOnly,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100px",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        className="custom-checkbox"
        checked={fullTimeOnly}
        onChange={handleFullTimeChange}
        style={{
          width: "18px",
          height: "18px",
          cursor: "pointer",
        }}
      />
      <label
        htmlFor="checkbox"
        style={{
          marginLeft: "0px",
          fontFamily: "Kumbh Sans",
          fontSize: "14px",
          color: "var(--text-color)",
        }}
      >
        Full Time
      </label>
    </div>
  );
};

export default FullTimeFilter;

import styles from "./style.module.css";

export const SearchByMakerFields = () => {
  // TODO: From RESTAPI sort by model and show them on screen
  const mockdata = [
    {
      label: "Makers of Vehicle",
      options: [
        { label: "Search by Maker" },
        { label: "BMW" },
        { label: "Mercedes" },
        { label: "Audi" },
        { label: "Opel" },
      ],
    },
    {
      label: "Makers of Vehicle",
      options: [
        { label: "Search by Maker" },
        { label: "BMW" },
        { label: "Mercedes" },
        { label: "Audi" },
        { label: "Opel" },
      ],
    },
    {
      label: "Makers of Vehicle",
      options: [
        { label: "Search by Maker" },
        { label: "BMW" },
        { label: "Mercedes" },
        { label: "Audi" },
        { label: "Opel" },
      ],
    },
    {
      label: "Makers of Vehicle",
      options: [
        { label: "Search by Maker" },
        { label: "BMW" },
        { label: "Mercedes" },
        { label: "Audi" },
        { label: "Opel" },
      ],
    },
    {
      label: "Makers of Vehicle",
      options: [
        { label: "Search by Maker" },
        { label: "BMW" },
        { label: "Mercedes" },
        { label: "Audi" },
        { label: "Opel" },
      ],
    },
  ];

  return (
    <div className={styles.fields_container}>
      {mockdata.map((item) => (
        // TODO: change the key
        <div className={styles.field} key={item.label}>
          <label className={styles.field_label}>{item.label}</label>
          <select className={styles.field_type}>
            {item.options.map((option, index) => (
              <option
                className={styles.field_option}
                key={index}
                value={option.label}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

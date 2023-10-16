type statusProps = { status: "loading" | "success" | "error" };

const Stats = (props: statusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data Fetching Successfully";
  } else if (props.status === "error") {
    message = "Error Fetching";
  }
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Stats;

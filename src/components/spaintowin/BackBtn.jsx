import backBtn from "../../assets/arrow-back.svg";

const BackBtn = ({ handleBack }) => {
  return (
    <div className="back_btn p-5 pb-0">
      <button onClick={handleBack}>
        <img src={backBtn} alt="back-btn" />
      </button>
    </div>
  );
};

export default BackBtn;

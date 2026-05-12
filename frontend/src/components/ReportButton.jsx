import jsPDF from "jspdf";

function ReportButton() {
  const downloadReport = () => {
    try {
      const result = JSON.parse(
        localStorage.getItem(
          "predictionResult"
        )
      ) || {};

      const doc = new jsPDF();

      doc.setFontSize(20);
      doc.text(
        "PCOS Health Report",
        20,
        20
      );

      doc.setFontSize(12);

      doc.text(
        `Prediction: ${
          result.prediction === 1
            ? "High Risk"
            : "Low Risk"
        }`,
        20,
        50
      );

      doc.text(
        `Risk Score: ${
          result.probability || 0
        }%`,
        20,
        65
      );

      doc.text(
        `Generated On: ${new Date().toLocaleString()}`,
        20,
        80
      );

      doc.save("PCOS_Report.pdf");
    } catch (error) {
      console.log(error);
      alert("PDF generation failed");
    }
  };

  return (
    <button
      onClick={downloadReport}
      style={buttonStyle}
    >
      Download PDF Report
    </button>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "25px",
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "600",
};

export default ReportButton;
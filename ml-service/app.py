from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)

# Enable CORS
CORS(app)

# Load trained model
model = joblib.load("model.pkl")


@app.route("/")
def home():
    return "PCOS ML API Running"


@app.route("/predict", methods=["POST", "OPTIONS"])
def predict():
    if request.method == "OPTIONS":
        return jsonify({"message": "OK"}), 200

    try:
        data = request.get_json()

        features = np.array([[
            int(data["age"]),
            float(data["weight"]),
            int(data["cycleLength"]),
            int(data["weightGain"]),
            int(data["hairGrowth"]),
            int(data["pimples"])
        ]])

        prediction = model.predict(features)[0]

        probability = model.predict_proba(features)[0][1]

        return jsonify({
            "prediction": int(prediction),
            "probability": round(
                float(probability) * 100,
                2
            )
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5001,
        debug=True
    )
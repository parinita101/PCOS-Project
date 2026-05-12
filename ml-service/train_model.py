import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib

# Load dataset
df = pd.read_excel("PCOS_data_without_infertility.xlsx", sheet_name=1)

# Remove empty column
df = df.drop(columns=["Unnamed: 44"])

# Features we will use
X = df[
    [
        " Age (yrs)",
        "Weight (Kg)",
        "Cycle length(days)",
        "Weight gain(Y/N)",
        "hair growth(Y/N)",
        "Pimples(Y/N)",
    ]
]

# Target
y = df["PCOS (Y/N)"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model
joblib.dump(model, "model.pkl")

print("Model trained successfully")
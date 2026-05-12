import pandas as pd

df = pd.read_excel("PCOS_data_without_infertility.xlsx", sheet_name=1)

print(df.head())
print(df.columns)
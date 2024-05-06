import pandas as pd
import json
# Use double backslashes
# df = pd.read_excel("C:\\Users\\MINT\\Desktop\\project_main\\react_app_13\\myapp\\Python\\Book1.xlsx")

# Or use a raw string
df = pd.read_excel(r"C:/Users/MINT/Desktop/project_main/react_app_13/myapp/Python/Book1.xlsx")

json_data = df.to_json(orient='records')
print(json_data)
json_data1 = json.dumps(json_data)
with open('excel_data.json', 'w') as f:
    f.write(json_data)

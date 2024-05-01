import re
import json
import os

income_expenses = {}

def extract_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    tables = re.findall(r'Table \d+:(.*?)Table \d+:|\Z', content, re.DOTALL)

    for table in tables:
        if "Total income" in table:
            match = re.search(r'Total income\s+(.*?)\s+(.*?)\s+(.*?)\s+(.*?)\s+', table)
            if match:
                income_expenses['Total income'] = match.group(1)

        if "Total assets" in table:
            match = re.search(r'Total assets\s+(.*?)\s+(.*?)\s+(.*?)\s+(.*?)\s+', table)
            if match:
                income_expenses['Total assets'] = match.group(1)

        if "Total equity and liabilities" in table:
            match = re.search(r'Total equity and liabilities\s+(.*?)\s+(.*?)\s+(.*?)\s+(.*?)\s+', table)
            if match:
                income_expenses['Total equity and liabilities'] = match.group(1)

        if "Total expenses" in table:
            match = re.search(r'Total expenses\s+(.*?)\s+(.*?)\s+(.*?)\s+(.*?)\s+', table)
            if match:
                income_expenses['Total expenses'] = match.group(1)

        if "Profit/ (loss) after tax" in table:
            match = re.search(r'Profit/ \(loss\) after tax\s+(.*?)\s+(.*?)\s+(.*?)\s+(.*?)\s+', table)
            if match:
                income_expenses['Profit/ (loss) after tax'] = match.group(1)

        if "Net profit/ (loss) for the year" in table:
            match = re.search(r'Profit/ \(loss\) before tax\s+(.*?)\s+(.*?)\s+(.*?)\s+(.*?)\s+', table)
            if match:
                income_expenses['Net profit/ (loss)'] = match.group(1)

    json_data = json.dumps(income_expenses)
    print(json_data)
# print(os.getcwd())
extract_data(r'C:\Users\MINT\Desktop\project_main\react_app_13\myapp\Python\temp.txt')

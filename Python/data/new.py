import camelot
import pandas as pd

def extract_tables_from_pdf(pdf_file_path, start_page, end_page):
    """
    Extracts tables from a PDF using camelot library.

    Args:
        pdf_file_path (str): Path to the PDF file.
        start_page (int): Starting page number (inclusive).
        end_page (int): Ending page number (inclusive).

    Returns:
        list: A list of Camelot's Table objects containing extracted tables.
    """
    tables = camelot.read_pdf(pdf_file_path, pages=f"{start_page}-{end_page}", flavor='stream')  # Optional flavor argument
    return tables

def save_tables_to_excel(tables, excel_file_path):
    """
    Saves tables to an Excel file.

    Args:
        tables (list): List of Camelot's Table objects.
        excel_file_path (str): Path to the Excel file.
    """
    writer = pd.ExcelWriter(excel_file_path)
    for i, table in enumerate(tables):
        table.df.to_excel(writer, sheet_name=f"Table_{i+1}", index=False)
    writer.close()

def save_tables_to_textfile(tables, text_file_path):
    """
    Saves tables to a text file.

    Args:
        tables (list): List of Camelot's Table objects.
        text_file_path (str): Path to the text file.
    """
    with open(text_file_path, 'w', encoding='utf-8') as f:
        for i, table in enumerate(tables):
            f.write(f"Table {i+1}:\n")
            table_without_notes = table.df.drop(columns=[1])
            text = table_without_notes.to_string(index=False)
            f.write(text)
            f.write('\n\n')

def main():
    """
    Prompts user for start and end page, then extracts and saves tables.
    """
    pdf_file_path = "7738a1c9-43a3-46eb-a1b7-4e3efa4c0d02.pdf"
    start_page = int(290)
    end_page = int(296)
    tables = extract_tables_from_pdf(pdf_file_path, start_page, end_page)
    save_tables_to_excel(tables, 'output_tables.xlsx')
    save_tables_to_textfile(tables, 'output_tables.txt')

if __name__ == "__main__":
    main()

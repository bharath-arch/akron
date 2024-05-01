import PyPDF2
import tabula

def extract_tables_from_pdf(pdf_file, start_page, end_page):
    # Open the PDF file
    with open(pdf_file, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        num_pages = len(reader.pages)

        # Check if the specified pages are within the range of the document
        if start_page > num_pages or end_page > num_pages:
            print("Error: Specified pages are out of range.")
            return
        
        # Extract text from specified pages
        text = ""
        for page_num in range(start_page - 1, end_page):
            page = reader.pages[page_num]
            text += page.extract_text()

        # Save the extracted text to a temporary file
        temp_file = 'temp.txt'
        with open(temp_file, 'w', encoding='utf-8') as temp:
            temp.write(text)

        # Extract tables from the temporary text file
        tables = tabula.read_pdf(temp_file, pages=list(range(start_page, end_page + 1)), multiple_tables=True)

        # Clean up temporary file
        import os
        os.remove(temp_file)

        return tables

# Specify the PDF file and page range
pdf_file = '7738a1c9-43a3-46eb-a1b7-4e3efa4c0d02.pdf'
start_page = 290
end_page = 300

# Extract tables
tables = extract_tables_from_pdf(pdf_file, start_page, end_page)

# Print the extracted tables
for i, table in enumerate(tables, start=1):
    print(f"Table {i}:")
    print(table)
    print("\n")
